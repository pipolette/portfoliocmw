/* pour cette partie là du code, je me suis aidée de l'IA de Gemini afin qu'elle complète mon code de base
pour créer le code qui permet de basculer entre le mode sombre et le mode clair. */


document.addEventListener('DOMContentLoaded', () => {
    const boutonDarkMode = document.getElementById('toggle-darkmode');
    
    /* ici l'ia m'a suggéré de rajouter cette partie qui permet de savoir si
    l'utilisateur avait déjà activé le mode sombre lors d'une visite précédente */
    const ancienChoix = localStorage.getItem('theme');
    if (ancienChoix === 'sombre') {
        document.body.classList.add('dark-mode');
    }

    /*ici on écoute le clic sur le bouton pour basculer de mode */
    if (boutonDarkMode) {
        boutonDarkMode.addEventListener('click', () => {
            /* alors on bascule dark-mode sur le body */
            document.body.classList.toggle('dark-mode');
            
            /* autre chose que l'IA m'a suggéré c'est d'enregistrer le
            choix de l'utilisateur pour les autres pages et pour les visites futures */
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'sombre');
            } else {
                localStorage.setItem('theme', 'lumineux');
            }
        });
    }
});