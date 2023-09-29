

var s3 = function( sketch ) {

var iframev3;

sketch.setup = function() {
    var canvas3 = sketch.createCanvas(600, 800);
    canvas3.position(1700,0);


// iframev3 = sketch.createElement("iframe");
// iframev3.attribute("src","https://www.youtube.com/embed/eDYqRQX0y7Q?controls=0");
// iframev3.attribute("frameborder","none");
// iframev3.attribute("height", sketch.windowHeight);
// iframev3.attribute("width", "650");
// // iframev3.attribute("opacity", "0.3");
// iframev3.attribute("id", "iframev3");
// // iframe1.mouseOver(iframeover);
// iframev3.position(1700,50 );
// // iframev3.setAlpha(100,100);
// // iframe1.background(100,100,100,100);
// iframev3.show();


  }
   sketch.draw = function() {
    sketch.background(255);
    sketch.fill(255);
    // sketch.tint(255,100);
    sketch.textSize(60);
    // sketch.textStyle(BOLD);
    sketch.text('IN CONVERSATION WITH ',0,0); 
  }
};

new p5(s3);