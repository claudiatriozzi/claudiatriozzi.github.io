document.addEventListener("DOMContentLoaded", function() {
    // Initialisation des diaporamas
    initSlideshow("slideshow1");
    initSlideshow("slideshow2");

    // Fonction pour initialiser un diaporama
    function initSlideshow(slideshowId) {
        let slideIndex = 0;
        const images = document.querySelectorAll(`#${slideshowId} .image-container img`);
        
        showSlides();

        // Fonction pour avancer et reculer les images
        function plusSlides(n) {
            slideIndex += n;
            showSlides();
        }

        // Fonction pour afficher l'image correspondant à l'index actuel
        function showSlides() {
            if (!images || images.length === 0) return;

            // Masquer toutes les images
            images.forEach(img => img.classList.remove('show'));

            // Vérifier les limites de l'index
            if (slideIndex >= images.length) {
                slideIndex = 0;
            } else if (slideIndex < 0) {
                slideIndex = images.length - 1;
            }

            // Afficher l'image actuelle
            images[slideIndex].classList.add('show');
        }

        // Ajouter les événements de navigation pour ce diaporama
        document.querySelector(`#${slideshowId} .prev`).addEventListener('click', function() {
            plusSlides(-1);
        });
        document.querySelector(`#${slideshowId} .next`).addEventListener('click', function() {
            plusSlides(1);
        });
    }
});
