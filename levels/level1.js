const container = document.getElementById("game-area");
gameWidth = container.clientWidth;
gameHeight = container.clientHeight;

const player = new Player("player", 3);

/* setTimeout(function () {
    cubeRain(30, 30, 1, 2000, 300);
}, 2000); */

setTimeout(function () {
    bar(0, gameHeight/2, gameWidth, 20, 800, 3)
    bar(gameWidth/3, gameHeight/2, 20, gameHeight, 800, 3)
}, 1000);