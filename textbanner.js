let a;
let b;
let c;
let d;
let e;
let f;
let g;
let h;
let i;
let direction;

let space = 40;
let h1 = 150;  //height//
let h2 = h1 + space;
let h3 = h2 + space;
let h4 = h3 + space;
let h5 = h4 + space;
let h6 = h5 + space;
let h7 = h6 + space;
let h8 = h7 + space;
let h9 = h8 + space;


function setup() {
  createCanvas(windowWidth, 600);
  colorMode(RGB, 255);
 // position(0,500);
  a = 0;
  b = width;
  c = 0
  d = width;
  e = 150;
  f = 0;
  g = 0;
  h = 200;
  i = 30;
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
  if (direction == !direction) {
    stroke(width - b);
  } else {
    stroke(b);
  }
  line(b, height / 2 + 1, b, height);
  
  c++;
  if (c < 0) {
    c = width;
  }
  if (direction == !direction) {
    stroke(width - c);
  } else {
    stroke(c);
  }
  line(c, height / 2 + 1, c, height);


  d--;
  if (d < 0) {
    d = width;
  }
  if (direction == !direction) {
    stroke(width - d);
  } else {
    stroke(d);
  }
  line(d, height / 2 + 1, d, height);

e--;
  if (e < 0) {
    e = width;
  }
  if (direction == true) {
    stroke(width - e);
  } else {
    stroke(e);
  }
  line(e, height / 2 + 1, e, height);

f++;
  if (f < 0) {
    f = width;
  }
  if (direction == true) {
    stroke(width - f);
  } else {
    stroke(f);
  }
  line(f, height / 2 + 1, f, height);

g--;
  if (g < 0) {
   g= width;
  }
  if (direction == true) {
    stroke(width - g);
  } else {
    stroke(g);
  }
  line(g, height / 2 + 1, g, height);

  h--;
  if (h < 0) {
    h = width;
  }
  if (direction == true) {
    stroke(width - h);
  } else {
    stroke(h);
  }
  line(h, height / 2 + 1, h, height);

i--;
  if (i < 0) {
    i = width;
  }
  if (direction == true) {
    stroke(width - i);
  } else {
    stroke(i);
  }
  line(i, height / 2 + 1, i, height);


// background('#e3eaa7');
fill(200);
textFont('Helvetica');
textSize(22);
text('[unintelligible] ...and also that silence is, in a way, um...more intimate, because then, nothing is um, dampening up the sounds of your, um, breath.',a,h1); 
text('it’s more like that the urge to be silent is, is more like stronger than, than actually [pause] to keep talking.',b,h2); 
text('we are comfortable with this blank spaces, you know, with not talking, you know? I think there is a reason...of why ah, it feels good.',c,h3); 
text('Yeah. I think, I think that uncertainty—dealing with that uncertainty is, is beautiful.',d,h4); 
text('Yeah well this is actually almost...not to talk about it to, to say this kind of, uh, almost clichés which I have been telling you..',e,h5);
text('Yeah, I think we have to go back to [pause] to, to realise that everything depends onrelationships.',f,h6);
text('That’s very true. I think that is a, um, I think that is something that will have to change in our, our relationships and the world and in the, our, um... [pause]',g,h7);
text('That was the one thing that I really learned over the spring was to, was to not apologise.',h,h8);
text('I think you need to get closer, to me, physically',i,h9);

}
