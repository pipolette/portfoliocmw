// Objet de traduction
const translations = {
    fr: {
        welcome_title: "bienvenue sur cette page",
        description: "vous êtes sur la partie française :)"
    },
    en: {
        welcome_title: "welcome to this page",
        description: "you're on the english side :)"
    }
};

// Fonction pour mettre à jour le contenu en fonction de la langue sélectionnée
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = translations[lang][key];
    });

    localStorage.setItem('selectedLang', lang); //pour garder la langue choisie même après le rechargement de la page
}

// Gestionnaire d'événement pour les boutons
document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        updateLanguage(lang);
    });
});

// Initialisation au chargement
const savedLang = localStorage.getItem('selectedLang') || 'fr';
updateLanguage(savedLang);