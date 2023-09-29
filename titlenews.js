
var news = function( p ) {
p.setup = function() {
  
var canvas = p.createCanvas(250,50);
canvas.position(0,100);
   
}

  p.draw = function() {    
  p.background(30);
  p.fill(200);
  p.textSize(20);
  p.textStyle(ITALIC);
  p.text('These Days',50,25); 
  
}

 /* 
 var vidLoad = function(){
   c1.loop();
 }

*/
};

new p5(news);


