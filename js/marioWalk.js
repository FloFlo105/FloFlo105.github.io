function drawMarioWalk(x,y) {
    draw.save();
    draw.translate(x*UNIT,y*UNIT)
    drawHeadWalk();
    drawTorsoWalk();
    drawLegsWalk();
    draw.restore();
}
function drawHeadWalk() {
    draw.fillStyle = "#b13326"
    draw.fillRect(3*UNIT,0*UNIT,5*UNIT,1*UNIT) 
    draw.fillRect(2*UNIT,1*UNIT,9*UNIT,1*UNIT)
    draw.fillStyle = "#e39d25"
    draw.fillRect(2*UNIT,2*UNIT,7*UNIT,1*UNIT)
    draw.fillRect(1*UNIT,3*UNIT,10*UNIT,1*UNIT)
   draw.fillRect(1*UNIT,4*UNIT,11*UNIT,1*UNIT)
   draw.fillRect(1*UNIT,5*UNIT,10*UNIT,1*UNIT)
   draw.fillRect(3*UNIT,6*UNIT,7*UNIT,1*UNIT)
   draw.fillStyle = "#6a6b05"
   draw.fillRect(2*UNIT,2*UNIT,3*UNIT,1*UNIT)
   draw.fillRect(3*UNIT,2*UNIT,1*UNIT,3*UNIT)
   draw.fillRect(4*UNIT,4*UNIT,1*UNIT,1*UNIT)
   draw.fillRect(1*UNIT,3*UNIT,1*UNIT,3*UNIT)
   draw.fillRect(2*UNIT,5*UNIT,1*UNIT,1*UNIT)
   draw.fillRect(7*UNIT,2*UNIT,1*UNIT,2*UNIT)
   draw.fillRect(8*UNIT,4*UNIT,1*UNIT,1*UNIT)
   draw.fillRect(7*UNIT,5*UNIT,4*UNIT,1*UNIT)
}
function drawTorsoWalk() {
    draw.fillStyle = "#6a6b05"
    draw.fillRect(2*UNIT,7*UNIT,4*UNIT,1*UNIT)
    draw.fillRect(2*UNIT,8*UNIT,6*UNIT,1*UNIT)
    draw.fillRect(3*UNIT,9*UNIT,5*UNIT,1*UNIT)
    draw.fillRect(7*UNIT,7*UNIT,1*UNIT,1*UNIT)
    draw.fillStyle = "#b13326"
    draw.fillRect(6*UNIT,7*UNIT,1*UNIT,1*UNIT)
    draw.fillRect(2*UNIT,9*UNIT,1*UNIT,1*UNIT)
    draw.fillRect(2*UNIT,10*UNIT,7*UNIT,1*UNIT)
    draw.fillRect(2*UNIT,11*UNIT,7*UNIT,1*UNIT)
    draw.fillRect(1*UNIT,12*UNIT,8*UNIT,1*UNIT)
    draw.fillRect(1*UNIT,11*UNIT,3*UNIT,3*UNIT)
    draw.fillRect(5*UNIT,11*UNIT,3*UNIT,3*UNIT)
    draw.fillStyle = "#e39d25"
    draw.fillRect(1*UNIT,8*UNIT,1*UNIT,2*UNIT)
    draw.fillRect(0*UNIT,9*UNIT,2*UNIT,1*UNIT)
    draw.fillRect(8*UNIT,8*UNIT,3*UNIT,1*UNIT)
    draw.fillRect(9*UNIT,7*UNIT,1*UNIT,3*UNIT)
    draw.fillRect(8*UNIT,9*UNIT,2*UNIT,1*UNIT)
    }
    function drawLegsWalk() {
        draw.fillStyle = "#6a6b05"
        draw.fillRect(4*UNIT,14*UNIT,3*UNIT,2*UNIT)
        draw.fillRect(7*UNIT,15*UNIT,1*UNIT,1*UNIT)
        draw.fillRect(0*UNIT,10*UNIT,2*UNIT,1*UNIT)
        draw.fillRect(0*UNIT,10*UNIT,1*UNIT,4*UNIT)
        draw.fillRect(-1*UNIT,13*UNIT,1*UNIT,2*UNIT)
    }
    
   










