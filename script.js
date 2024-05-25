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
    document.get
