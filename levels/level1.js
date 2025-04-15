const container = document.getElementById("game-area");
this.gameWidth = container.clientWidth;
this.gameHeight = container.clientHeight;

const player = new Player("player", 3);

/* setTimeout(function () {
    cubeRain(30, 30, 1, 2000, 300);
}, 2000); */

setTimeout(function () {
    bar(0, this.gameHeight/2, this.gameWidth, 50, 800, 2000)
}, 10);