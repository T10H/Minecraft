var canvas = new fabric.Canvas("myCanvas")
playerX = 10
playerY = 10
biw = 30
bih = 30
var playerObject = ""
var blockObject = ""
function playerUpdate() {
    fabric.Image.fromURL("player.png", function (img) {
        playerObject = img
        playerObject.scaleToWidth(150)
        playerObject.scaleToHeight(140)
        playerObject.set({
            top: playerY,
            left: playerX
        })
        canvas.add(playerObject)
    })
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (img) {
        blockObject = img
        blockObject.scaleToWidth(biw)
        blockObject.scaleToHeight(bih)
        blockObject.set({
            top: playerY,
            left: playerX
        })
        canvas.add(blockObject)
    })
}
window.addEventListener("keydown", myKeydown)
function myKeydown(e) {
    keyPressed = e.KeyCode;
    console.log(keyPressed)
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p e shift")
        biw = biw + 10;
        bih = bih + 10;
        document.getElementById("currentWidth").innerHTML = biw;
        document.getElementById("currentHeight").innerHTML = bih;
    }
    if (e.shiftKey == true && keyPressed == '77') {
        console.log("n e shift")
        biw = biw - 10;
        bih = bih - 10;
        document.getElementById("currentWidth").innerHTML = biw;
        document.getElementById("currentHeight").innerHTML = bih;
    }
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}
function left() {
    if (playerX >= 0){
        playerX = playerX - biw
        canvas.remove(playerObject)
        playerUpdate()
    }
}
function up() {
    if (playerY >= 0){
        playerY = playerY - bih
        canvas.remove(playerObject)
        playerUpdate()
    }
}
function left() {
    if (playerX >= 0){
        playerX = playerX - biw
        canvas.remove(playerObject)
        playerUpdate()
    }
} 
function down() {
    if (playerY <= 500){
        playerY = playerY - bih
        canvas.remove(playerObject)
        playerUpdate()
    }
} 
function down() {
    if (playerX <= 850){
        playerX = playerX - biw
        canvas.remove(playerObject)
        playerUpdate()
    }
}