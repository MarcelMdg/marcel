
  $(document).ready(function() {
    // **SECTION 1 : Effets de la barre de navigation et du bouton de retour en haut**
    $(window).scroll(function() {
      // Navbar fixe lors du défilement
      if (this.scrollY > 20) {
        $('.navbar').addClass("sticky");
      } else {
        $('.navbar').removeClass("sticky");
      }

      // Affichage/masquage du bouton de retour en haut
      if (this.scrollY > 500) {
        $('.scroll-up-btn').addClass("show");
      } else {
        $('.scroll-up-btn').removeClass("show");
      }

      // **SECTION 2 : Effet d'apparition des produits au défilement (intégration du deuxième script)**
      let produits = document.querySelectorAll('.produit');
      let positionEcran = window.innerHeight * 0.9;

      produits.forEach(produit => {
        let positionProduit = produit.getBoundingClientRect().top;
        if (positionProduit < positionEcran) {
          produit.classList.add('visible');
        } else {
          produit.classList.remove('visible');
        }
      });
    });

    // Animation de retour en haut
    $('.scroll-up-btn').click(function() {
      $('html').animate({ scrollTop: 0 });
      $('html').css("scrollBehavior", "auto");
    });

    // Défilement fluide lors du clic sur les éléments du menu
    $('.navbar .menu li a').click(function() {
      $('html').css("scrollBehavior", "smooth");
    });

    // Bascule de l'affichage du menu/navbar
    $('.menu-btn').click(function() {
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
    });

    // Animation de texte (titre principal)
    var typed = new Typed(".typing", {
      strings: ["Développeur Web", "Freelance"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    // Animation de texte (section "À propos")
    var typed = new Typed(".typing-2", {
      strings: ["Développeur Web", "Freelance"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    // Configuration du carrousel (commentée)
    // $('.carousel').owlCarousel({ ... });
  });

  console.log("Le script JavaScript combiné est chargé ! Tous les effets sont actifs.")
