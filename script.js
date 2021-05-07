let player, viewPort;
viewPort = document.getElementById("port");
player = document.getElementById("player");

setInterval(function(){
    let randomPosition = (Math.floor(Math.random() * 11)) * 50;
    let enemy = document.querySelectorAll(".enemy");
    const Musuh = document.createElement("div");
    Musuh.className = "enemy"
    viewPort.appendChild(Musuh);
    Musuh.style.left = randomPosition + "px"
    console.log(randomPosition)

},1000)

setInterval(() => {
    let bullets = document.querySelectorAll(".bullet"),
        enemy = document.querySelectorAll(".enemy"),
        lastXPosition,
        lastYPosition;
    bullets.forEach((v) => {
        let bulletX = parseInt(getComputedStyle(v).getPropertyValue("left")),
            bulletY = parseInt(getComputedStyle(v).getPropertyValue("bottom"));
            v.style.left = bulletX + "px";
            v.style.bottom = bulletY + 5 + "px"
            if (bulletY >= 320){
                v.remove()
            }
            for (let i = 0; i < enemy.length; i++){
                lastXPosition = parseInt(getComputedStyle(enemy[i]).getPropertyValue("left")),
                lastYPosition = parseInt(getComputedStyle(enemy[i]).getPropertyValue("bottom"));
                if(lastXPosition === bulletX && lastYPosition <= bulletY){
                    enemy[i].classList.replace("enemy", "duar")
                    v.remove();
                    setTimeout(() => {
                        enemy[i].remove();
                    },500)
                }
            }

    })
},10)

setInterval(() => {
    let enemy = document.querySelectorAll(".enemy");
    enemy.forEach((v) => {
        let lastXPosition = parseInt(getComputedStyle(v).getPropertyValue("left")),
            lastYPosition = parseInt(getComputedStyle(v).getPropertyValue("top"));
            v.style.top = lastYPosition + 35 + "px"
            if (lastYPosition >= 300){
                v.remove()
            }

    })
},1000)


document.body.addEventListener("keydown", (e) => {
    let currentStyle = parseInt(getComputedStyle(player).getPropertyValue("left"));
    let max = parseInt(getComputedStyle(viewPort).getPropertyValue("width"))
        if (e.key === "ArrowLeft" && currentStyle != 0 ){
            player.style.left = currentStyle - 50 + "px"
        }else if (e.key === "ArrowRight" && currentStyle != 500){
            player.style.left = currentStyle + 50 + "px"
        }
})

document.body.addEventListener("keypress", (e) => {
    let bullets = document.querySelectorAll(".bullet");
    console.log(bullets)
    if (e.code === "Space" && bullets.length === 0){
        let playerX = parseInt(getComputedStyle(player).getPropertyValue("left"));
        const bullet = document.createElement("div");
        bullet.className = "bullet";
        bullet.style.left =  playerX + "px";
        bullet.style.bottom = 30 + "px"
        viewPort.appendChild(bullet)
    }
})



