document.getElementById('start-button').addEventListener('click', startTest);
document.getElementById('restart-button').addEventListener('click', restartTest);

const textToType = "Ceci est un exemple de texte à taper pour le test de dactylographie. Tapez-le aussi vite et aussi précisément que possible.";
let timer;
let startTime;
let testDuration;
let interval;

function startTest() {
    const duration = document.getElementById('duration').value;
    testDuration = duration * 60; // Convertir les minutes en secondes
    document.getElementById('typing-area').classList.remove('hidden');
    document.getElementById('start-button').classList.add('hidden');
    document.getElementById('text-to-type').innerText = textToType;
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
    const accuracy = calculateAccuracy(textToType, userInput);

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
