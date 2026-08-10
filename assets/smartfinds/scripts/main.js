/**
 * main.js
 * ------------------------------------------------------------
 * - Affiche les produits de products.js
 * - Filtre en direct pendant que l'utilisateur tape
 * - Supporte un lien direct depuis une vidéo : index.html?q=brosse
 *   (pratique : chaque vidéo peut avoir un lien en bio différent
 *   qui pré-remplit la recherche avec le bon produit)
 * ------------------------------------------------------------
 */

(function () {
  const searchForm  = document.getElementById("product-search-form");
  const searchInput = document.getElementById("product-search");
  const grid        = document.getElementById("products-grid");
  const emptyState  = document.getElementById("empty-state");
  const emptyQuery  = document.getElementById("empty-query");
  const resultCount = document.getElementById("result-count");
  const yearEl      = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Enlève les accents pour une recherche plus tolérante ("gourde" trouve "gourdé")
  function normalize(str) {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function matches(product, query) {
    if (!query) return true;
    const q = normalize(query);
    const haystack = normalize(
      [product.name, product.desc, ...(product.keywords || [])].join(" ")
    );
    return haystack.includes(q);
  }

  function renderProduct(product) {
    const card = document.createElement("article");
    card.className = "product-card";
    card.id = "product-" + product.id;

    card.innerHTML = `
      <div class="product-thumb" style="--product-color:${escapeHTML(product.color || "#2B2F3A")}">
        ${escapeHTML(product.emoji || "🛍️")}
      </div>
      <h3 class="product-name">${escapeHTML(product.name)}</h3>
      <p class="product-desc">${escapeHTML(product.desc || "")}</p>
      <div class="product-footer">
        <span class="product-price">${escapeHTML(product.price || "")}</span>
        <a class="product-cta" href="${product.link}" target="_blank" rel="noopener sponsored">
          Voir sur Amazon ↗
        </a>
      </div>
    `;
    return card;
  }

  function render(query) {
    const results = PRODUCTS.filter((p) => matches(p, query));

    grid.innerHTML = "";
    results.forEach((p) => grid.appendChild(renderProduct(p)));

    const hasQuery = Boolean(query && query.trim());
    const noResults = hasQuery && results.length === 0;

    emptyState.hidden = !noResults;
    grid.hidden = noResults;

    if (!hasQuery) {
      resultCount.textContent = "";
    } else if (noResults) {
      emptyQuery.textContent = query;
      resultCount.textContent = "";
    } else {
      resultCount.textContent =
        results.length === 1
          ? "1 article trouvé"
          : `${results.length} articles trouvés`;
    }
  }

  // Recherche en direct pendant la frappe
  searchInput.addEventListener("input", (e) => {
    render(e.target.value);
  });

  // Empêche le rechargement de page au submit (le filtrage est déjà en direct)
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    render(searchInput.value);
    document.getElementById("products-grid").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // Lien direct depuis une vidéo : monsite.re/index.html?q=brosse
  const params = new URLSearchParams(window.location.search);
  const initialQuery = params.get("q") || "";
  if (initialQuery) searchInput.value = initialQuery;

  render(initialQuery);
})();
