const container = document.getElementById("game-area");
gameWidth = container.clientWidth;
gameHeight = container.clientHeight;

const player = new Player("player", 3);

/* setTimeout(function () {
    cubeRain(30, 30, 1, 12000, 300);
}, 2000);

setTimeout(function () {
    bar(0, gameHeight/2, gameWidth, 20, 800, 3)
    bar(gameWidth/3, gameHeight, 20, gameHeight, 800, 3)
}, 10000); */


setTimeout(function () {
    circle(480, 270, 50, 0, 3, false, true, 6, 30, 2, 900)
}, 1000); /*
setTimeout(function () {
    circle(290, 370, 50, 0, 3, false, false)
}, 2000);
setTimeout(function () {
    circle(290, 320, 50, 0, 3, false, false)
}, 2500); */

setTimeout(function () {
    Bullet.shootBulletRing(200, 300, 4, 30, 2, 900);
    startBulletCollisionChecker();
}, 2000);

