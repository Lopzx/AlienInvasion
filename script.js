let player, enemy, viewPort;
viewPort = document.getElementById("port")
player = document.getElementById("player");
enemy = document.getElementById("enemy");


document.body.addEventListener("keydown", (e) => {
    let currentStyle = parseInt(getComputedStyle(player).getPropertyValue("left"));
    let max = parseInt(getComputedStyle(viewPort).getPropertyValue("width"))
        if (e.key === "ArrowLeft" && currentStyle != 0 ){
            player.style.left = currentStyle - 50 + "px"
        }else if (e.key === "ArrowRight" && currentStyle != 500){
            player.style.left = currentStyle + 50 + "px"
        }
})

