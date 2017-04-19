var balls = [];

function mousePressed() {
    for (var i = 0; i < balls.length; i++) {
        if (balls[i].clicked() == true) {
            //balls.splice(i, 1)
            balls[i].xSpeed = balls[i].xSpeed * -1;

        } else if (balls[i].clicked() == false) {}
    }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    //value = 255;
    // add new ball if up arrow is pressed
    balls.push(new Ball());
  } else if (keyCode === DOWN_ARROW) {
    // remove a ball if down arraow is pressed
    balls.splice(0,1);
  }
}

function setup() {
    // frameRate(0.9);
    createCanvas(800, 600);
    for (var i = 0; i < 3; i++) {
        balls[i] = new Ball();
    }
}

function draw() {
    background(30, 30, 30);
    for (var i = 0; i < balls.length; i++) {
        balls[i].displayBall();
        balls[i].moveBall();
        balls[i].checkEdge();
        // collision_Dectection();
    }
}
