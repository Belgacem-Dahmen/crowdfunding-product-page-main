document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner les éléments
    const mobileMenuBtn = document.getElementById('hamburgerBtn');
    const backProjectBtn = document.getElementById('back-project');
    const bookMarkBtn = document.getElementById('bookmark');
    const closeModalBtn = document.getElementById('close-modal');
    const modal = document.getElementById('modal');
    const modalOffers = document.querySelectorAll('.modal__offer');

    // Gestionnaire pour ouvrir le menu mobile
    mobileMenuBtn?.addEventListener('click', () => {
        console.log('Open Menu for Mobile');
        // Ajouter ici le code pour ouvrir le menu mobile
    });

    // Gestionnaire pour "back the project"
    backProjectBtn?.addEventListener('click', () => {
        console.log('Backing the project');
        modal.classList.add('section', 'modal')
        modal.classList.remove('hidden')
    });

    // Gestionnaire pour le bookmark du projet
    bookMarkBtn?.addEventListener('click', () => {
        console.log('Bookmarked');
        // Ajouter ici le code pour gérer le bookmark
    });

    // Gestionnaire pour fermer la modal
    closeModalBtn?.addEventListener('click', () => {
        modal.classList.remove('section', 'modal');
        modal.classList.add('hidden');
    });

    // Gestionnaire pour les offres dans la modal
    if (modalOffers.length > 0) {
        modalOffers.forEach((offer) => {
            offer.addEventListener('click', () => {
                modalOffers.forEach((item) => item.classList.remove('selected'));
                offer.classList.add('selected');
            });
        });
    }
});






// basculer les classes pour les offres sélectionnées dans la modal
document.addEventListener('DOMContentLoaded', (event) => {
    // Trouver tous les éléments avec la classe '.modal__offer'
    const modalOffers = document.querySelectorAll('.modal__offer');

    // Vérifier si des éléments existent
    if (modalOffers.length > 0) {
        // Ajouter un gestionnaire d'événement de clic à chaque élément
        modalOffers.forEach((offer) => {
            offer.addEventListener('click', () => {
                // Supprimer la classe 'selected' de tous les éléments
                modalOffers.forEach((item) => item.classList.remove('selected'));
                // Ajouter la classe 'selected' à l'élément cliqué
                offer.classList.add('selected');
            });
        });
    }
});



