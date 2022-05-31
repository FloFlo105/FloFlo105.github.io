// Variable: A location to store values, that may change over time.
var canvas;  // Creating a new variable called canvas.
var draw; 
// Constant: A location to store value, that cannot change over time.
const UNIT = 5; // Declaring that a unit is 10 pixels.
window.onload= init; // When the webpage is loaded, run the init function.
// Function: A set of instructions that could be used multiple times.
function init() {
    canvas = document.getElementById("myCanvas"); // Linking the canvas element from HTML to canvas variable in JS 
    draw = canvas.getContext('2d'); // Declaring that the draw variable is from 2d canvas.
   canvas.width =1200;
   canvas.height =500;
//    draw.save();
//    draw.scale(5,5);
//    drawBrick();
//    draw.fillRect(UNIT,UNIT,UNIT,UNIT);
//    draw.restore();
    // drawSmiley();
   // drawName();
    //drawCursor();
   //drawIronman();
}
function erase() {
    draw.clearRect(0,0,canvas.width,canvas.height);
}
 function incrementScale() {

 }


