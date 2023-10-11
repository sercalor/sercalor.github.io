let boxes = [];
const boxCount = 12;
const allboxesX = 250;
const allboxesY = 80;
const MainTextsize = 15;
const textsel = 255;
const textnotsel = 250;
const textsubval = 90;
const rectselect = 255;
const rectnotsel = 20;
const rectcolor = [100, 100, 100, 250];
const recthigh = 100;
const rectlow = 200;
const calow = 100;
const cahigh = 200;
const alphatext = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < boxCount; i++) {
    let box = {
      x: 0,
      y: allboxesY * i,
      boxSizex: allboxesX,
      boxSizey: allboxesY,
      overBox: false,
      locked: false,
      xOffset: 0.0,
      yOffset: 0.0,
      bx: 0,
      by: allboxesY * i,
      text: '',
      stext: '',
      textColor: 150,
      alphaSel: 50
    };
    boxes.push(box);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < boxCount; i++) {
    let box = boxes[i];

    if (
      mouseX > box.bx - box.boxSizex &&
      mouseX < box.bx + box.boxSizex &&
      mouseY > box.by &&
      mouseY < box.by + box.boxSizey
    ) {
      box.overBox = true;
      if (!box.locked) {
        rectcolor = [rectselect, rectselect, rectselect, 150];
        box.textColor = textsel;
      }
    } else {
      box.overBox = false;
      rectcolor = [rectnotsel, rectnotsel, rectnotsel, 150];
      box.textColor = textnotsel;
    }

    noStroke();
    fill(rectcolor);
    rect(box.bx, box.by, box.boxSizex, box.boxSizey);

    textFont('Roboto-Italic');
    textSize(MainTextsize);
    textAlign(CENTER, CENTER);
    fill(box.textColor);
    text(box.text, box.bx, box.by, box.boxSizex, box.boxSizey - 20);

    textSize(15);
    textAlign(CENTER, CENTER);
    fill(box.textColor - textsubval);
    text(box.stext, box.bx, box.by + 20, box.boxSizex, box.boxSizey - 20);
  }
}

function mousePressed() {
  for (let i = 0; i < boxCount; i++) {
    let box = boxes[i];
    if (box.overBox) {
      // Handle click for the specific box
      console.log('Clicked on box ' + i);
      // Show/hide iframe based on box index
      // e.g., if (i === 0) iframe0.show();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
