document.addEventListener("DOMContentLoaded", () => {
    const player = new Player("player");
    const container = document.getElementById("game-area");
    const gameWidth = container.clientWidth;
    const gameHeight = container.clientHeight;

    const projectileArr = [];

    setInterval(() => {
        newProjectile = new Projectile();
        projectileArr.push(newProjectile);
        console.log("creating a new projectile")

        for (let i = projectileArr.length - 1; i >= 0; i--) {
            const projectile = projectileArr[i];
        
            const left = parseInt(projectile.projectileElm.style.left, 10);
            const bottom = parseInt(projectile.projectileElm.style.bottom, 10);
        
            if (left < 0 || bottom < 0 || left > gameWidth || bottom > gameHeight) {
    
                projectile.projectileElm.remove();
                
                projectileArr.splice(i, 1);
            }
        }

        console.log(projectileArr)
    }, 300)

    

    const collisionManager = new CollisionManager(player, projectileArr, () => {
        console.log("Got hit!");
        window.location.href = "gameover.html";
    });

    setInterval(() => {
        projectileArr.forEach(p => p.moveDown());
        collisionManager.checkCollisions();
    }, 1);


    //End of DOM Content Loaded
});