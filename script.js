document.getElementById('start-button').addEventListener('click', startTest);
document.getElementById('restart-button').addEventListener('click', restartTest);

const texts = {
    3: "Ceci est un exemple de texte pour un test de dactylographie de 3 minutes. Tapez-le aussi vite et aussi précisément que possible. Le texte doit être suffisamment long pour couvrir la durée choisie.",
    5: "Ceci est un exemple de texte pour un test de dactylographie de 5 minutes. Tapez-le aussi vite et aussi précisément que possible. Le texte doit être suffisamment long pour couvrir la durée choisie. Vous pouvez ajouter plus de contenu ici pour remplir le temps.",
    10: "Ceci est un exemple de texte pour un test de dactylographie de 10 minutes. Tapez-le aussi vite et aussi précisément que possible. Le texte doit être suffisamment long pour couvrir la durée choisie. Ajoutez encore plus de contenu ici pour remplir le temps et continuer à pratiquer votre dactylographie.",
    15: "Ceci est un exemple de texte pour un test de dactylographie de 15 minutes. Tapez-le aussi vite et aussi précisément que possible. Le texte doit être suffisamment long pour couvrir la durée choisie. Ajoutez beaucoup plus de contenu ici pour remplir le temps et continuer à pratiquer votre dactylographie. Plus vous pratiquez, plus vous vous améliorerez."
};

let timer;
let startTime;
let testDuration;
let interval;

function startTest() {
    const duration = document.getElementById('duration').value;
    testDuration = duration * 60; // Convertir les minutes en secondes

    // Afficher le texte correspondant à la durée choisie
    document.getElementById('text').textContent = texts[duration];

    // Démarrer le timer
    startTime = Date.now();
    timer = setInterval(updateTimer, 1000);

    // Désactiver le bouton de démarrage
    document.getElementById('start-button').disabled = true;
}

function updateTimer() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    const remainingTime = testDuration - elapsedTime;

    // Mettre à jour l'affichage du temps restant
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    // Vérifier si le temps est écoulé
    if (remainingTime <= 0) {
        clearInterval(timer);
        document.getElementById('start-button').disabled = false; // Réactiver le bouton de démarrage
    }
}

function restartTest() {
    clearInterval(timer);
    document.getElementById('timer').textContent = '';
    document.getElementById('start-button').disabled = false;
}
