
function drawBricks(x, y, numBricks) {
    for (var i = 0; i<numBricks; i++) {
        draw.save();
        draw.translate(i*16*UNIT+x*UNIT,y*UNIT);
        drawcolour();
        drawline();
        draw.restore();
    }
}
function drawcolour () {
draw.fillStyle = "#c94c0c"
draw.fillRect(0*UNIT,0*UNIT,16*UNIT,16*UNIT) 
}
function drawline () {
draw.fillStyle = "#000000"
draw.fillRect(0*UNIT,3*UNIT,16*UNIT,1*UNIT) 
draw.fillRect(0*UNIT,7*UNIT,16*UNIT,1*UNIT) 
draw.fillRect(0*UNIT,11*UNIT,16*UNIT,1*UNIT) 
draw.fillRect(0*UNIT,15*UNIT,16*UNIT,1*UNIT) 
draw.fillRect(7*UNIT,0*UNIT,1*UNIT,3*UNIT) 
draw.fillRect(15*UNIT,0*UNIT,1*UNIT,3*UNIT) 
draw.fillRect(3*UNIT,4*UNIT,1*UNIT,3*UNIT) 
draw.fillRect(11*UNIT,4*UNIT,1*UNIT,3*UNIT) 
draw.fillRect(7*UNIT,8*UNIT,1*UNIT,3*UNIT) 
draw.fillRect(15*UNIT,8*UNIT,1*UNIT,3*UNIT) 
draw.fillRect(3*UNIT,12*UNIT,1*UNIT,3*UNIT) 
draw.fillRect(11*UNIT,12*UNIT,1*UNIT,3*UNIT) 
}
function drawBackground () {
    draw.fillStyle = "#ddedf5"
    draw.fillRect(0*UNIT,0*UNIT,canvas.width,canvas.height)
    drawBricks (0,84,16);
}