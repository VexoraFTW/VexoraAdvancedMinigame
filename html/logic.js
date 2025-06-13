console.log("[VEXORA] NUI Loaded");

let config = {};
let timer = null;
let timeLeft = 10;
let gameActive = false;
let correct = null;

window.addEventListener('message', function (event) {
    if (event.data.action === 'show') {
        console.log("[VEXORA] Minigame Show Triggered");
        config = event.data.config || {};
        document.getElementById('game').classList.remove('hidden');
        document.getElementById('game').style.display = 'flex';
        startGame();
    } else if (event.data.action === 'hide') {
        console.log("[VEXORA] Minigame Hidden");
        stopGame(false);
        document.getElementById('game').classList.add('hidden');
        document.getElementById('game').style.display = 'none';
    }
});

function startGame() {
    gameActive = true;

    const stage = document.getElementById('stage-container');
    stage.innerHTML = '';

    const buttons = ['A', 'B', 'C', 'D'];
    correct = buttons[Math.floor(Math.random() * buttons.length)];
    console.log("[VEXORA] Correct Wire:", correct);

    buttons.forEach(btn => {
        const el = document.createElement('div');
        el.classList.add('wire-button');
        el.innerText = btn;
        el.onclick = () => {
            if (!gameActive) return;
            if (config.sound) new Audio('sounds/hover.mp3').play();
            if (btn === correct) {
                if (config.sound) new Audio('sounds/success.mp3').play();
                stopGame(true);
            } else {
                if (config.sound) new Audio('sounds/fail.mp3').play();
                stopGame(false);
            }
        };
        stage.appendChild(el);
    });

    timeLeft = config.difficulty === "hard" ? 5 : config.difficulty === "medium" ? 10 : 15;
    document.getElementById('time').innerText = timeLeft;

    if (timer) clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;
        if (timeLeft <= 0) {
            stopGame(false);
        }
    }, 1000);
}

function stopGame(success) {
    if (!gameActive) return;
    gameActive = false;

    if (timer) clearInterval(timer);

    console.log("[VEXORA] Game ended | Success:", success);

    fetch(`https://${GetParentResourceName()}/vexora-advanced:result`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success })
    });

    document.getElementById('game').classList.add('hidden');
    document.getElementById('game').style.display = 'none';
}
