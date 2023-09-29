

let sk2 = function( sketch ) {
  
let SoundoverBar = false;


//c1 Volumen Sintetico
 
 let allboxesX = 250; //size of all boxes
 let allboxesY = 80;

let c1boxSizex = allboxesX;
let c1boxSizey = allboxesY;
let c1overBox = false;
let c1locked = false;
let c1xOffset = 0.0;
let c1yOffset = 0.0;
let c1bx = 0;
let c1by = 0;

//c2 CR Finland
let c2boxSizex = allboxesX;
let c2boxSizey = allboxesY;
let c2overBox = false;
let c2locked = false;
let c2xOffset = 0.0;
let c2yOffset = 0.0;
let c2bx = 0;
let c2by = 80;

//c3 Polyphonic social
let c3boxSizex = allboxesX;
let c3boxSizey = allboxesY;
let c3overBox = false;
let c3locked = false;
let c3xOffset = 0.0;
let c3yOffset = 0.0;
let c3bx = 0;
let c3by = 160;
  

// //c4 CR bosch
let c4boxSizex = allboxesX;
let c4boxSizey = allboxesY;
let c4overBox = false;
let c4locked = false;
let c4xOffset = 0.0;
let c4yOffset = 0.0;
let c4bx = 0;
let c4by = 240;


// // //c5 CR Antarctica

let c5boxSizex = allboxesX;
let c5boxSizey = allboxesY;
let c5overBox = false;
let c5locked = false;
let c5xOffset = 0.0;
let c5yOffset = 0.0;
let c5bx = 0;
let c5by = 320;

//c6 Valp
let c6boxSizex = allboxesX;
let c6boxSizey = allboxesY;
let c6overBox = false;
let c6locked = false;
let c6xOffset = 0.0;
let c6yOffset = 0.0;
let c6bx = 0;
let c6by = 400;

//c7 escucha visual
let c7boxSizex = allboxesX;
let c7boxSizey = allboxesY;
let c7overBox = false;
let c7locked = false;
let c7xOffset = 0.0;
let c7yOffset = 0.0;
let c7bx = 0;
let c7by = 480;

//c8 transitio
let c8boxSizex = allboxesX;
let c8boxSizey = allboxesY;
let c8overBox = false;
let c8locked = false;
let c8xOffset = 0.0;
let c8yOffset = 0.0;
let c8bx = 0;
let c8by = 560;

//c9 portraits
let c9boxSizex = allboxesX;
let c9boxSizey = allboxesY;
let c9overBox = false;
let c9locked = false;
let c9xOffset = 0.0;
let c9yOffset = 0.0;
let c9bx = 0;
let c9by = 640;

//c10 precarious
let c10boxSizex = allboxesX;
let c10boxSizey = allboxesY;
let c10overBox = false;
let c10locked = false;
let c10xOffset = 0.0;
let c10yOffset = 0.0;
let c10bx = 0;
let c10by = 720;

//c11 White on White
let c11boxSizex = allboxesX;
let c11boxSizey = allboxesY;
let c11overBox = false;
let c11locked = false;
let c11xOffset = 0.0;
let c11yOffset = 0.0;
let c11bx = 0;
let c11by = 800;


//c12 winipeg
let c12boxSizex = allboxesX;
let c12boxSizey = allboxesY;
let c12overBox = false;
let c12locked = false;
let c12xOffset = 0.0;
let c12yOffset = 0.0;
let c12bx = 0;
let c12by = 880;



///////Scroll setup 
  let pgPos = 0; //1000
  let margin = 0;
  let scrollMax = 200; //mouse speed
  let pgPosMin
  let pgPosMax
  let scrollAmt
  let pgHeight = 500; //keep the height short 500 or something.





//TEXT ON BOXES
let MainTextsize = 15;

// text color
// cfull = 255;
// cmid = 100;

// //Text intensity
let textsel = 150; //text once selected
let textnotsel = 0;
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

let rectselect = 0;
let rectnotsel = 255;

//rect color
let rectred = 100;
let rectgreen = 100;
let rectblue = 100;
let rectalpha = 250;

let rectcolor;
let recthigh = 200;
let rectlow = 100;

//alpha boxes color when selected/not selected
// let calow = 200;
// let cahigh = 100; 

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

//TEXT


// texttint = texthigh;
let c1text = 'CONVERSATION ROOM'; 
let c1stext = 'Public Sculpture, Fi.';

let c2text = 'UNTITLED, Polyphonic Social'; 
let c2stext = 'Liquid Architecture, Au.';

let c3text = 'DINAMICAS DEL VACIO'; 
let c3stext = 'Public Sculpture, Cl.';

let c4text = 'UNTITLED'; 
let c4stext ='Sound Installation, Mx.';

let c5text = 'WHITE ON WHITE'; 
let c5stext = 'Sound Installation, Tr.';

let c6text = 'AERIAL LISTENING'; 
let c6stext = 'Performance, Cl.';

let c7text = 'VISUAL LISTENING'; 
let c7stext = 'Performance.';

let c8text = 'PRECARIOUS SYMMETRY'; 
let c8stext = 'Sound Installation, Au.';

let c9text = 'VOLUMEN SINTETICO'; 
let c9stext = 'Sound Sculpture, Cn, Cl.';

let c10text = 'PORTRAITS OF MODERN QUALITY'; 
let c10stext = 'Sound Installation, Cn.';

// let c11text = 'WHITE ON WHITE'; 
// let c11stext = 'Sound Installation, Tr.';

// let c12text = 'WINIPEG'; 
// let c12stext = 'Installation, Cl.';




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


var maxtext = 255;
var mintext = 0;
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
smax = 0.90 //subir!!!!!!
smin = 0.01
sfade = 0.2;
mfade = 0.15;
var mvolume = smax;

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

iframeactivo = smin;


//////////////////////////////////////////////////////////////////////////////////////////

// var clicktext = 'CLICK CLICK CLICK CLICK CLICK'; 


// window
var winheight = sketch.windowHeight;

var firstmarc;



// //Setup
  sketch.setup = function() {
    
    let canvas1 = sketch.createCanvas(250, 800);
    //sketch.windowHeight
    // canvas1.parent("myContainer");


    // var winbar = (sketch.windowWidth - sketch.width) / 2;
    canvas1.position(920,140); //HEREEEEEEEEEEEEEEEEEEEEEEE

    canvas1.mouseWheel(doScroll);
    canvas1.mousePressed(doPress);
    canvas1.mouseOver(mouseCanvas);
    //canvas1.mouseReleased(doRelease);
    
 

   pgPosMin = 0 - pgHeight + margin;
   pgPosMax = 200 - margin;


//IFrames

let iframeleftall = 1190;
let iframetop = 100;

// iframe0 = sketch.createElement("iframe");
// iframe0.attribute("src","iframes/crfinland.html");
// iframe0.attribute("frameborder","none");
// iframe0.attribute("height", sketch.windowHeight);
// iframe0.attribute("width", "640");
// iframe0.mouseOver(iframeover);
// iframe0.position(530,iframetop );
// iframe0.hide();

iframe1 = sketch.createElement("iframe");
iframe1.attribute("src","iframes/crfinland.html");
iframe1.attribute("frameborder","none");
iframe1.attribute("height", sketch.windowHeight);
iframe1.attribute("width", "640");
iframe1.mouseOver(iframeover);
iframe1.position(iframeleftall,iframetop );
iframe1.hide();

iframe2 = sketch.createElement("iframe");
iframe2.attribute("src","iframes/poly.html");
iframe2.attribute("frameborder","none");
iframe2.attribute("height", sketch.windowHeight);
iframe2.attribute("width", "550");
iframe2.mouseOver(iframeover);
iframe2.position(iframeleftall,iframetop );
iframe2.hide();

iframe3 = sketch.createElement("iframe");
iframe3.attribute("src","iframes/antartica.html");
iframe3.attribute("frameborder","none");
iframe3.attribute("height", sketch.windowHeight);
iframe3.attribute("width", "550");
iframe3.mouseOver(iframeover);
iframe3.position(iframeleftall,iframetop );
iframe3.hide();

iframe4 = sketch.createElement("iframe");
iframe4.attribute("src","iframes/transitio.html");
iframe4.attribute("frameborder","none");
iframe4.attribute("height", sketch.windowHeight);
iframe4.attribute("width", "650");
iframe4.mouseOver(iframeover);
iframe4.position(iframeleftall,iframetop );
iframe4.hide();
  

iframe5 = sketch.createElement("iframe");
iframe5.attribute("src","iframes/whiteonwhite.html");
iframe5.attribute("frameborder","none");
iframe5.attribute("height", sketch.windowHeight);
iframe5.attribute("width", "650");
iframe5.mouseOver(iframeover);
iframe5.position(iframeleftall,iframetop );
iframe5.hide();

iframe6 = sketch.createElement("iframe");
iframe6.attribute("src","iframes/valpo.html");
iframe6.attribute("frameborder","none");
iframe6.attribute("height", sketch.windowHeight);
iframe6.attribute("width", "660");
iframe6.mouseOver(iframeover);
iframe6.position(iframeleftall,iframetop );
iframe6.hide();

iframe7 = sketch.createElement("iframe");
iframe7.attribute("src","iframes/escuchavisual.html");
iframe7.attribute("frameborder","none");
iframe7.attribute("height", sketch.windowHeight);
iframe7.attribute("width", "660");
iframe7.mouseOver(iframeover);
iframe7.position(iframeleftall,iframetop );
iframe7.hide();

iframe8 = sketch.createElement("iframe");
iframe8.attribute("src","iframes/precarious.html");
iframe8.attribute("frameborder","none");
iframe8.attribute("height", sketch.windowHeight);
iframe8.attribute("width", "660");
iframe8.mouseOver(iframeover);
iframe8.position(iframeleftall,iframetop );
iframe8.hide();

iframe9 = sketch.createElement("iframe");
iframe9.attribute("src","iframes/volumen.html");
iframe9.attribute("frameborder","none");
iframe9.attribute("height", sketch.windowHeight);
iframe9.attribute("width", "660");
iframe9.mouseOver(iframeover);
iframe9.position(iframeleftall,iframetop );
iframe9.hide();

iframe10 = sketch.createElement("iframe");
iframe10.attribute("src","iframes/portraits.html");
iframe10.attribute("frameborder","none");
iframe10.attribute("height", sketch.windowHeight);
iframe10.attribute("width", "550");
iframe10.mouseOver(iframeover);
iframe10.position(iframeleftall,iframetop );
iframe10.hide();

// iframe11 = sketch.createElement("iframe");
// iframe11.attribute("src","iframes/whiteonwhite.html");
// iframe11.attribute("frameborder","none");
// iframe11.attribute("height", sketch.windowHeight);
// iframe11.attribute("width", "550");
// iframe11.mouseOver(iframeover);
// iframe11.position(iframeleftall,iframetop );
// iframe11.hide();

// iframe12 = sketch.createElement("iframe");
// iframe12.attribute("src","iframes/winipeg.html");
// iframe12.attribute("frameborder","none");
// iframe12.attribute("height", sketch.windowHeight);
// iframe12.attribute("width", "550");
// iframe12.mouseOver(iframeover);
// iframe12.position(iframeleftall,iframetop );
// iframe12.hide();



  //SOUND SETUP

  sk1.setVolume(smin);
  sk1.play();
  sk1.loop();
  
  sk2.setVolume(smin);
  sk2.play();
  sk2.loop();
  
  sk3.setVolume(smin);
  sk3.play();
  sk3.loop();
  
  sk4.setVolume(smin);
  sk4.play();
  sk4.loop();
  
  sk5.setVolume(smin);
  sk5.play();
  sk5.loop();
  
  sk6.setVolume(smin);
  sk6.play();
  sk6.loop();
  
  sk7.setVolume(smin);
  sk7.play();
  sk7.loop();

  sk8.setVolume(smin);
  sk8.play();
  sk8.loop();

  sk9.setVolume(smin);
  sk9.play();
  sk9.loop();

  sk10.setVolume(smin);
  sk10.play();
  sk10.loop();

  sk11.setVolume(smin);
  sk11.play();
  sk11.loop();

  sk12.setVolume(smin);
  sk12.play();
  sk12.loop();
  }

 

sketch.preload = function(){


//PRELOAD SOUNDS
  sketch.soundFormats('mp3','m4a');
  sk1 = sketch.loadSound('soundcanvas2/crfinland.m4a');
  sk2 = sketch.loadSound('soundcanvas2/poly.m4a');
  sk3 = sketch.loadSound('soundcanvas2/antartica.m4a');
  sk4 = sketch.loadSound('soundcanvas2/transitio.m4a');
  sk5 = sketch.loadSound('soundcanvas2/whiteonwhite.m4a');
  sk6 = sketch.loadSound('soundcanvas2/valpo.m4a');
  sk7 = sketch.loadSound('soundcanvas2/escuchavisual.m4a');
  sk8 = sketch.loadSound('soundcanvas2/precarious.m4a');
sk9 = sketch.loadSound('soundcanvas2/volumen.m4a');
sk10 = sketch.loadSound('soundcanvas2/portraits.m4a');
sk11 = sketch.loadSound('soundcanvas2/whiteonwhite.m4a');
sk12 = sketch.loadSound('soundcanvas2/winipeg.m4a');

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



  sketch.background(255);
  //p.push();
  sketch.translate(0, pgPos); 



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


//C7 text
sketch.textFont(fonti);
sketch.textSize(MainTextsize);
sketch.textAlign(sketch.CENTER, sketch.CENTER);
sketch.fill(textcolorc7);
sketch.text(c7text, c7bx, c7by, c7boxSizex, c7boxSizey - 20); 


sketch.textSize(15);
sketch.textAlign(sketch.CENTER, sketch.CENTER);
sketch.fill(textcolorc7-textsubval);
sketch.text(c7stext, c7bx, c7by + 20, c7boxSizex, c7boxSizey - 20); 


//C8 text
sketch.textFont(fonti);
sketch.textSize(MainTextsize);
sketch.textAlign(sketch.CENTER, sketch.CENTER);
sketch.fill(textcolorc8);
sketch.text(c8text, c8bx, c8by, c8boxSizex, c8boxSizey - 20); 


sketch.textSize(15);
sketch.textAlign(sketch.CENTER, sketch.CENTER);
sketch.fill(textcolorc8-textsubval);
sketch.text(c8stext, c8bx, c8by + 20, c8boxSizex, c8boxSizey - 20); 


//C9 text
sketch.textFont(fonti);
sketch.textSize(MainTextsize);
sketch.textAlign(sketch.CENTER, sketch.CENTER);
sketch.fill(textcolorc9);
sketch.text(c9text, c9bx, c9by, c9boxSizex, c9boxSizey - 20); 


sketch.textSize(15);
sketch.textAlign(sketch.CENTER, sketch.CENTER);
sketch.fill(textcolorc9-textsubval);
sketch.text(c9stext, c9bx, c9by + 20, c9boxSizex, c9boxSizey - 20); 

 
//C10 text
sketch.textFont(fonti);
sketch.textSize(MainTextsize);
sketch.textAlign(sketch.CENTER, sketch.CENTER);
sketch.fill(textcolorc10);
sketch.text(c10text, c10bx, c10by, c10boxSizex, c10boxSizey - 20); 


sketch.textSize(15);
sketch.textAlign(sketch.CENTER, sketch.CENTER);
sketch.fill(textcolorc10-textsubval);
sketch.text(c10stext, c10bx, c10by + 20, c10boxSizex, c10boxSizey - 20); 


// //C11 text
// sketch.textFont(fonti);
// sketch.textSize(MainTextsize);
// sketch.textAlign(sketch.CENTER, sketch.CENTER);
// sketch.fill(textcolorc11);
// sketch.text(c11text, c11bx, c11by, c11boxSizex, c11boxSizey - 20); 


// sketch.textSize(15);
// sketch.textAlign(sketch.CENTER, sketch.CENTER);
// sketch.fill(textcolorc11-textsubval);
// sketch.text(c11stext, c11bx, c11by + 20, c11boxSizex, c11boxSizey - 20); 


// //C12 text
// sketch.textFont(fonti);
// sketch.textSize(MainTextsize);
// sketch.textAlign(sketch.CENTER, sketch.CENTER);
// sketch.fill(textcolorc12);
// sketch.text(c12text, c12bx, c12by, c12boxSizex, c12boxSizey - 20); 


// sketch.textSize(15);
// sketch.textAlign(sketch.CENTER, sketch.CENTER);
// sketch.fill(textcolorc12-textsubval);
// sketch.text(c12stext, c12bx, c12by + 20, c12boxSizex, c12boxSizey - 20); 




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
  
      var yc1u = pgPos;   //0 pix
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
  


 sketch.masterVolume(mvolume, mfade);

// sketch.print('mouseposition' + sketch.mouseX);


// C1 


if (
    sketch.mouseX > c1bx - c1boxSizex &&
    sketch.mouseX < c1bx + c1boxSizex &&
    sketch.mouseY > yc1u &&
    sketch.mouseY < yc1d
  ) {
    c1overBox = true;
    if (!c1locked) {
// c1alphasel = 150;
// c1a = cfull;
rectcolorc1 = rectselect;
sk1.fade(smax,sfade);
textcolorc1 = textsel;
    
    }
  } else {
    c1overBox = false;
   rectcolorc1 = rectnotsel;
  // c1a = cmid;
  sk1.fade(smin,sfade);
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
// c2alphasel = cahigh;
// c2a = cfull;
rectcolorc2 = rectselect;
sk2.fade(smax,sfade);
textcolorc2 = textsel;
    
    }
  } else {
    c2overBox = false;
    rectcolorc2 = rectnotsel;
  //  c2alphasel = calow;
  // c2a = cmid;
  sk2.fade(smin,sfade);
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
sk3.fade(smax,sfade);
textcolorc3 = textsel;

    
    }
  } else {
    c3overBox = false;
rectcolorc3 = rectnotsel;
sk3.fade(smin,sfade);
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
sk4.fade(smax,sfade);
textcolorc4 = textsel;
    
    }
  } else {
    c4overBox = false;
   rectcolorc4 = rectnotsel;
  sk4.fade(smin,sfade);
  textcolorc4 = textnotsel;
  }

sketch.fill(rectcolorc4, rectcolorc4, rectcolorc4, 140); //in the box
sketch.rect(c4bx, c4by, c4boxSizex, c4boxSizey);


// // c5 Mouse highlight
if (
    sketch.mouseX > c5bx - c5boxSizex &&
    sketch.mouseX < c5bx + c5boxSizex &&
    sketch.mouseY > yc5u &&
    sketch.mouseY < yc5d
  ) {
    c5overBox = true;
    if (!c5locked) {
  rectcolorc5 = rectselect;
  sk5.fade(smax,sfade);
  textcolorc5 = textsel;
    
    }
  } else {
    c5overBox = false;
    rectcolorc5 = rectnotsel;
    sk5.fade(smin,sfade);
    textcolorc5 = textnotsel;
  }

  
 
 sketch.fill(rectcolorc5, rectcolorc5, rectcolorc5, 150); //in the box
sketch.rect(c5bx, c5by, c5boxSizex, c5boxSizey);   


// c6 Mouse highlight

if (
    sketch.mouseX > c6bx - c6boxSizex &&
    sketch.mouseX < c6bx + c6boxSizex &&
    sketch.mouseY > yc6u &&
    sketch.mouseY < yc6d
  ) {
    c6overBox = true;
    if (!c6locked) {
  rectcolorc6 = rectselect;
  sk6.fade(smax,sfade);
  textcolorc6 = textsel;
    
    }
  } else {
    c6overBox = false;
    rectcolorc6 = rectnotsel;
    sk6.fade(smin,sfade);
    textcolorc6 = textnotsel;
  }

  
 
 sketch.fill(rectcolorc6, rectcolorc6, rectcolorc6, 150); //in the box
sketch.rect(c6bx, c6by, c6boxSizex, c6boxSizey);   



// c7 Mouse highlight

if (
    sketch.mouseX > c7bx - c7boxSizex &&
    sketch.mouseX < c7bx + c7boxSizex &&
    sketch.mouseY > yc7u &&
    sketch.mouseY < yc7d
  ) {
    c7overBox = true;
    if (!c7locked) {
  rectcolorc7 = rectselect;
  sk7.fade(smax,sfade);
  textcolorc7 = textsel;
    
    }
  } else {
    c7overBox = false;
    rectcolorc7 = rectnotsel;
    sk7.fade(smin,sfade);
    textcolorc7 = textnotsel;
  }

  
 
 sketch.fill(rectcolorc7, rectcolorc7, rectcolorc7, 150); //in the box
sketch.rect(c7bx, c7by, c7boxSizex, c7boxSizey);   


// c8 Mouse highlight

if (
    sketch.mouseX > c8bx - c8boxSizex &&
    sketch.mouseX < c8bx + c8boxSizex &&
    sketch.mouseY > yc8u &&
    sketch.mouseY < yc8d
  ) {
    c8overBox = true;
    if (!c8locked) {
  rectcolorc8 = rectselect;
  sk8.fade(smax,sfade);
  textcolorc8 = textsel;
    
    }
  } else {
    c8overBox = false;
    rectcolorc8 = rectnotsel;
    sk8.fade(smin,sfade);
    textcolorc8 = textnotsel;
  }

  
 
 sketch.fill(rectcolorc8, rectcolorc8, rectcolorc8, 150); //in the box
sketch.rect(c8bx, c8by, c8boxSizex, c8boxSizey);   


// c9 Mouse highlight

if (
    sketch.mouseX > c9bx - c9boxSizex &&
    sketch.mouseX < c9bx + c9boxSizex &&
    sketch.mouseY > yc9u &&
    sketch.mouseY < yc9d
  ) {
    c9overBox = true;
    if (!c9locked) {
  rectcolorc9 = rectselect;
  sk9.fade(smax,sfade);
  textcolorc9 = textsel;
    
    }
  } else {
    c9overBox = false;
    rectcolorc9 = rectnotsel;
    sk9.fade(smin,sfade);
    textcolorc9 = textnotsel;
  }

  
 
 sketch.fill(rectcolorc9, rectcolorc9, rectcolorc9, 150); //in the box
sketch.rect(c9bx, c9by, c9boxSizex, c9boxSizey);   



// c10 Mouse highlight

if (
    sketch.mouseX > c10bx - c10boxSizex &&
    sketch.mouseX < c10bx + c10boxSizex &&
    sketch.mouseY > yc10u &&
    sketch.mouseY < yc10d
  ) {
    c10overBox = true;
    if (!c10locked) {
  rectcolorc10 = rectselect;
  sk10.fade(smax,sfade);
  textcolorc10 = textsel;
    
    }
  } else {
    c10overBox = false;
    rectcolorc10 = rectnotsel;
    sk10.fade(smin,sfade);
    textcolorc10 = textnotsel;
  }

  
 
 sketch.fill(rectcolorc10, rectcolorc10, rectcolorc10, 150); //in the box
sketch.rect(c10bx, c10by, c10boxSizex, c10boxSizey);   



// c11 Mouse highlight

// if (
//     sketch.mouseX > c11bx - c11boxSizex &&
//     sketch.mouseX < c11bx + c11boxSizex &&
//     sketch.mouseY > yc11u &&
//     sketch.mouseY < yc11d
//   ) {
//     c11overBox = true;
//     if (!c11locked) {
//   rectcolorc11 = rectselect;
//   sk11.fade(smax,sfade);
//   textcolorc11 = textsel;
    
//     }
//   } else {
//     c11overBox = false;
//     rectcolorc11 = rectnotsel;
//     sk11.fade(smin,sfade);
//     textcolorc11 = textnotsel;
//   }

  
 
//  sketch.fill(rectcolorc11, rectcolorc11, rectcolorc11, 150); //in the box
// sketch.rect(c11bx, c11by, c11boxSizex, c11boxSizey);   


// // c12 Mouse highlight

// if (
//     sketch.mouseX > c12bx - c12boxSizex &&
//     sketch.mouseX < c12bx + c12boxSizex &&
//     sketch.mouseY > yc12u &&
//     sketch.mouseY < yc12d
//   ) {
//     c12overBox = true;
//     if (!c12locked) {
//   rectcolorc12 = rectselect;
//   sk12.fade(smax,sfade);
//   textcolorc12 = textsel;
    
//     }
//   } else {
//     c12overBox = false;
//     rectcolorc12 = rectnotsel;
//     sk12.fade(smin,sfade);
//     textcolorc12 = textnotsel;
//   }

  
 
//  sketch.fill(rectcolorc12, rectcolorc12, rectcolorc12, 150); //in the box
// sketch.rect(c12bx, c12by, c12boxSizex, c12boxSizey);   
// ////////////////////////////////////////////////////////////



}
     


//////////////////////////////////////////////////////////////////////////////////////////




//Scroll setup
  var doScroll = function(evt) {  
  scrollAmt = sketch.constrain(evt.deltaY, -scrollMax, scrollMax) // mouse speed
  // pgPos += scrollAmt; 
  //console.log(pgPos);
  pgPos = sketch.constrain(pgPos, pgPosMin, pgPosMax) // top/bottom margin stops        
  
  }

var mouseCanvas = function (evt) {
 mvolume = smax;

// console.log('inside');
 }

var iframeover = function (evt) {
 mvolume = 0.01;
//   c1overBox = false;
 // console.log('outside iframe');

}


//Activate audio mouse pressed.
   var doPress = function(evt) {
    sketch.print('mousepresseded');
    sketch.getAudioContext().resume()




  if (c1overBox) {
    iframe1.show();
    iframe0.hide();

  } else {
    iframe1.hide();
  }

if (c2overBox) {
    iframe2.show();
    iframe0.hide();

  } else {
    iframe2.hide();
  }

if (c3overBox) {
    iframe3.show();
    iframe0.hide();

  } else {
    iframe3.hide();
  }

if (c4overBox) {
    iframe4.show();
    iframe0.hide();

  } else {
    iframe4.hide();
  }

if (c5overBox) {
    iframe5.show();
    iframe0.hide();

  } else {
    iframe5.hide();
  }

if (c6overBox) {
    iframe6.show();
    iframe0.hide();

  } else {
    iframe6.hide();
  }

if (c7overBox) {
    iframe7.show();
    iframe0.hide();

  } else {
    iframe7.hide();
  }

if (c8overBox) {
    iframe8.show();
    iframe0.hide();

  } else {
    iframe8.hide();
  }

if (c9overBox) {
    iframe9.show();
    iframe0.hide();

  } else {
    iframe9.hide();
  }

if (c10overBox) {
    iframe10.show();
    iframe0.hide();

  } else {
    iframe10.hide();
  }

if (c11overBox) {
    iframe11.show();
    iframe0.hide();

  } else {
    iframe11.hide();
  }

if (c12overBox) {
    iframe12.show();
    iframe0.hide();

  } else {
    iframe12.hide();
  }


}



};
new p5(sk2);