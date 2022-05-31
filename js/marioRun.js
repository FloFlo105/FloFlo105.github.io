function drawMarioRun(x,y) {
    draw.save(); 
    draw.translate(x*UNIT,y*UNIT)
    drawHeadRun();
    drawTorsoRun();
    drawLegsRun();
    draw.restore();
}
function drawHeadRun() {
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
function drawTorsoRun() {
    draw.fillStyle = "#6a6b05"
    draw.fillRect(0*UNIT,7*UNIT,8*UNIT,2*UNIT)
    draw.fillRect(2*UNIT,8*UNIT,8*UNIT,2*UNIT)
    draw.fillRect(2*UNIT,9*UNIT,9*UNIT,1*UNIT)
    draw.fillStyle = "#b13326"
    draw.fillRect(4*UNIT,7*UNIT,2*UNIT,1*UNIT)
    draw.fillRect(4*UNIT,8*UNIT,3*UNIT,1*UNIT)
    draw.fillRect(4*UNIT,9*UNIT,5*UNIT,1*UNIT)
    draw.fillRect(2*UNIT,10*UNIT,7*UNIT,1*UNIT)
    draw.fillRect(1*UNIT,11*UNIT,9*UNIT,1*UNIT)
    draw.fillRect(0*UNIT,12*UNIT,10*UNIT,1*UNIT)
    draw.fillRect(1*UNIT,13*UNIT,3*UNIT,1*UNIT)
    draw.fillRect(7*UNIT,13*UNIT,3*UNIT,1*UNIT)
    draw.fillStyle = "#e39d25"
    draw.fillRect(5*UNIT,9*UNIT,1*UNIT,1*UNIT)
    draw.fillRect(10*UNIT,8*UNIT,3*UNIT,1*UNIT)
    draw.fillRect(11*UNIT,9*UNIT,2*UNIT,1*UNIT)
    draw.fillRect(-2*UNIT,8*UNIT,2*UNIT,3*UNIT)
    draw.fillRect(0*UNIT,9*UNIT,1*UNIT,1*UNIT)
}
function drawLegsRun() {
    draw.fillStyle = "#6a6b05"
    draw.fillRect(10*UNIT,11*UNIT,2*UNIT,3*UNIT)
    draw.fillRect(11*UNIT,10*UNIT,1*UNIT,1*UNIT)
    draw.fillRect(-1*UNIT,13*UNIT,2*UNIT,2*UNIT)
    draw.fillRect(0*UNIT,14*UNIT,2*UNIT,2*UNIT)
    draw.fillRect(0*UNIT,15*UNIT,3*UNIT,1*UNIT)
}