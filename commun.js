// ============================================================
//  OUTILS COMMUNS DE SÉCURITÉ, chargés avant les autres scripts.
// ============================================================

// N'accepte qu'une adresse https (ou une page du site) pour un lien ou
// une image : une adresse « javascript: » glissée dans les données ne
// pourrait donc jamais s'exécuter.
function urlSure(adresse) {
  const texte = String(adresse || "");
  if (/^https:\/\//i.test(texte)) return texte;
  if (/^[a-z0-9-]+\.html(\?[^"<>]*)?$/i.test(texte)) return texte;
  return "#";
}

// Une pochette qui ne se charge pas disparaît (data-retirer="soi" ou
// "parent"), sans attribut onerror dans le HTML : cela permet d'interdire
// tout script en ligne dans la politique de sécurité de la page.
document.addEventListener("error", (evenement) => {
  const image = evenement.target;
  if (!(image instanceof HTMLImageElement) || !image.dataset.retirer) return;
  (image.dataset.retirer === "parent" ? image.parentNode : image).remove();
}, true);
