let a;
let b;
let direction;

function setup() {
  createCanvas(1900, windowHeight / 2);
  colorMode(RGB, 255);
 // position(0,0);
  a = 0;
  b = width;
  direction = true;
  frameRate(30);
}

function draw() {
// background(150);
  a++;
  if (a > width) {
    a = 0;
    direction = !direction;
  }
  if (direction === true) {
    stroke(a);
  } else {
    stroke(width - a);
  }
  line(a, 0, a, height / 2);

  b--;
  if (b < 0) {
    b = width;
  }
  if (direction == true) {
    stroke(width - b);
  } else {
    stroke(b);
  }
  line(b, height / 2 + 1, b, height);
  

// background('#e3eaa7');
fill(200);
textFont('Helvetica');
textSize(22);
text('hello, how are you?.',a,20); 
text('yes, I am fine!',b,45); 
}