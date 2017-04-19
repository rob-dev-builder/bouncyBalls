var balls = [];

var bounceSound = document.getElementsByTagName("audio")[0];
// document.getElementsByTagName("audio")[0].play();

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
    balls.push(new Ball())

  } else if (keyCode === DOWN_ARROW) {
    //value = 0;
    balls.splice(0,1);
  }
}

// function collision_Dectection() {
//     for (var i = 0; i < balls.length; i++) {
//         for (var j = 0; j < balls.length; j++) {
//
//             if (balls[i] == balls[j]// if comparing a ball with itself, do nothing
//
//             ) {} else if (balls[i] != balls[j]) {
//                 var d = dist(balls[i].x, balls[i].y, balls[j].x, balls[j].y);
//
//                 //line(balls[i].x, balls[i].y, balls[j].x, balls[j].y);
//                 // Draw line between balls
//
//                 var ballradius = balls[i].radius + balls[j].radius;
//                 var trueDist = d - ballradius;
//                 console.log("distance from edges = " + trueDist);
//
//                 if (trueDist <= 2) {
//                     //console.log('Collision detected')
//                     bounceSound.play();
//                     balls[i].xSpeed = balls[i].xSpeed * -1;
//                     balls[i].ySpeed = balls[i].ySpeed * -1;
//
//                     balls[j].xSpeed = balls[j].xSpeed * -1;
//                     balls[j].ySpeed = balls[j].ySpeed * -1;
//                 } else if (trueDist >= 3) {}
//
//             }
//
//         }
//
//     }
//
// }

function setup() {
    // frameRate(0.9);
    createCanvas(400, 400);
    for (var i = 0; i < 3; i++) {
        balls[i] = new Ball();
    }
}

function draw() {
    background(255, 255, 30);
    for (var i = 0; i < balls.length; i++) {
        balls[i].displayBall();
        balls[i].moveBall();
        balls[i].checkEdge();
        // collision_Dectection();
    }
}
