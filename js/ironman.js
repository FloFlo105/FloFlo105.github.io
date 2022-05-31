function drawIronman(x,y) {
    draw.save();
    draw.translate(x*UNIT,y*UNIT);
    drawIronmanHead();
    drawIronmanTorso();
    drawIronmanLeg();
    draw.restore();
}
    function drawIronmanHead() {
        draw.fillStyle = "black"
        draw.fillRect(2*UNIT,4*UNIT,2*UNIT,1*UNIT)
        draw.fillRect(7*UNIT,4*UNIT,2*UNIT,1*UNIT)
        draw.fillRect(0*UNIT,2*UNIT,1*UNIT,6*UNIT)
        draw.fillRect(1*UNIT,1*UNIT,1*UNIT,1*UNIT)
        draw.fillRect(UNIT,8*UNIT,2*UNIT,1*UNIT)
        draw.fillRect(2*UNIT,0*UNIT,8*UNIT,1*UNIT)
        draw.fillRect(10*UNIT,1*UNIT,1*UNIT,1*UNIT)
        draw.fillRect(11*UNIT,2*UNIT,1*UNIT,6*UNIT)
        draw.fillRect(10*UNIT,8*UNIT,2*UNIT,1*UNIT)
        draw.fillRect(2*UNIT,9*UNIT,8*UNIT,1*UNIT)
        draw.fillStyle = "#c69e37"
        draw.fillRect(2*UNIT,1*UNIT,8*UNIT,1*UNIT)
        draw.fillRect(1*UNIT,2*UNIT,10*UNIT,1*UNIT)
        draw.fillRect(1*UNIT,3*UNIT,10*UNIT,1*UNIT)
        draw.fillRect(1*UNIT,4*UNIT,10*UNIT,1*UNIT)
        draw.fillRect(1*UNIT,5*UNIT,10*UNIT,1*UNIT)
        draw.fillRect(1*UNIT,6*UNIT,10*UNIT,1*UNIT)
        draw.fillRect(1*UNIT,7*UNIT,10*UNIT,1*UNIT)
        draw.fillRect(2*UNIT,8*UNIT,8*UNIT,1*UNIT)
        draw.fillStyle = "#941e14"
        draw.fillRect(2*UNIT,1*UNIT,8*UNIT,1*UNIT)
        draw.fillRect(10*UNIT,2*UNIT,1*UNIT,6*UNIT)
        draw.fillRect(9*UNIT,2*UNIT,1*UNIT,1*UNIT)
        draw.fillRect(1*UNIT,2*UNIT,1*UNIT,1*UNIT)
        draw.fillRect(1*UNIT,6*UNIT,1*UNIT,2*UNIT)
        draw.fillRect(4*UNIT,2*UNIT,3*UNIT,2*UNIT)
        draw.fillRect(2*UNIT,8*UNIT,1*UNIT,1*UNIT)
        draw.fillRect(8*UNIT,8*UNIT,2*UNIT,1*UNIT)
        draw.fillRect(9*UNIT,6*UNIT,1*UNIT,2*UNIT)
        draw.fillStyle = "#68120b"
        draw.fillRect(2*UNIT,1*UNIT,3*UNIT,1*UNIT)
        draw.fillRect(1*UNIT,2*UNIT,1*UNIT,1*UNIT)
        draw.fillRect(1*UNIT,6*UNIT,1*UNIT,2*UNIT)
        draw.fillRect(2*UNIT,8*UNIT,1*UNIT,1*UNIT)

    }

    function drawIronmanTorso() {
        draw.fillStyle = "black"
        draw.fillRect(1*UNIT,10*UNIT,1*UNIT,1*UNIT)
        draw.fillRect(2*UNIT,11*UNIT,1*UNIT,7*UNIT)
        draw.fillRect(10*UNIT,10*UNIT,1*UNIT,1*UNIT)
        draw.fillRect(9*UNIT,11*UNIT,1*UNIT,7*UNIT)
        draw.fillRect(0*UNIT,11*UNIT,1*UNIT,3*UNIT)
        draw.fillRect(11*UNIT,11*UNIT,1*UNIT,3*UNIT)
        draw.fillRect(1*UNIT,14*UNIT,10*UNIT,1*UNIT)
        draw.fillStyle = "#68120b"
        draw.fillRect(2*UNIT,10*UNIT,8*UNIT,1*UNIT)
        draw.fillRect(3*UNIT,11*UNIT,6*UNIT,1*UNIT)
        draw.fillRect(3*UNIT,12*UNIT,6*UNIT,1*UNIT)
        draw.fillRect(3*UNIT,13*UNIT,6*UNIT,1*UNIT)
        draw.fillStyle = "#941e14"
        draw.fillRect(4*UNIT,11*UNIT,3*UNIT,1*UNIT)
        draw.fillRect(8*UNIT,11*UNIT,1*UNIT,1*UNIT)
        draw.fillRect(4*UNIT,13*UNIT,4*UNIT,1*UNIT)
        draw.fillRect(1*UNIT,13*UNIT,1*UNIT,1*UNIT)
        draw.fillRect(10*UNIT,13*UNIT,1*UNIT,1*UNIT)
        draw.fillStyle = "blue"
        draw.fillRect(5*UNIT,11*UNIT,1*UNIT,1*UNIT)
        draw.fillStyle = "#c69e37"
        draw.fillRect(1*UNIT,11*UNIT,1*UNIT,2*UNIT)
        draw.fillRect(10*UNIT,11*UNIT,1*UNIT,2*UNIT)
    }
    function drawIronmanLeg() {
        draw.fillStyle = "black"
        draw.fillRect(2*UNIT,17*UNIT,3*UNIT,1*UNIT)
        draw.fillRect(5*UNIT,16*UNIT,2*UNIT,1*UNIT)
        draw.fillRect(7*UNIT,17*UNIT,3*UNIT,1*UNIT)
        draw.fillStyle = "#941e14"
        draw.fillRect(3*UNIT,15*UNIT,6*UNIT,1*UNIT)
        draw.fillRect(3*UNIT,16*UNIT,2*UNIT,1*UNIT)
        draw.fillRect(7*UNIT,16*UNIT,2*UNIT,1*UNIT)
        draw.fillStyle = "#c69e37"
        draw.fillRect(4*UNIT,15*UNIT,1*UNIT,1*UNIT)
        draw.fillRect(7*UNIT,15*UNIT,1*UNIT,1*UNIT)
        draw.fillStyle = "#68120b"
        draw.fillRect(5*UNIT,15*UNIT,1*UNIT,1*UNIT)
        draw.fillRect(3*UNIT,16*UNIT,1*UNIT,1*UNIT)
        draw.fillRect(7*UNIT,16*UNIT,1*UNIT,1*UNIT)
    }
