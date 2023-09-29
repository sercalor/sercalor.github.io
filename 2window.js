

var s3 = function( sketch ) {

var iframev1;
let s = 'The quick brown fox jumped over the lazy dog, when the night is younm, ahdn the lad is though and th emoon.';
let fonti;


sketch.preload = function(){
fonti = sketch.loadFont('Roboto/Roboto-Italic.ttf');
}


sketch.setup = function() {
    var canvas3 = sketch.createCanvas(600, 800);
    canvas3.position(1300,0);

// sketch.createElement('h2', 'im an h2 p5.element!');

iframev1 = sketch.createElement("iframe");
iframev1.attribute("src","https://autogusto.github.io/autogusto");
iframev1.attribute("frameborder","none");
iframev1.attribute("height", sketch.windowHeight);
iframev1.attribute("width", "650");
// iframe1.mouseOver(iframeover);
iframev1.position(1350,300 );
// iframe1.opacity(0.5);
iframev1.show();

  }
   sketch.draw = function() {
    sketch.textFont(fonti);
    sketch.background(255);
    sketch.fill(0);
    sketch.textSize(50);
    sketch.text('CHAT CONVERSATION WITH',50,70); 

    sketch.fill(50);
    sketch.textSize(15);
    sketch.text(s, 50,100,400,200); // Text wraps within text box

  }
};

new p5(s3);