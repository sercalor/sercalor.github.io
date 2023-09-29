

var s3 = function( sketch ) {

var iframe1;

sketch.setup = function() {
    var canvas3 = sketch.createCanvas(600, 800);
    canvas3.position(1300,0);


iframe1 = sketch.createElement("iframe");
iframe1.attribute("src","https://autogusto.github.io/autogusto");
iframe1.attribute("frameborder","none");
iframe1.attribute("height", sketch.windowHeight);
iframe1.attribute("width", "650");
// iframe1.mouseOver(iframeover);
iframe1.position(1350,50 );
iframe1.show();


  }
   sketch.draw = function() {
    sketch.background(255);
    sketch.fill(255);
    sketch.textSize(60);
    // sketch.textStyle(BOLD);
    sketch.text('IN CONVERSATION WITH ',0,0); 
  }
};

new p5(s3);