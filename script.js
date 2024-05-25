document.getElementById('start-button').addEventListener('click', startTest);
document.getElementById('restart-button').addEventListener('click', restartTest);

// Textes pour chaque durée
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
    document.getElementById('typing-area').classList.remove('hidden');
    document.getElementById('start-button').classList.add('hidden');
    document.getElementById('text-to-type').innerText = texts[duration];
    document.getElementById('user-input').value = '';
    document.getElementById('user-input').focus();
    startTime = new Date().getTime();
    timer = testDuration;
    interval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const currentTime = new Date().getTime();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    timer = testDuration - elapsedTime;
    document.getElementById('time-left').innerText = timer + ' secondes';

    if (timer <= 0) {
        clearInterval(interval);
        finishTest();
    }
}

function finishTest() {
    const userInput = document.getElementById('user-input').value;
    const wordsTyped = userInput.split(' ').length;
    const wordsPerMinute = Math.floor((wordsTyped / testDuration) * 60);
    const accuracy = calculateAccuracy(texts[document.getElementById('duration').value], userInput);

    document.getElementById('wpm').innerText = wordsPerMinute;
    document.getElementById('accuracy').innerText = accuracy;

    document.getElementById('typing-area').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
}

function calculateAccuracy(original, typed) {
    const originalWords = original.split(' ');
    const typedWords = typed.split(' ');
    let correctWords = 0;

    originalWords.forEach((word, index) => {
        if (word === typedWords[index]) {
            correctWords++;
        }
    });

    return ((correctWords / originalWords.length) * 100).toFixed(2);
}

function restartTest() {
    document.getElementById('results').classList.add('hidden');
    document.getElementById('start-button').classList.remove('hidden');
}
