//Math.random renvoi un float aléatoir entre 0 et 1 exclus, donc on la multiplie par 101 pour avoir 100,99999
//Math.floor prend la valeur entière la plus grande fournit par Math.random
let valeurAleatoire = Math.floor(Math.random()*101);
let essai = 0
console.log(valeurAleatoire);

//récupérer la valeur entrez par l'utilsateur
let valeurUser = document.getElementById("guess");

//récupérer le click du bouton submit
let button = document.getElementById("submitGuess");

//remplir le champ message
let message = document.getElementById("message");

// récupérer le click du bouton rejouer
let rejouer = document.getElementById("reload");

//remplir le champ historique
let historique = document.getElementById("historique")
//tableau pour l'historique
let tableauHistorique = []
let historiqueValue = ""

//comparer les deux valeurs
button.addEventListener("click", (event) => {
    // parse l'integer dans le string valeurUser
    let parseValueUser = parseInt(valeurUser.value);
    // console.log(parseValueUser);
    //historique du user
    historiqueValue = tableauHistorique.push(parseValueUser);
    console.log(historiqueValue)
    essai++;

    if (valeurAleatoire === parseValueUser) {
        message.innerText = "Bonne réponse trouvé en " + essai + " !";
        message.style.color = "green"
    } else if (valeurAleatoire > parseValueUser) {
        message.innerText = "Trop petit ! Essaye encore";
        message.style.color = "red";
        historique.innerText = historiqueValue;
    } else {
        message.innerText = "Trop grand ! Essaye encore";
        message.style.color = "red";
        historique.innerText = historiqueValue;
    }
});

//permet de rejouer
rejouer.addEventListener("click", (event) => {
    location.reload()
});