const box = document.getElementById("box");
const gameArea = document.getElementById("game-area");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const startBtn = document.getElementById("start-btn");

let score = 0;
let timeLeft = 15;
let timer;
let gameStarted = false;

function moveBox() {
    const maxX = gameArea.clientWidth - box.clientWidth;
    const maxY = gameArea.clientHeight - box.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    box.style.left = randomX + "px";
    box.style.top = randomY + "px";
}

function startGame() {
    score = 0;
    timeLeft = 15;
    scoreText.textContent = score;
    timeText.textContent = timeLeft;

    gameStarted = true;
    moveBox();

    timer = setInterval(() => {
        timeLeft--;
        timeText.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            gameStarted = false;
            alert("Waktu habis! Skor kamu: " + score);
        }
    }, 1000);
}

box.addEventListener("click", () => {
    if (!gameStarted) return;

    score++;
    scoreText.textContent = score;
    moveBox();
});

startBtn.addEventListener("click", () => {
    if (gameStarted) return;
    startGame();
});
