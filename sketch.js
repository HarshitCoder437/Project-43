// Creating Variables
let hr, mn, sc;
let hrAngle, mnAngle, scAngle;

function setup() {
    createCanvas(400, 400);

    // Setting Angle Mode
    angleMode(DEGREES);
}

function draw() {
    background(0);

    // Translation and rotation
    translate(200, 200)
    rotate(-90);

    // Defining time using function in p5.js
    hr = hour();
    mn = minute();
    sc = second();

    // To create rotation
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn, 0, 60, 0, 360)
    hrAngle = map(hr % 12, 0, 12, 0, 360)

    // Drawing the second hand
    push();
    // Rotating the hand based on the angle calculated
    rotate(scAngle);
    stroke(255, 0, 0);
    strokeWeight(7);
    line(0, 0, 100, 0);
    pop()

    // Drawing the minute hand
    push();
    rotate(mnAngle);
    stroke(0, 255, 0);
    strokeWeight(7);
    line(0, 0, 75, 0);
    pop()

    // Drawing the hour hand
    push();
    rotate(hrAngle);
    stroke(0, 0, 255);
    strokeWeight(7);
    line(0, 0, 50, 0);
    pop()

    stroke(255, 0, 255);
    point(0, 0)

    // Drawing the arcs
    strokeWeight(10);
    noFill();

    // Second Hand
    stroke(255, 0, 0);
    arc(0, 0, 300, 300, 0, scAngle);

    // Minute Hand
    stroke(0, 255, 0);
    arc(0, 0, 280, 280, 0, mnAngle);

    // Hour Hand
    stroke(0, 0, 255);
    arc(0, 0, 260, 260, 0, hrAngle);
}