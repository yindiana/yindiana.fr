$(document).ready(function() {
      // Données de démonstration (vous devrez les remplacer par vos propres données)
      var pages = [
        { title: "Apprendre HTML & CSS", url: "apprendre_le_html_css.html" },
        { title: "De windows à linux", url: "de_windows_a_linux.html" },
        { title: "L'affiliation Éthique", url: "affiliation_ethique.html" },
        //{ title: "Page 4", url: "/page4" },
        // ...
      ];
    
      var $searchInput = $('#search-input');
      var $suggestionsList = $('#suggestions-list');
    
      $searchInput.on('input', function() {
        var query = $(this).val();
        if (query.length >= 3) {
          var suggestions = getMatchingSuggestions(query);
          displaySuggestions(suggestions);
        } else {
          hideSuggestions();
        }
      });
    
      // Gestionnaire d'événements pour les liens de suggestion
      $suggestionsList.on('click', 'a', function(e) {
        e.preventDefault(); // Empêcher le comportement par défaut du navigateur pour le clic sur le lien
        var url = $(this).attr('href');
        window.location.href = url; // Rediriger l'utilisateur vers l'URL de la page cible
      });
    
      // Gestionnaire d'événements pour masquer les suggestions lorsqu'on clique en dehors de la barre de recherche
      $(document).on('click', function(e) {
        if (!$searchInput.is(e.target) && !$suggestionsList.is(e.target) && $suggestionsList.has(e.target).length === 0) {
          hideSuggestions();
        }
      });
    
      function getMatchingSuggestions(query) {
        var matchingSuggestions = [];
    
        // Parcourir les pages et trouver les correspondances avec la requête
        for (var i = 0; i < pages.length; i++) {
          var pageTitle = pages[i].title.toLowerCase();
          if (pageTitle.includes(query.toLowerCase())) {
            matchingSuggestions.push(pages[i]);
          }
        }
    
        return matchingSuggestions;
      }
    
      function displaySuggestions(suggestions) {
        $suggestionsList.empty();
    
        // Ajouter les suggestions à la liste
        for (var i = 0; i < suggestions.length; i++) {
          var suggestion = suggestions[i];
          var $suggestionItem = $('<li><a href="' + suggestion.url + '">' + suggestion.title + '</a></li>');
          $suggestionsList.append($suggestionItem);
        }
    
        // Afficher la liste des suggestions
        $suggestionsList.show();
      }
    
      function hideSuggestions() {
        // Cacher la liste des suggestions
        $suggestionsList.hide();
      }
    });
    