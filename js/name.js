function drawName() {
   draw.save(); // Starting translation
   draw.translate(5*UNIT,10*UNIT); //Moves the origin depending on values of x & y
    drawF();
    drawL();
    drawO();
    drawR();
    drawA();
    draw.restore(); // Moves the origin back to its initial state
 }
 function drawF() {
     draw.fillRect(0*UNIT,0,1*UNIT,7*UNIT);
     draw.fillRect(1*UNIT,0*UNIT,4*UNIT,1*UNIT);
     draw.fillRect(1*UNIT,3*UNIT,3*UNIT,1*UNIT);
  
 }
 function drawL() {
    draw.fillRect(6*UNIT,0*UNIT,1*UNIT,7*UNIT);
     draw.fillRect(7*UNIT,6*UNIT,4*UNIT,1*UNIT);
 }
 function drawO() {
    draw.fillRect(12*UNIT,1*UNIT,1*UNIT,5*UNIT);
     draw.fillRect(13*UNIT,0*UNIT,3*UNIT,UNIT);
     draw.fillRect(13*UNIT,6*UNIT,3*UNIT,UNIT);
     draw.fillRect(16*UNIT,1*UNIT,1*UNIT,5*UNIT);
 }
 function drawR() {
    draw.fillRect(18*UNIT,0*UNIT,1*UNIT,7*UNIT);
    draw.fillRect(19*UNIT,0*UNIT,3*UNIT,1*UNIT);
    draw.fillRect(19*UNIT,3*UNIT,3*UNIT,1*UNIT);
    draw.fillRect(20*UNIT,4*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(21*UNIT,5*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(22*UNIT,6*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(22*UNIT,1*UNIT,1*UNIT,2*UNIT);
 }
 function drawA() {
    draw.fillRect(24*UNIT,1*UNIT,1*UNIT,6*UNIT);
    draw.fillRect(25*UNIT,0*UNIT,3*UNIT,1*UNIT);
    draw.fillRect(25*UNIT,3*UNIT,3*UNIT,1*UNIT);
    draw.fillRect(28*UNIT,1*UNIT,1*UNIT,6*UNIT);
 }