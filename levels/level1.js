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
    cubeRain(30, 30, 1, 42000, 300);
}, 7000);

setTimeout(function () {
    circle(480, 270, 50, 0, 3, true, false, 16, 20, 2, 900)
}, 25000);

setTimeout(function () {
    circle(280, 200, 50, 0, 3, true, false, 16, 20, 2, 900)
}, 25300);

setTimeout(function () {
    circle(780, 220, 50, 0, 3, true, false, 16, 20, 2, 900)
}, 26000);

setTimeout(function () {
    circle(700, 190, 50, 0, 3, true, false, 16, 20, 2, 900)
}, 27000);

setTimeout(function () {
    circle(300, 390, 50, 0, 3, true, false, 16, 20, 2, 900)
}, 27000);
setTimeout(function () {
    circle(420, 80, 50, 0, 3, true, false, 16, 20, 2, 900)
}, 27300);
setTimeout(function () {
    circle(830, 500, 50, 0, 3, true, false, 16, 20, 2, 900)
}, 27400);
setTimeout(function () {
    circle(420, 121, 50, 0, 3, true, false, 16, 20, 2, 900)
}, 28000);
setTimeout(function () {
    circle(60, 390, 50, 0, 3, true, false, 16, 20, 2, 900)
}, 28600);

setTimeout(function () {
    bar(180, gameHeight, 40, gameHeight, 900, 300, 80)
}, 30000);
setTimeout(function () {
    bar(380, gameHeight, 40, gameHeight, 900, 300, 80)
}, 30500);
setTimeout(function () {
    bar(580, gameHeight, 40, gameHeight, 900, 300, 80)
}, 31000);
setTimeout(function () {
    bar(780, gameHeight, 40, gameHeight, 900, 300, 80)
}, 31500);

setTimeout(function () {
    Bullet.spinningSpiral(940, 0, 100, 30, 1, 100, 1200);
    startBulletCollisionChecker();
}, 33000);

setTimeout(function () {
    bar(0, 130, gameWidth, 20, 900, 300, 80)
    bar(130, gameHeight, 20, gameHeight, 900, 300, 80)
}, 40000);

setTimeout(function () {
    bar(0, 400, gameWidth, 20, 900, 300, 80)
    bar(300, gameHeight, 20, gameHeight, 900, 300, 80)
}, 41000);

setTimeout(function () {
    bar(0, 350, gameWidth, 20, 900, 300, 80)
    bar(550, gameHeight, 20, gameHeight, 900, 300, 80)
}, 42000);

setTimeout(function () {
    bar(0, 200, gameWidth, 20, 900, 300, 80)
    bar(700, gameHeight, 20, gameHeight, 900, 300, 80)
}, 43000);



setTimeout(function () {
    Bullet.wavePattern(50, 0, 10, 1, 15, 60);
    startBulletCollisionChecker();
}, 49000);

setTimeout(function () {
    circle(470, 270, 50, 0, 3, true, true, 24, 10, 1, 900)
}, 51000);

setTimeout(function () {
    circle(800, 270, 50, 0, 3, true, true, 24, 10, 1, 900)
}, 53000);

setTimeout(function () {
    circle(140, 270, 50, 0, 3, true, true, 24, 10, 1, 900)
}, 53000);


setTimeout(function () {
    circle(47, 270, 30, 0, 3, true, false, 24, 10, 1, 900)
}, 59000);
setTimeout(function () {
    Bullet.spinningSpiral(47, 270, 100, 20, 1, 100, 900);
    startBulletCollisionChecker();
}, 60000);

setTimeout(function () {
    circle(834, 170, 30, 0, 3, true, false, 24, 10, 1, 900)
}, 64000);
setTimeout(function () {
    Bullet.spinningSpiral(834, 170, 100, 20, 1, 100, 900);
    startBulletCollisionChecker();
}, 65000);

setTimeout(function () {
    circle(200, 465, 30, 0, 3, true, false, 24, 10, 1, 900)
}, 67000);
setTimeout(function () {
    Bullet.spinningSpiral(200, 465, 100, 20, 1, 100, 900);
    startBulletCollisionChecker();
}, 68000);


setTimeout(function () {
    cubeRain(20, 20, 1, 25000, 500);
}, 74000);

setTimeout(function () {
    Bullet.wavePattern(50, 0, 10, 1, 15, 60);
    startBulletCollisionChecker();
}, 85000);

setTimeout(function () {
    Bullet.wavePattern(50, 0, 10, 1, 15, 60);
    startBulletCollisionChecker();
}, 88000);

setTimeout(function () {
    Bullet.wavePattern(50, 0, 10, 1, 15, 60);
    startBulletCollisionChecker();
}, 91000);

setTimeout(function () {
    bar(0, 130, gameWidth, 20, 900, 300, 80)
    bar(130, gameHeight, 20, gameHeight, 900, 300, 80)
}, 95100);

setTimeout(function () {
    bar(0, 400, gameWidth, 20, 900, 300, 80)
    bar(300, gameHeight, 20, gameHeight, 900, 300, 80)
}, 95200);

setTimeout(function () {
    bar(0, 350, gameWidth, 20, 900, 300, 80)
    bar(550, gameHeight, 20, gameHeight, 900, 300, 80)
}, 95300);

setTimeout(function () {
    bar(0, 200, gameWidth, 20, 900, 300, 80)
    bar(700, gameHeight, 20, gameHeight, 900, 300, 80)
}, 95400);

setTimeout(function () {
    bar(0, 80, gameWidth, 20, 900, 300, 80)
    bar(270, gameHeight, 20, gameHeight, 900, 300, 80)
}, 96100);

setTimeout(function () {
    bar(0, 500, gameWidth, 20, 900, 300, 80)
    bar(400, gameHeight, 20, gameHeight, 900, 300, 80)
}, 96200);

setTimeout(function () {
    bar(0, 400, gameWidth, 20, 900, 300, 80)
    bar(100, gameHeight, 20, gameHeight, 900, 300, 80)
}, 96300);

setTimeout(function () {
    bar(0, 200, gameWidth, 20, 900, 300, 80)
    bar(700, gameHeight, 20, gameHeight, 900, 300, 80)
}, 96400);

setTimeout(function () {
    bar(0, 380, gameWidth, 20, 900, 300, 80)
    bar(270, gameHeight, 20, gameHeight, 900, 300, 80)
}, 97100);

setTimeout(function () {
    bar(0, 200, gameWidth, 20, 900, 300, 80)
    bar(350, gameHeight, 20, gameHeight, 900, 300, 80)
}, 97200);

setTimeout(function () {
    bar(0, 400, gameWidth, 20, 900, 300, 80)
    bar(600, gameHeight, 20, gameHeight, 900, 300, 80)
}, 97300);

setTimeout(function () {
    bar(0, 100, gameWidth, 20, 900, 300, 80)
    bar(500, gameHeight, 20, gameHeight, 900, 300, 80)
}, 97400);


setTimeout(function () {
    bar(0, 80, gameWidth, 80, 900, 300, 80)
}, 100000);

setTimeout(function () {
    bar(180, gameHeight, 180, gameHeight, 900, 300, 80)
}, 101000);

setTimeout(function () {
    bar(0, 380, gameWidth, 80, 900, 300, 80)
}, 102000);

setTimeout(function () {
    bar(600, gameHeight, 180, gameHeight, 900, 300, 80)
}, 103000);


setTimeout(function () {
    circle(470, 270, 50, 0, 3, true, true, 24, 10, 1, 900)
}, 104000);

setTimeout(function () {
    circle(800, 270, 50, 0, 3, true, true, 24, 10, 1, 900)
}, 105000);

setTimeout(function () {
    circle(140, 270, 50, 0, 3, true, true, 24, 10, 1, 900)
}, 105000);

setTimeout(function () {
    circle(0, 540, 20, 0, 3, true, true, 24, 10, 1, 900)
}, 106000);

setTimeout(function () {
    circle(0, 0, 20, 0, 3, true, true, 24, 10, 1, 900)
}, 106000);

setTimeout(function () {
    circle(960, 540, 20, 0, 3, true, true, 24, 10, 1, 900)
}, 106000);

setTimeout(function () {
    circle(960, 0, 20, 0, 3, true, true, 24, 10, 1, 900)
}, 106000);

setTimeout(function () {
    cubeRain(20, 20, 1, 23000, 500);
}, 110000);

setTimeout(function () {
    circle(0, 540, 50, 0, 3, true, true, 24, 10, 1, 900)
}, 113000);

setTimeout(function () {
    circle(0, 0, 50, 0, 3, true, true, 24, 10, 1, 900)
}, 113000);

setTimeout(function () {
    circle(960, 540, 50, 0, 3, true, true, 24, 10, 1, 900)
}, 113000);

setTimeout(function () {
    circle(960, 0, 50, 0, 3, true, true, 24, 10, 1, 900)
}, 113000);

//
setTimeout(function () {
    circle(0, 0, 50, 0, 3, true, false, 24, 10, 1, 900)
}, 116000);

setTimeout(function () {
    circle(150, 90, 50, 0, 3, true, true, 24, 10, 1, 900)
}, 116000);

setTimeout(function () {
    circle(300, 180, 50, 0, 3, true, false, 24, 10, 1, 900)
}, 116000);

setTimeout(function () {
    circle(450, 270, 50, 0, 3, true, true, 24, 10, 1, 900)
}, 116000);

setTimeout(function () {
    circle(600, 360, 50, 0, 3, true, false, 24, 10, 1, 900)
}, 116000);

setTimeout(function () {
    circle(750, 450, 50, 0, 3, true, true, 24, 10, 1, 900)
}, 116000);

setTimeout(function () {
    circle(900, 540, 50, 0, 3, true, false, 24, 10, 1, 900)
}, 116000);

setTimeout(function () {
    circle(470, 270, 80, 0, 3, true, true, 24, 10, 1, 900)
}, 120000);

setTimeout(function () {
    circle(470, 270, 80, 0, 3, true, true, 24, 10, 1, 900)
}, 122000);

setTimeout(function () {
    circle(470, 270, 80, 0, 3, true, true, 24, 10, 1, 900)
}, 124000);

setTimeout(function () {
    window.location.href = "winscreen.html";
}, 132900);


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
dragonRoar.volume = 0.4;

const music = new Audio('assets/sounds/music.mp3');
music.volume = 0.7;