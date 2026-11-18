#!/usr/bin/env python3
"""Télécharge le texte complet des chansons dans le dossier paroles-locales/.

Ce dossier est ignoré par Git : les paroles sont protégées par le droit
d'auteur et ne doivent pas être publiées avec le site. Ce script permet de
les récupérer de nouveau pour un usage personnel (relire une traduction,
chercher un nouvel exemple de grammaire).

Usage, depuis la racine du projet :
    python3 outils/telecharger-paroles.py

Les adresses viennent de data-paroles.js (site J-Lyric.net). Le script
attend une seconde entre deux pages pour ne pas surcharger le site.
"""
import html
import json
import os
import re
import time
import urllib.request

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOSSIER = os.path.join(RACINE, "paroles-locales")


def lire_adresses():
    source = open(os.path.join(RACINE, "data-paroles.js"), encoding="utf8").read()
    return dict(re.findall(r'^\s*("(?:[^"\\]|\\.)*"): ("(?:[^"\\]|\\.)*")', source, flags=re.M))


SITES_AUTORISES = ("https://j-lyric.net/", "https://utaten.com/")


def nom_de_fichier(titre):
    """Nom de fichier sûr : ni dossier, ni « .. », ni caractère interdit."""
    nom = re.sub(r'[\\/:*?"<>|\x00-\x1f]', "_", titre).strip(" .")
    return (nom or "sans-titre")[:120]


def telecharger(adresse):
    if not adresse.startswith(SITES_AUTORISES):
        return None  # on ne télécharge que depuis les sites de paroles connus
    requete = urllib.request.Request(adresse, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(requete, timeout=30) as reponse:
        page = reponse.read().decode("utf8", errors="ignore")
    bloc = re.search(r'<p id="Lyric"[^>]*>(.*?)</p>', page, flags=re.S)
    if not bloc:
        return None
    lignes = re.split(r"<br\s*/?>", bloc.group(1))
    lignes = [html.unescape(re.sub(r"<[^>]+>", "", l)).strip() for l in lignes]
    # Les lignes vides séparent les couplets : on les garde
    return "\n".join(lignes).strip()


def main():
    os.makedirs(DOSSIER, exist_ok=True)
    adresses = lire_adresses()
    faits = 0
    for titre_json, adresse_json in adresses.items():
        titre, adresse = json.loads(titre_json), json.loads(adresse_json)
        fichier = os.path.join(DOSSIER, nom_de_fichier(titre) + ".txt")
        if os.path.exists(fichier):
            continue
        texte = telecharger(adresse)
        if texte is None:
            print("Paroles introuvables :", titre)
            continue
        with open(fichier, "w", encoding="utf8") as f:
            f.write(texte + "\n")
        faits += 1
        time.sleep(1)
    print(f"{faits} chanson(s) téléchargée(s), {len(os.listdir(DOSSIER))} au total dans paroles-locales/")


if __name__ == "__main__":
    main()
