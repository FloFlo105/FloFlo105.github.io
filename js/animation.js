var requestId;
var x = -20; // Created a variable called x that has the value 0.
var y = 68;
var time = 0;
var isJumping = false; // This variable is of type 'boolean', whuch can only store values of true or false
var jumpX = 0; // Which x position did the character start jumping
var jumpspeed = 1; // UPDATE;: How fast you're jumping
var speed = 0.5;
var howFar = 40; // UPDATE
const CYCLE = 60;
const GRAVITY = 1;
function slide() {
    stopAnimation();
    updateX();
    drawBackground();
    drawMario(x,68);
    requestId = requestAnimationFrame(slide); // Continuing animation and calling slide function again.
}
function walk() {
    stopAnimation();
    updateTime();
    updateX();
    drawBackground();
    animateMario();
    requestId = requestAnimationFrame(walk);
}
function startJump() { // Only called when starting a jump
    stopAnimation();
    isJumping = true; // Setting isJumping to true
    jumpX = x; // jumpX's value becomes the current X value
    jump();
}
function jump() {
    updateX(); // While the character is jumoing, it should  move forward
    updateY(); // deals with going up and down
    drawBackground();
    drawMario(x,y) // A single character display while jumping
    handleJump(); //Determines if we should jump or walk
}
function animateMario() {
    if (0 <= time && time < CYCLE/3) { // Is time between 0 and half of cycle?
        drawMarioWalk(x,y); // 0 ~ 19
    } else if (CYCLE/3 <= time && time < CYCLE*2/3) { // Is time between half of cycle and full cycle
        drawMarioWalking(x,y); // 20 ~ 40
    } else if (CYCLE*2/3 <= time && time <= CYCLE) { // Is time between half of cycle and full cycle
        drawMarioRun(x,y); 
    }
}

function updateX() {
    if (x > canvas.width/UNIT) { // Is X greater than the width of the canvas?
        // If the answer to the previous question is true, run the following code
        x = -10 // Reset x's value back to -10

    } else {
        //If the answer is false, run the following code.
        x += speed; // Increment x by the value of the speed.
    }
}
function updateY() {
    // Starting location: jumpX - ex.) 10
    // Peak location: peakX - (10 + 60) / 2 = 35
    // Landing location: landX - ex.) 10 + 50 = 60
    const peakX = (jumpX + landX) / 2;
    const gravity = - 0.02 // UPDATE: How strong the gravity is
    // If current X is between starting location and peak location, we go up
    if (jumpX <= x && x < peakX) {
        y -= jumpspeed; 
        jumpspeed -= gravity;
    } else if (peakX <= x && x < landX) {
        // If current X is between peak location and landing location, we go down
        y += jumpspeed;
        jumpspeed += gravity;
    } else { // If current X is beyond the landing location
         y = 68; // UPDATE: The original y position
         isJumping = false; // We have stopped jumping now.
    }
}
function updateTime() {
    if (time >= CYCLE) {
        time =0;
    } else{ 
        time += 1
    }
}
// Should the character jump or resume walking
function handleJump() {
    if (isJumping) {
        //If you're still jumping, we should run jump functiom again
        requestId = requestAnimationFrame(jump);
    } else {
        // If ou stopped jumping, we should resume walking
        requestId = requestAnimationFrame(walk)
    }
}
function stopAnimation() {
    cancelAnimationFrame(requestId);
}
function slowSpeed() {
    speed = 0.1; //UPDATE
    howFar = 10; //UPDATE
}
function normalSpeed() {
    speed = 0.5;
    howFar = 50;
}
function fastSpeed() {
    speed = 0.9; // UPDATE
    howFar = 90; //UPDATE
}