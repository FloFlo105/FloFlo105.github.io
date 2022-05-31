function drawsky() {
    draw.save();
    drawblue();
    draw.restore();
}

function drawblue () {
    draw.fillstyle = "#ddedf5"
draw.fillRect(0*UNIT,0*UNIT,60*UNIT,40*UNIT)
}