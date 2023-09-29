


var s1 = function( sketch ) {

  // let SoundoverBar = false;
  // var mvolume = 0.1;

sketch.setup = function() {
    var canvas3 = sketch.createCanvas(600, 600);
    canvas3.position(0,0);
  }
   sketch.draw = function() {
    sketch.background(0);
    sketch.fill(0);

    sketch.print('volume' + mvolume);  
    // sketch.textSize(60);
    // sketch.textStyle(BOLD);
    // sketch.text('THE EXCENTRIC WINDS',0,500); 
 
 // sketch.masterVolume(mvolume);
    // SOUND ON BAR
  //   if (
  //   sketch.mouseX > 0 &&
  //   sketch.mouseX < 620 &&
  //   sketch.mouseY > 0 &&
  //   sketch.mouseY < 600 
  // ) {
  //   SoundoverBar = true; 
  //   // sketch.print('oncanvas');  
  //   mvolume = 0.9;
         
  
  // } else {
  //   sketch.fill(255,255,255,0); // not in the box
  //   SoundoverBar = false;
  //   // sketch.print('offcanvas');
  //   mvolume = 0.1;


  }
  }
};

new p5(s1);