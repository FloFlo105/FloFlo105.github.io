function drawRuler(delta) {
    draw.fillStyle = "black";
    const numX = canvas.width / (UNIT*delta);
    const numY = canvas.height / (UNIT*delta);
    for (i = 0; i < numX; i++) {
        draw.fillRect(i*UNIT*delta-1,0,1,10);
        draw.fillRect(i*UNIT*delta-1,canvas.height-10,1,10);
        draw.fillRect(i*UNIT*delta-1,30,1,canvas.height-61);
        draw.fillText(i*delta, i*UNIT*delta-5, 23);
        draw.fillText(i*delta, i*UNIT*delta-5, canvas.height-17);
    }
    for (i = 0; i < numY; i++) {
        draw.fillRect(0,i*UNIT*delta-1,10,1);
        draw.fillRect(canvas.width-10,i*UNIT*delta-1,10,1);
        draw.fillRect(35,i*UNIT*delta-1,canvas.width-70,1);
        if (i*delta != 0) {
            draw.fillText(i*delta, 17, i*UNIT*delta+4);
            draw.fillText(i*delta, canvas.width-27, i*UNIT*delta+4);
        }
    }
}