

let sk1 = function( sketch ) {
  
// let SoundoverBar = false;



//c1 
 let allboxesX = 250;
 let allboxesY = 80;

let c1boxSizex = allboxesX;
let c1boxSizey = allboxesY;
let c1overBox = false;
let c1locked = false;
let c1xOffset = 0.0;
let c1yOffset = 0.0;
let c1bx = 0;
let c1by = 0;

//c2 
let c2boxSizex = allboxesX;
let c2boxSizey = allboxesY;
let c2overBox = false;
let c2locked = false;
let c2xOffset = 0.0;
let c2yOffset = 0.0;
let c2bx = 0;
let c2by = 80;

//c3 
let c3boxSizex = allboxesX;
let c3boxSizey = allboxesY;
let c3overBox = false;
let c3locked = false;
let c3xOffset = 0.0;
let c3yOffset = 0.0;
let c3bx = 0;
let c3by = 160;
  

//c4 
let c4boxSizex = allboxesX;
let c4boxSizey = allboxesY;
let c4overBox = false;
let c4locked = false;
let c4xOffset = 0.0;
let c4yOffset = 0.0;
let c4bx = 0;
let c4by = 240;


//c5

let c5boxSizex = allboxesX;
let c5boxSizey = allboxesY;
let c5overBox = false;
let c5locked = false;
let c5xOffset = 0.0;
let c5yOffset = 0.0;
let c5bx = 0;
let c5by = 320;

//c6
let c6boxSizex = allboxesX;
let c6boxSizey = allboxesY;
let c6overBox = false;
let c6locked = false;
let c6xOffset = 0.0;
let c6yOffset = 0.0;
let c6bx = 0;
let c6by = 400;

//c7
let c7boxSizex = allboxesX;
let c7boxSizey = allboxesY;
let c7overBox = false;
let c7locked = false;
let c7xOffset = 0.0;
let c7yOffset = 0.0;
let c7bx = 0;
let c7by = 480;

//c8
let c8boxSizex = allboxesX;
let c8boxSizey = allboxesY;
let c8overBox = false;
let c8locked = false;
let c8xOffset = 0.0;
let c8yOffset = 0.0;
let c8bx = 0;
let c8by = 560;

//c9
let c9boxSizex = allboxesX;
let c9boxSizey = allboxesY;
let c9overBox = false;
let c9locked = false;
let c9xOffset = 0.0;
let c9yOffset = 0.0;
let c9bx = 0;
let c9by = 640;

//c10
let c10boxSizex = allboxesX;
let c10boxSizey = allboxesY;
let c10overBox = false;
let c10locked = false;
let c10xOffset = 0.0;
let c10yOffset = 0.0;
let c10bx = 0;
let c10by = 720;

//c11
let c11boxSizex = allboxesX;
let c11boxSizey = allboxesY;
let c11overBox = false;
let c11locked = false;
let c11xOffset = 0.0;
let c11yOffset = 0.0;
let c11bx = 0;
let c11by = 800;


//c12
let c12boxSizex = allboxesX;
let c12boxSizey = allboxesY;
let c12overBox = false;
let c12locked = false;
let c12xOffset = 0.0;
let c12yOffset = 0.0;
let c12bx = 0;
let c12by = 880;



///////Scroll setup 
  // let pgPos = 0; //1000  (posicion de la barra vertical de obras, cuan arriba o cuan abajo)
  // let margin = 0;
  // let scrollMax = 400; //mouse speed
  // let pgPosMin
  // let pgPosMax
  // let scrollAmt
  // let pgHeight = 1000; //keep the height short 500 or something.




//TEXT ON BOXES
let MainTextsize = 15;


// //Text intensity
let textsel = 255; //text once selected
let textnotsel = 250;
let textsubval = 90;


let rectcolorc1;
let rectcolorc2;
let rectcolorc3;
let rectcolorc4;
let rectcolorc5;
let rectcolorc6;
let rectcolorc7;
let rectcolorc8;
let rectcolorc9;
let rectcolorc10;
let rectcolorc11;
let rectcolorc12;

let rectselect = 255;
let rectnotsel = 20;

//rect color
let rectred = 100;
let rectgreen = 100;
let rectblue = 100;
let rectalpha = 250;

let rectcolor;
let recthigh = 100;
let rectlow = 200;

//alpha boxes color when selected/not selected
let calow = 100;
let cahigh = 200; 

let alphatext = 100;


var c1alphasel;
var c2alphasel;
var c3alphasel;
var c4alphasel;
var c5alphasel;
var c6alphasel;
var c7alphasel;
var c8alphasel;
var c9alphasel;
var c10alphasel;
var c11alphasel;
var c12alphasel;


var c12a = 50;

//TEXT MENUBAR

let c1text = 'Why?'; 
let c1stext = 'Conversing a Manifesto';

let c2text = 'History'; 
let c2stext = '2014-2084';

let c3text = 'Construction'; 
let c3stext = 'hands with hands';

let c4text = 'User Manual'; 
let c4stext = 'oral craftsmanship';

let c5text = 'Podcast'; 
let c5stext = 'curated by Maria Villa';

let c6text = 'Book'; 
let c6stext = 'Aalto books.';

let c7text = 'VISUAL LISTENING'; 
let c7stext = 'Performance.';

let c8text = 'UNTITLED'; 
let c8stext = 'Sound Installation, Mexico.';

let c9text = 'PORTRAITS OF MODERN QUALITY'; 
let c9stext = 'Sound Installation, Beijing.';

let c10text = 'PRECARIOUS SYMMETRY'; 
let c10stext = 'Sound Installation, Melbourne.';

let c11text = 'WHITE ON WHITE'; 
let c11stext = 'Sound Installation, Istanbul.';

let c12text = 'WINIPEG'; 
let c12stext = 'Installation, Chile.';

//TEXT color
 
let textcolorc1 = 150;
let textcolorc2 = 150;
let textcolorc3 = 150;
let textcolorc4 = 150;
let textcolorc5 = 150;
let textcolorc6 = 150;
let textcolorc7 = 150;
let textcolorc8 = 150;
let textcolorc9 = 150;
let textcolorc10 = 150;
let textcolorc11 = 150;
let textcolorc12 = 150;


var maxtext = 0;
var mintext = 255;
var textalpha = 150; 

var text1alpha;
var text2alpha;
var text3alpha;
var text4alpha;
var text5alpha;
var text6alpha;
var text7alpha;
var text8alpha;
var text9alpha;
var text10alpha;
var text11alpha;
var text12alpha;

var winbar;
//fonts

let fonti;

// Sound, Volume
// smax = 0.01 //  (cero volume, cambiar!)
// smin = 0.1
// sfade = 0.2;
// mfade = 0.15;
// var mvolume = smax;

//var Iframes
var iframe1;
var iframe2;
var iframe3;
var iframe4;
var iframe5;
var iframe6;
var iframe7;
var iframe8;
var iframe9;
var iframe10;
var iframe11;
var iframe12;

var iframetres;

// iframeactivo = smin;

//////////////////////////////////////////////////////////////////////////////////////////



// window
var winheight = sketch.windowHeight;

var firstmarc;



// //Setup
  sketch.setup = function() {
    
    let canvas1 = sketch.createCanvas(250, 600); // aqui el alto y ancho de la barra de obras
    //sketch.windowHeight
    // canvas1.parent("myContainer");

    // var winbar = (sketch.windowWidth - sketch.width) / 2;
    canvas1.position(0,140); //position over the screen
    canvas1.mousePressed(doPress);
    canvas1.mouseOver(mouseCanvas);
    //canvas1.mouseReleased(doRelease);
    
 

   // pgPosMin = 0 - pgHeight + margin;
   // pgPosMax = 400 - margin;  //movi esto


//IFrames



let iframeleftall = 290;
//////////////////////// MENUBAR TEXTS IFRAMES

// iframenews = sketch.createElement("iframe");
// iframenews.attribute("src","iframes/news.html");
// iframenews.attribute("frameborder","none");
// iframenews.attribute("height", sketch.windowHeight);
// iframenews.attribute("width", "640");
// // iframenews.mouseOver(iframeover,64);
// iframenews.position(iframeleftall,100 );
// iframenews.show();


// iframe0 = sketch.createElement("iframe");
// iframe0.attribute("src","iframes/introtext.html");
// iframe0.attribute("frameborder","none");
// iframe0.attribute("height", sketch.windowHeight);
// iframe0.attribute("width", "640");
// iframe0.mouseOver(iframeover,64);
// iframe0.position(iframeleftall,64 );
// iframe0.hide();

iframe1 = sketch.createElement("iframe");
iframe1.attribute("src","iframes/manifesto.html");
iframe1.attribute("frameborder","none");
iframe1.attribute("height", sketch.windowHeight);
iframe1.attribute("width", "680");
iframe1.mouseOver(iframeover);
iframe1.position(iframeleftall,64 );
iframe1.hide();

iframe2 = sketch.createElement("iframe");
iframe2.attribute("src","iframes/history.html");
iframe2.attribute("frameborder","none");
iframe2.attribute("height", sketch.windowHeight);
iframe2.attribute("width", "680");
iframe2.mouseOver(iframeover);
iframe2.position(iframeleftall,64 );
iframe2.hide();

iframe3 = sketch.createElement("iframe");
iframe3.attribute("src","iframes/construction.html");
iframe3.attribute("frameborder","none");
iframe3.attribute("height", sketch.windowHeight);
iframe3.attribute("width", "680");
iframe3.mouseOver(iframeover);
iframe3.position(iframeleftall,64 );
iframe3.hide();

iframe4 = sketch.createElement("iframe");
iframe4.attribute("src","iframes/custodian.html");
iframe4.attribute("frameborder","none");
iframe4.attribute("height", sketch.windowHeight);
iframe4.attribute("width", "680");
iframe4.mouseOver(iframeover);
iframe4.position(iframeleftall,64 );
iframe4.hide();
  
iframe5 = sketch.createElement("iframe");
iframe5.attribute("src","iframes/podcast.html");
iframe5.attribute("frameborder","none");
iframe5.attribute("height", sketch.windowHeight);
iframe5.attribute("width", "680");
iframe5.mouseOver(iframeover);
iframe5.position(iframeleftall,64 );
iframe5.hide();

iframe6 = sketch.createElement("iframe");
iframe6.attribute("src","iframes/book.html");
iframe6.attribute("frameborder","none");
iframe6.attribute("height", sketch.windowHeight);
iframe6.attribute("width", "680");
iframe6.mouseOver(iframeover);
iframe6.position(iframeleftall,64 );
iframe6.hide();

// iframe7 = sketch.createElement("iframe");
// iframe7.attribute("src","iframes/escuchavisual.html");
// iframe7.attribute("frameborder","none");
// iframe7.attribute("height", sketch.windowHeight);
// iframe7.attribute("width", "640");
// iframe7.mouseOver(iframeover);
// iframe7.position(iframeleftall,64 );
// iframe7.hide();




  //SOUND SETUP

  // s1.setVolume(smin);
  // s1.play();
  // s1.loop();
  

  }

 

sketch.preload = function(){


//PRELOAD SOUNDS
//  sketch.soundFormats('mp3','m4a');
  // s1 = sketch.loadSound('soundcanvas1/transit2.m4a');


// fonts
fonti = sketch.loadFont('Roboto/Roboto-Italic.ttf');
}

function windowResized() {
  sketch.resizeCanvas(250, sketch.windowHeight);
}



//////////////////////////////////////////////////////////////////////////////////////////




//  SKETCH DRAW ==================================>>>>>>>>
  sketch.draw = function() {
  
// var winbar2 = (sketch.windowWidth - sketch.width) / 2;
// console.log(mvolume);



  sketch.background(0);
  //p.push();
  // sketch.translate(0, pgPos); 



//C1 text
sketch.textFont(fonti);
sketch.textSize(MainTextsize);
sketch.textAlign(sketch.CENTER, sketch.CENTER);
sketch.fill(textcolorc1);
sketch.text(c1text, c1bx, c1by, c1boxSizex, c1boxSizey - 20); // Text wraps within text box


sketch.textSize(15);
sketch.textAlign(sketch.CENTER, sketch.CENTER);
sketch.fill(textcolorc1-textsubval);
sketch.text(c1stext, c1bx, c1by + 20, c1boxSizex, c1boxSizey - 20); // Text wraps within text box


//C2 text
sketch.textFont(fonti);
sketch.textSize(MainTextsize);
sketch.textAlign(sketch.CENTER, sketch.CENTER);
sketch.fill(textcolorc2);
sketch.text(c2text, c2bx, c2by, c2boxSizex, c2boxSizey - 20); 


sketch.textSize(15);
sketch.textAlign(sketch.CENTER, sketch.CENTER);
sketch.fill(textcolorc2-textsubval);
sketch.text(c2stext, c2bx, c2by + 20, c2boxSizex, c2boxSizey - 20); 


//C3 text
sketch.textFont(fonti);
sketch.textSize(MainTextsize);
sketch.textAlign(sketch.CENTER, sketch.CENTER);
sketch.fill(textcolorc3);
sketch.text(c3text, c3bx, c3by, c3boxSizex, c3boxSizey - 20); 


sketch.textSize(15);
sketch.textAlign(sketch.CENTER, sketch.CENTER);
sketch.fill(textcolorc3-textsubval);
sketch.text(c3stext, c3bx, c3by + 20, c3boxSizex, c3boxSizey - 20); 

//C4 text
sketch.textFont(fonti);
sketch.textSize(MainTextsize);
sketch.textAlign(sketch.CENTER, sketch.CENTER);
sketch.fill(textcolorc4);
sketch.text(c4text, c4bx, c4by, c4boxSizex, c4boxSizey - 20); 


sketch.textSize(15);
sketch.textAlign(sketch.CENTER, sketch.CENTER);
sketch.fill(textcolorc4-textsubval);
sketch.text(c4stext, c4bx, c4by + 20, c4boxSizex, c4boxSizey - 20); 


//C5 text
sketch.textFont(fonti);
sketch.textSize(MainTextsize);
sketch.textAlign(sketch.CENTER, sketch.CENTER);
sketch.fill(textcolorc5);
sketch.text(c5text, c5bx, c5by, c5boxSizex, c5boxSizey - 20); 


sketch.textSize(15);
sketch.textAlign(sketch.CENTER, sketch.CENTER);
sketch.fill(textcolorc5-textsubval);
sketch.text(c5stext, c5bx, c5by + 20, c5boxSizex, c5boxSizey - 20); 

//C6 text
sketch.textFont(fonti);
sketch.textSize(MainTextsize);
sketch.textAlign(sketch.CENTER, sketch.CENTER);
sketch.fill(textcolorc6);
sketch.text(c6text, c6bx, c6by, c6boxSizex, c6boxSizey - 20); 


sketch.textSize(15);
sketch.textAlign(sketch.CENTER, sketch.CENTER);
sketch.fill(textcolorc6-textsubval);
sketch.text(c6stext, c6bx, c6by + 20, c6boxSizex, c6boxSizey - 20); 


// //C7 text
// sketch.textFont(fonti);
// sketch.textSize(MainTextsize);
// sketch.textAlign(sketch.CENTER, sketch.CENTER);
// sketch.fill(textcolorc7);
// sketch.text(c7text, c7bx, c7by, c7boxSizex, c7boxSizey); 


// sketch.textSize(15);
// sketch.textAlign(sketch.CENTER, sketch.CENTER);
// sketch.fill(textcolorc7-textsubval);
// sketch.text(c7stext, c7bx, c7by + 30, c7boxSizex, c7boxSizey); 





// // the dividing lines
//   var c1line = c2by - c1by;
   var c1line = c2by - c1by;
   var c2line = c3by - c2by;
   var c3line = c4by - c3by;
   var c4line = c5by - c4by;
   var c5line = c6by - c5by;
   var c6line = c7by - c6by;
   var c7line = c8by - c7by;
   var c8line = c9by - c8by;
   var c9line = c10by - c9by;
   var c10line = c11by - c10by;
   var c11line = c12by - c11by;
   var c12line = 531;

 // region were the boxes should be highlited vertically.
  
      var yc1u = 0;   //0 pix
    var yc1d = yc1u + c1line;  //250
   

    var yc2u = yc1d + 1; // 251 pix
    var yc2d = yc2u + c2line; //450

    var yc3u = yc2d + 1;  //451
    var yc3d = yc3u + c3line; //750

    var yc4u = yc3d + 1; 
    var yc4d = yc4u + c4line;

    var yc5u = yc4d + 1; 
    var yc5d = yc5u + c5line;

    var yc6u = yc5d + 1; 
    var yc6d = yc6u + c6line;

    var yc7u = yc6d + 1; 
    var yc7d = yc7u + c7line;

    var yc8u = yc7d + 1; 
    var yc8d = yc8u + c8line;

    var yc9u = yc8d + 1; 
    var yc9d = yc9u + c9line;

    var yc10u = yc9d + 1; 
    var yc10d = yc10u + c10line;

    var yc11u = yc10d + 1; 
    var yc11d = yc11u + c11line;

    var yc12u = yc11d + 1; 
    var yc12d = yc12u + c12line;
  


 // sketch.masterVolume(mvolume, mfade);

// sketch.print('mouseposition' + sketch.mouseX);


// C1 


if ( // if the mouse is over c1
    sketch.mouseX > c1bx - c1boxSizex &&
    sketch.mouseX < c1bx + c1boxSizex &&
    sketch.mouseY > yc1u &&
    sketch.mouseY < yc1d
  ) { // then c1overbox is activated
    c1overBox = true;
    if (!c1locked) {

rectcolorc1 = rectselect;  //change the color to c1

// s1.fade(smax,sfade);
textcolorc1 = textsel;
    
    }
  } else {
    c1overBox = false;
   rectcolorc1 = rectnotsel;

  // s1.fade(smin,sfade);

  textcolorc1 = textnotsel;
  
  }

//this makes the rectangle
sketch.noStroke();
sketch.fill(rectcolorc1, rectcolorc1, rectcolorc1,150); //in the box
sketch.rect(c1bx, c1by, c1boxSizex, c1boxSizey);



// c2 Mouse highlight

if (
    sketch.mouseX > c2bx - c2boxSizex &&
    sketch.mouseX < c2bx + c2boxSizex &&
    sketch.mouseY > yc2u &&
    sketch.mouseY < yc2d
  ) {
    c2overBox = true;
    if (!c2locked) {
rectcolorc2 = rectselect;
// s2.fade(smax,sfade);
textcolorc2 = textsel;
    
    }
  } else {
    c2overBox = false;
    rectcolorc2 = rectnotsel;
  // s2.fade(smin,sfade);
  textcolorc2 = textnotsel;
  }

sketch.noStroke();
sketch.fill(rectcolorc2, rectcolorc2, rectcolorc2, 150); //in the box
sketch.rect(c2bx, c2by, c2boxSizex, c2boxSizey);



// c3 Mouse highlight
if (
    sketch.mouseX > c3bx - c3boxSizex &&
    sketch.mouseX < c3bx + c3boxSizex &&
    sketch.mouseY > yc3u && 
    sketch.mouseY < yc3d
  ) {
    c3overBox = true;
    if (!c3locked) {
rectcolorc3 = rectselect;
// s3.fade(smax,sfade);
textcolorc3 = textsel;
  }
  
  } else {
    c3overBox = false;
rectcolorc3 = rectnotsel;
// s3.fade(smin,sfade);
textcolorc3 = textnotsel;
  }

sketch.fill(rectcolorc3, rectcolorc3, rectcolorc3, 150); //in the box
sketch.rect(c3bx, c3by, c3boxSizex, c3boxSizey);   



// // c4 Mouse highlight
if (
    sketch.mouseX > c4bx - c4boxSizex &&
    sketch.mouseX < c4bx + c4boxSizex &&
    sketch.mouseY > yc4u &&
    sketch.mouseY < yc4d
  ) {
    c4overBox = true;
    if (!c4locked) {
rectcolorc4 = rectselect;
// s4.fade(smax,sfade);
textcolorc4 = textsel;
    
    }
  } else {
    c4overBox = false;
   rectcolorc4 = rectnotsel;
  // s4.fade(smin,sfade);
  textcolorc4 = textnotsel;
  }

sketch.fill(rectcolorc4, rectcolorc4, rectcolorc4, 140); //in the box
sketch.rect(c4bx, c4by, c4boxSizex, c4boxSizey);


// c5 Mouse highlight
if (
    sketch.mouseX > c5bx - c5boxSizex &&
    sketch.mouseX < c5bx + c5boxSizex &&
    sketch.mouseY > yc5u &&
    sketch.mouseY < yc5d
  ) {
    c5overBox = true;
    if (!c5locked) {
  rectcolorc5 = rectselect;
  // s5.fade(smax,sfade);
  textcolorc5 = textsel;
    
    }
  } else {
    c5overBox = false;
    rectcolorc5 = rectnotsel;
    // s5.fade(smin,sfade);
    textcolorc5 = textnotsel;
  }

  
 
 sketch.fill(rectcolorc5, rectcolorc5, rectcolorc5, 150); //in the box
sketch.rect(c5bx, c5by, c5boxSizex, c5boxSizey);   


//c6 Mouse highlight

if (
    sketch.mouseX > c6bx - c6boxSizex &&
    sketch.mouseX < c6bx + c6boxSizex &&
    sketch.mouseY > yc6u &&
    sketch.mouseY < yc6d
  ) {
    c6overBox = true;
    if (!c6locked) {
  rectcolorc6 = rectselect;
  // s6.fade(smax,sfade);
  textcolorc6 = textsel;
    
    }
  } else {
    c6overBox = false;
    rectcolorc6 = rectnotsel;
    // s6.fade(smin,sfade);
    textcolorc6 = textnotsel;
  }

  
 
 sketch.fill(rectcolorc6, rectcolorc6, rectcolorc6, 150); //in the box
sketch.rect(c6bx, c6by, c6boxSizex, c6boxSizey);   



// // c7 Mouse highlight

// if (
//     sketch.mouseX > c7bx - c7boxSizex &&
//     sketch.mouseX < c7bx + c7boxSizex &&
//     sketch.mouseY > yc7u &&
//     sketch.mouseY < yc7d
//   ) {
//     c7overBox = true;
//     if (!c7locked) {
//   rectcolorc7 = rectselect;
//   s7.fade(smax,sfade);
//   textcolorc7 = textsel;
    
//     }
//   } else {
//     c7overBox = false;
//     rectcolorc7 = rectnotsel;
//     s7.fade(smin,sfade);
//     textcolorc7 = textnotsel;
//   }

  
 
//  sketch.fill(rectcolorc7, rectcolorc7, rectcolorc7, 150); //in the box
// sketch.rect(c7bx, c7by, c7boxSizex, c7boxSizey);   





}
     

//////////////////////////////////////////////////////////////////////////////////




//Scroll setup

var mouseCanvas = function (evt) {

console.log('inside');
 }

var iframeover = function (evt) {

// s3.fade(smin,sfade);
c3overBox = false;
 console.log('outside iframe');

}



//Activate audio mouse pressed.
   var doPress = function(evt) {
    sketch.print('mousepresseded');
    // sketch.getAudioContext().resume()


// these if's shows the iframes once you click the text menu bar

  if (c1overBox) {
    iframe1.show();
//    iframe0.hide();
 //   iframenews.hide();

  } else {
    iframe1.hide();
  }

////////
if (c2overBox) {
    iframe2.show();
//    iframe0.hide();
 //   iframenews.hide();

  } else {
    iframe2.hide();
  }

////////

if (c3overBox) {
    iframe3.show();
//    iframe0.hide();
//    iframenews.hide();

  } else {
    iframe3.hide();


  }

////////

if (c4overBox) {
    iframe4.show();
//    iframe0.hide();
//    iframenews.hide();

  } else {
    iframe4.hide();
  }

////////

if (c5overBox) {
    iframe5.show();
//    iframe0.hide();
//    iframenews.hide();

  } else {
    iframe5.hide();
  }

////////

if (c6overBox) {
    iframe6.show();
//    iframe0.hide();
 //   iframenews.hide();

  } else {
    iframe6.hide();
  }

////////

if (c7overBox) {
    iframe7.show();
 //   iframe0.hide();
  //  iframenews.hide();

  } else {
    iframe7.hide();
  }

  ////////

if (c8overBox) {
    iframe8.show();
 //   iframe0.hide();
   // iframenews.hide();

  } else {
    iframe8.hide();
  }

////////

if (c9overBox) {
    iframe9.show();
 //   iframe0.hide();
 //   iframenews.hide();

  } else {
    iframe9.hide();
  }

////////

if (c10overBox) {
    iframe10.show();
 //   iframe0.hide();
 //   iframenews.hide();

  } else {
    iframe10.hide();
  }

////////
if (c11overBox) {
    iframe11.show();
 //   iframe0.hide();
 //   iframenews.hide();

  } else {
    iframe11.hide();
  }

////////
if (c12overBox) {
    iframe12.show();
 //   iframe0.hide();
 //   iframenews.hide();

  } else {
    iframe12.hide();
  }


}


};
new p5(sk1);