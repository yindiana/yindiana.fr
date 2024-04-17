// déclaration des variables globales + events pour update des articles
document.getElementById('nav__logo').addEventListener('click', updateDisplayFlex4Homepage); /*page d'acceuil*/
document.getElementById('nav__menu-home').addEventListener('click', updateDisplayFlex4Homepage); /*page d'acceuil*/
document.getElementById('nav__menu-about').addEventListener('click', updateDisplayFlex4Portfolio); /*page portfolios*/
document.getElementById('nav__menu-contacts').addEventListener('click', updateDisplayFlex4Contacts); /*page de contacts*/
const listOfIdOfArticle = ['home-page','carousel-container','contacts'];

// permet le switch entre les articles
function updateDisplayFlex4Homepage() {
    document.getElementById(listOfIdOfArticle[0]).style.display = 'flex';
    // masque les deux autres articles
    document.getElementById(listOfIdOfArticle[1]).style.display = 'none';
    document.getElementById(listOfIdOfArticle[2]).style.display = 'none';
}

function updateDisplayFlex4Portfolio() {
    document.getElementById(listOfIdOfArticle[1]).style.display = 'flex';
    // masque les deux autres articles
    document.getElementById(listOfIdOfArticle[0]).style.display = 'none';
    document.getElementById(listOfIdOfArticle[2]).style.display = 'none';
}

function updateDisplayFlex4Contacts() {
    document.getElementById(listOfIdOfArticle[2]).style.display = 'flex';
    // masque les deux autres articles
    document.getElementById(listOfIdOfArticle[0]).style.display = 'none';
    document.getElementById(listOfIdOfArticle[1]).style.display = 'none';
}