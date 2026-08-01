// ---------------------------------------------------------
// Petit utilitaire pour réutiliser ce template facilement :
// remplis l'objet ARTICLE ci-dessous, ou laisse le HTML tel
// quel et édite directement le markup si tu préfères.
// ---------------------------------------------------------
const ARTICLE = {
  title: null,      // ex: "Ce téléphone va tout changer — ou presque"
  date: null,        // ex: "12 juin 2025"
  readTime: null,    // ex: "5 min de lecture"
};

document.addEventListener('DOMContentLoaded', () => {
  if (ARTICLE.title) document.getElementById('article-title').textContent = ARTICLE.title;
  if (ARTICLE.date) document.getElementById('article-date').textContent = ARTICLE.date;
  if (ARTICLE.readTime) document.getElementById('article-read-time').textContent = ARTICLE.readTime;
});
