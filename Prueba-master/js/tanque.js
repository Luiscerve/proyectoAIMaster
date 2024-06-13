
function setup() {
    background(200)
    createCanvas(550,500)
}
let angle = 0;
function draw() {
    
    translate(245,195)
    background(220);
    angleMode(DEGREES)
    if(keyIsDown(LEFT_ARROW)){
        angle = angle +1;
    }
    if(keyIsDown(RIGHT_ARROW)){
        angle = angle -1;
    }
    rotate(angle)
    rectMode(CENTER)
    rect (0,0,90,90)
    rect (0,0,80,80)
    ellipse (0,0,80,40)
    rect (0,45,10,50)
    
}
function keydown(){

    
}    