#!/usr/bin/env python3
"""Fabrique data-kanji.js : les fiches de kanji de la loupe (survol).

Sources, les mêmes que l'extension 10ten :
  - KANJIDIC2 (https://www.edrdg.org/kanjidic/kanjidic2.xml.gz)
  - KRADFILE (https://www.edrdg.org/pub/Nihongo/kradfile.gz)
Ces fichiers appartiennent à l'Electronic Dictionary Research and
Development Group (EDRDG) et sont utilisés selon sa licence
(https://www.edrdg.org/edrdg/licence.html, CC BY-SA 4.0).
data-kanji.js, qui en est tiré, est donc sous la même licence.

Seuls les kanji présents dans les pages et les données du site sont gardés.

Usage :
  python3 -I outils/generer-kanji.py chemin/kanjidic2.xml chemin/kradfile
  (le kradfile peut être encore en EUC-JP, comme à sa sortie du .gz)
"""
import json
import pathlib
import sys
import xml.etree.ElementTree as ET

RACINE = pathlib.Path(__file__).resolve().parent.parent

# KRADFILE utilise des kanji « porteurs » à la place de certains éléments ;
# sa propre en-tête donne le vrai caractère Unicode de chacun.
SUBSTITUTS = {
    "化": 0x2E85, "个": 0x201A2, "并": 0x4E37, "刈": 0x2E89, "込": 0x2ECC,
    "尚": 0x2E8C, "忙": 0x2E96, "扎": 0x2E98, "汁": 0x2EA1, "犯": 0x2EA8,
    "艾": 0x2EBE, "邦": 0x2ECF, "阡": 0x2ED6, "老": 0x2EB9, "杰": 0x2EA3,
    "礼": 0x2EAD, "疔": 0x2F67, "禹": 0x2F71, "初": 0x2EC2, "買": 0x2EB2,
    "滴": 0x5547, "乞": 0x20089,
}

# Ouvrages de référence repris (code KANJIDIC2 -> nom affiché)
OUVRAGES = {
    "heisig6": "Heisig, Remembering the Kanji (6e éd.)",
    "henshall": "Henshall, A Guide to Remembering Japanese Characters",
    "halpern_kkld_2ed": "Kodansha Kanji Learner's Dictionary (2e éd.)",
    "sh_kk2": "Hadamitzky, Kanji & Kana (2011)",
    "nelson_c": "Classic Nelson",
    "nelson_n": "New Nelson",
}


def est_kanji(c):
    o = ord(c)
    return 0x4E00 <= o <= 0x9FFF or 0x3400 <= o <= 0x4DBF or 0xF900 <= o <= 0xFAFF


def kanji_du_site():
    trouves = set()
    for f in list(RACINE.glob("*.js")) + list(RACINE.glob("*.html")):
        if f.name in ("data-kanji.js", "data-mots.js", "deinflexion.js", "loupe-kanji.js"):
            continue
        trouves.update(c for c in f.read_text(encoding="utf-8") if est_kanji(c))
    return trouves


def lire_krad(chemin):
    brut = pathlib.Path(chemin).read_bytes()
    try:
        texte = brut.decode("utf-8")
    except UnicodeDecodeError:
        texte = brut.decode("euc_jp")
    elements = {}
    for ligne in texte.splitlines():
        if ligne.startswith("#") or " : " not in ligne:
            continue
        k, reste = ligne.split(" : ", 1)
        elements[k] = [chr(SUBSTITUTS[e]) if e in SUBSTITUTS else e for e in reste.split()]
    return elements


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    voulus = kanji_du_site()
    krad = lire_krad(sys.argv[2])
    arbre = ET.parse(sys.argv[1]).getroot()
    entete = arbre.find("header")
    version = f"{entete.findtext('database_version')} ({entete.findtext('date_of_creation')})"
    sortie = {}
    for car in arbre.iter("character"):
        k = car.findtext("literal")
        if k not in voulus:
            continue
        misc = car.find("misc")
        rad = car.find("radical/rad_value[@rad_type='classical']")
        on, kun, fr, en = [], [], [], []
        for r in car.iterfind("reading_meaning/rmgroup/reading"):
            if r.get("r_type") == "ja_on":
                on.append(r.text)
            elif r.get("r_type") == "ja_kun":
                kun.append(r.text)
        for m in car.iterfind("reading_meaning/rmgroup/meaning"):
            langue = m.get("m_lang")
            if langue == "fr":
                fr.append(m.text)
            elif langue is None:
                en.append(m.text)
        fiche = {
            "on": on, "kun": kun,
            "traits": int(misc.findtext("stroke_count")),
            "radical": int(rad.text) if rad is not None else None,
        }
        fiche["en"] = en
        if fr:
            fiche["fr"] = fr
        for champ, cle in (("grade", "classe"), ("freq", "frequence"), ("jlpt", "jlpt")):
            v = misc.findtext(champ)
            if v:
                fiche[cle] = int(v)
        refs = {}
        for d in car.iterfind("dic_number/dic_ref"):
            if d.get("dr_type") in OUVRAGES and d.get("dr_type") not in refs:
                refs[d.get("dr_type")] = d.text
        skip = car.find("query_code/q_code[@qc_type='skip']")
        if skip is not None and not skip.get("skip_misclass"):
            refs["skip"] = skip.text
        if refs:
            fiche["refs"] = refs
        if k in krad:
            fiche["elements"] = [e for e in krad[k] if e != k]
        sortie[k] = fiche
    manquants = sorted(voulus - set(sortie))
    lignes = [
        "// Fiches de kanji pour la loupe : FABRIQUÉ par outils/generer-kanji.py, ne pas modifier à la main.",
        "// Données : KANJIDIC2 et KRADFILE, propriété de l'Electronic Dictionary Research and",
        "// Development Group (EDRDG), utilisées selon sa licence : https://www.edrdg.org/edrdg/licence.html",
        "// Licence CC BY-SA 4.0. Version KANJIDIC2 : " + version,
        "const OUVRAGES_KANJI = " + json.dumps(OUVRAGES, ensure_ascii=False) + ";",
        "const KANJI = {",
    ]
    lignes += [f"  {json.dumps(k, ensure_ascii=False)}: {json.dumps(v, ensure_ascii=False, separators=(',', ':'))}," for k, v in sorted(sortie.items())]
    lignes.append("};")
    (RACINE / "data-kanji.js").write_text("\n".join(lignes) + "\n", encoding="utf-8")
    print(f"{len(sortie)} kanji écrits ; absents de KANJIDIC2 : {''.join(manquants) or 'aucun'}")


if __name__ == "__main__":
    main()
