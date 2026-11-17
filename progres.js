// ============================================================
//  PROGRESSION : les points que l'on a marqués « Je connais ».
//  Gardés dans ce navigateur seulement (localStorage) : rien n'est
//  envoyé ailleurs. Si le stockage est bloqué (navigation privée…),
//  le site fonctionne quand même, simplement sans mémoire.
// ============================================================

const CLE_PROGRES = "aimyon-grammaire:connus";

function lireConnus() {
  try {
    return new Set(JSON.parse(localStorage.getItem(CLE_PROGRES) || "[]"));
  } catch (erreur) {
    return new Set();
  }
}

function ecrireConnus(connus) {
  try {
    localStorage.setItem(CLE_PROGRES, JSON.stringify([...connus]));
  } catch (erreur) {
    // stockage indisponible : on garde l'état pour cette visite seulement
  }
}

const CONNUS = lireConnus();

function estConnu(titre) {
  return CONNUS.has(titre);
}

// Bascule « connu / pas encore » et renvoie le nouvel état
function basculerConnu(titre) {
  if (CONNUS.has(titre)) CONNUS.delete(titre);
  else CONNUS.add(titre);
  ecrireConnus(CONNUS);
  return CONNUS.has(titre);
}

// Bouton « Je connais » : même apparence sur toutes les pages
function boutonConnu(titre) {
  const connu = estConnu(titre);
  return `<button type="button" class="bouton-connu" data-titre="${titre.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;")}" aria-pressed="${connu}">${connu ? "✓ Je connais" : "Je connais ?"}</button>`;
}

// Un seul écouteur pour tous les boutons « Je connais » de la page
document.addEventListener("click", (evenement) => {
  const bouton = evenement.target.closest(".bouton-connu");
  if (!bouton) return;
  const connu = basculerConnu(bouton.dataset.titre);
  bouton.setAttribute("aria-pressed", connu);
  bouton.textContent = connu ? "✓ Je connais" : "Je connais ?";
  document.dispatchEvent(new CustomEvent("progres-change", { detail: { titre: bouton.dataset.titre, connu } }));
});
