function drawMario(x,y) {
draw.save(); 
draw.translate(x*UNIT,y*UNIT)
drawHead();
drawTorso();
drawLegs();
draw.restore();
}
function drawHead() {
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
function drawTorso() {
 draw.fillStyle = "#e39d25"
draw.fillRect(0*UNIT,10*UNIT,12*UNIT,3*UNIT)
 draw.fillStyle = "#6a6b05"
 draw.fillRect(2*UNIT,7*UNIT,6*UNIT,1*UNIT)
 draw.fillRect(1*UNIT,8*UNIT,10*UNIT,1*UNIT)
 draw.fillRect(0*UNIT,9*UNIT,12*UNIT,1*UNIT)
 draw.fillRect(2*UNIT,10*UNIT,8*UNIT,1*UNIT)
 draw.fillStyle = "#ba2519"
 draw.fillRect(4*UNIT,7*UNIT,1*UNIT,3*UNIT)
 draw.fillRect(7*UNIT,8*UNIT,1*UNIT,2*UNIT)
 draw.fillRect(4*UNIT,9*UNIT,4*UNIT,1*UNIT)
 draw.fillRect(3*UNIT,10*UNIT,6*UNIT,1*UNIT)
 draw.fillRect(3*UNIT,11*UNIT,6*UNIT,1*UNIT)
 draw.fillRect(2*UNIT,12*UNIT,8*UNIT,1*UNIT)
 draw.fillRect(2*UNIT,13*UNIT,3*UNIT,1*UNIT)
 draw.fillRect(7*UNIT,13*UNIT,3*UNIT,1*UNIT)
 draw.fillStyle = "#e39d25"
 draw.fillRect(4*UNIT,10*UNIT,1*UNIT,1*UNIT)
 draw.fillRect(7*UNIT,10*UNIT,1*UNIT,1*UNIT)
}
function  drawLegs() {
draw.fillStyle = "#6a6b05"
draw.fillRect(1*UNIT,14*UNIT,3*UNIT,1*UNIT)
draw.fillRect(8*UNIT,14*UNIT,3*UNIT,1*UNIT)
draw.fillRect(0*UNIT,15*UNIT,4*UNIT,1*UNIT)
draw.fillRect(8*UNIT,15*UNIT,4*UNIT,1*UNIT)

}

