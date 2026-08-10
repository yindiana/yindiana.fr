/**
 * products.js
 * ------------------------------------------------------------
 * Liste des articles affichés sur la page.
 * Remplace "link" par ton VRAI lien affilié Amazon (avec ?tag=tonID-21)
 * et personnalise le reste librement.
 *
 * Champs :
 *  id       -> identifiant unique (utilisé pour le lien direct ?q=... ou #id)
 *  name     -> nom affiché
 *  keywords -> mots-clés supplémentaires pour la recherche (synonymes, variante orthographe)
 *  desc     -> courte description
 *  price    -> prix indicatif affiché (string, ex: "24,99 €")
 *  emoji    -> icône utilisée en attendant une vraie photo produit
 *  color    -> couleur de fond de la vignette (hex)
 *  link     -> URL affiliée Amazon
 * ------------------------------------------------------------
 */

const PRODUCTS = [
  {
    id: "brosse-lissante",
    name: "Brosse lissante chauffante",
    keywords: ["brosse", "cheveux", "lissage", "coiffure"],
    desc: "Lisse en une seule brosse, chauffe en 30 secondes.",
    price: "29,99 €",
    emoji: "💇",
    color: "#3A2E1F",
    link: "https://www.amazon.fr/dp/REMPLACE-MOI-1?tag=TON-TAG-21"
  },
  {
    id: "mini-enceinte",
    name: "Mini enceinte Bluetooth",
    keywords: ["enceinte", "bluetooth", "musique", "haut-parleur"],
    desc: "Compacte, autonomie 12h, parfaite pour la plage.",
    price: "19,90 €",
    emoji: "🔊",
    color: "#1F2A3A",
    link: "https://www.amazon.fr/dp/REMPLACE-MOI-2?tag=TON-TAG-21"
  },
  {
    id: "lampe-bureau",
    name: "Lampe de bureau LED",
    keywords: ["lampe", "bureau", "led", "lumiere", "lumière"],
    desc: "3 modes de lumière, port USB intégré.",
    price: "22,50 €",
    emoji: "💡",
    color: "#3A331F",
    link: "https://www.amazon.fr/dp/REMPLACE-MOI-3?tag=TON-TAG-21"
  },
  {
    id: "organisateur-cables",
    name: "Organisateur de câbles",
    keywords: ["cable", "câble", "rangement", "bureau"],
    desc: "Fini les câbles emmêlés sur le bureau.",
    price: "9,99 €",
    emoji: "🔌",
    color: "#2A1F3A",
    link: "https://www.amazon.fr/dp/REMPLACE-MOI-4?tag=TON-TAG-21"
  },
  {
    id: "support-telephone",
    name: "Support téléphone voiture",
    keywords: ["support", "telephone", "téléphone", "voiture", "gps"],
    desc: "Fixation ventouse, rotation à 360°.",
    price: "14,90 €",
    emoji: "📱",
    color: "#1F3A2E",
    link: "https://www.amazon.fr/dp/REMPLACE-MOI-5?tag=TON-TAG-21"
  },
  {
    id: "gourde-isotherme",
    name: "Gourde isotherme 1L",
    keywords: ["gourde", "bouteille", "eau", "isotherme"],
    desc: "Garde le froid 24h, le chaud 12h.",
    price: "17,90 €",
    emoji: "🧊",
    color: "#1F3A3A",
    link: "https://www.amazon.fr/dp/REMPLACE-MOI-6?tag=TON-TAG-21"
  }
];
