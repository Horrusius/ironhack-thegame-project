const container = document.getElementById("game-area");
gameWidth = container.clientWidth;
gameHeight = container.clientHeight;

const player = new Player("player", 3);



setTimeout(function () {
    const instructions = document.getElementById("instructions");
    instructions.style.display = "none"
    dragonRoar.currentTime = 0;
    dragonRoar.play();
    setTimeout(() => {
        screenShake(1700, 5)
    }, 1500);
    setTimeout(() => {
        music.play();
    }, 1000);
}, 5000);

setTimeout(function () {
    cubeRain(30, 30, 1, 12000, 300);
}, 2000);

setTimeout(function () {
    bar(0, gameHeight / 2, gameWidth, 20, 900, 300, 80)
}, 10000);
setTimeout(function () {
    bar(gameWidth / 3, gameHeight, 20, gameHeight, 900, 300, 80)
}, 10000);

setTimeout(function () {
    bar(420, gameHeight, 20, gameHeight, 900, 300, 80)
}, 12000);
setTimeout(function () {
    bar(480, gameHeight, 20, gameHeight, 900, 300, 80)
}, 13000);
setTimeout(function () {
    bar(520, gameHeight, 20, gameHeight, 900, 300, 80)
}, 14000);
setTimeout(function () {
    bar(560, gameHeight, 20, gameHeight, 900, 300, 80)
}, 15000);

setTimeout(function () {
    circle(480, 270, 50, 0, 3, true, true, 16, 20, 2, 900)
}, 15500);
setTimeout(function () {
    circle(290, 370, 50, 0, 3, true, true, 16, 20, 2, 900)
}, 16500);
setTimeout(function () {
    circle(290, 230, 50, 0, 3, true, true, 16, 20, 2, 900)
}, 17500);
/*
setTimeout(function () {
    Bullet.spinningSpiral(840, 270, 100, 30, 1, 100, 900);
    startBulletCollisionChecker();
}, 17000);

/* setTimeout(function () {
    Bullet.spinningSpiral(140, 270, 100, 30, 1, 100, 900);
    startBulletCollisionChecker();
}, 2000); */

/* setTimeout(function () {
    Bullet.shootBulletRing(200, 300, 20, 30, 2, 900);
    startBulletCollisionChecker();
}, 2000);

setTimeout(function () {
    Bullet.explodingBurst(480, 270, 30, 5, 10, 300);
    startBulletCollisionChecker();
}, 2000);

etTimeout(function () {
    Bullet.wavePattern(480, 270, 30, 5, 5, 30);
    startBulletCollisionChecker();
}, 2000); */
/* setTimeout(function () {
    Bullet.alternatingSpiral(480, 270, 30, 2, 160, 50, 19000);
    startBulletCollisionChecker();
}, 2000); */

setTimeout(function () {
    window.location.href = "winscreen.html";
}, 25000);


function screenShake(duration = 500, intensity = 5) {
    const gameArea = document.getElementById("game-area");
    if (!gameArea) return;

    const start = Date.now();

    function shake() {
        const elapsed = Date.now() - start;
        if (elapsed < duration) {
            const randomX = (Math.random() - 0.5) * intensity * 2;
            const randomY = (Math.random() - 0.5) * intensity * 2;
            gameArea.style.transform = `translate(${randomX}px, ${randomY}px)`;
            requestAnimationFrame(shake);
        } else {
            gameArea.style.transform = 'translate(0, 0)';
        }
    }

    shake();
}

const dragonRoar = new Audio('assets/sounds/dragon-roar.mp3');
dragonRoar.volume = 0.5;

const music = new Audio('assets/sounds/music.mp3');
music.volume = 0.7;