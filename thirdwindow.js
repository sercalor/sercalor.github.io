var s3 = function( sketch ) {
sketch.setup = function() {
    var canvas3 = sketch.createCanvas(600, 600);
    canvas3.position(700,0);
  }
   sketch.draw = function() {
    sketch.background(255);
    sketch.fill(0);
    sketch.textSize(60);
    // sketch.textStyle(BOLD);
    sketch.text('THE EXCENTRIC WINDS',0,500); 
  }
};

new p5(s3);