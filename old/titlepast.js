
var passt = function( p ) {
p.setup = function() {
  
var canvas = p.createCanvas(250,50);
canvas.position(920,100);
   
}

  p.draw = function() {    
  p.background(200);
  p.fill(20);
  p.textSize(20);
  p.textStyle(ITALIC);
  p.text('Past',50,25); 
  
}

 /* 
 var vidLoad = function(){
   c1.loop();
 }

*/
};

new p5(passt);


