const container = document.getElementById("game-area");
gameWidth = container.clientWidth;
gameHeight = container.clientHeight;

const player = new Player("player", 3);

setTimeout(function () {
    cubeRain(30, 30, 1, 12000, 300);
}, 2000);

setTimeout(function () {
    bar(0, gameHeight/2, gameWidth, 20, 900, 300, 80)
}, 10000);
setTimeout(function () {
    bar(gameWidth/3, gameHeight, 20, gameHeight, 900, 300, 80)
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
    circle(480, 270, 50, 0, 3, false, true, 16, 20, 2, 900)
}, 15500);
setTimeout(function () {
    circle(290, 370, 50, 0, 3, false, true, 16, 20, 2, 900)
}, 16500);
setTimeout(function () {
    circle(290, 230, 50, 0, 3, false, true, 16, 20, 2, 900)
}, 17500);

setTimeout(function () {
    Bullet.spinningSpiral(840, 270, 100, 30, 1, 100, 900);
    startBulletCollisionChecker();
}, 17000);

setTimeout(function () {
    Bullet.spinningSpiral(140, 270, 100, 30, 1, 100, 900);
    startBulletCollisionChecker();
}, 1000);

/* setTimeout(function () {
    Bullet.shootBulletRing(200, 300, 20, 30, 2, 900);
    startBulletCollisionChecker();
}, 2000); */


/* setTimeout(function () {
    Bullet.explodingBurst(480, 270, 30, 5, 10, 300);
    startBulletCollisionChecker();
}, 2000); */

/* setTimeout(function () {
    Bullet.wavePattern(480, 270, 30, 5, 5, 30);
    startBulletCollisionChecker();
}, 2000); */
/* setTimeout(function () {
    Bullet.alternatingSpiral(480, 270, 30, 5, 160, 50);
    startBulletCollisionChecker();
}, 2000); */