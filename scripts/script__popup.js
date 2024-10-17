document.addEventListener('DOMContentLoaded', function() {
    // Afficher le pop-up lorsque la page est chargée
    const popup = document.getElementById('welcome-popup');
    popup.style.display = 'flex';

    // Gérer le clic sur le bouton de fermeture
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none'; // Masquer le pop-up
    });

    // Optionnel : fermer le pop-up en cliquant à l'extérieur de la boîte
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none'; // Masquer le pop-up
        }
    });
});
