
var liste= [];
var elementAdet = 0;
var then = 0;
var fps = 360;
var sinArtık=0;
var cosArtık=0;
var alan = {
  canvas2: document.createElement("canvas"),
  start: function() {
    this.canvas2.width = 1200;
    this.canvas2.height = 600;
    this.context = this.canvas2.getContext("2d");
    document.body.insertBefore(this.canvas2, document.body.childNodes[0]);
    
    then = new Date();
    updateSayac();
  },
  clear: function() {
    this.context.clearRect(0, 0, 1200, 600);
  }
};

function startGame() {
 var  sa = new component(30, 30, "#ff0000", 100, 120);
 liste.push(sa);
  elementAdet++;
  alan.start();
}

function component(width, height, color, x, y) {
  this.color = color;
  this.width = width;
  this.height = height;

  this.degree=0;
  this.speed=0;

  this.x = x;
  this.y = y;
    
  this.update = function() {
    ctx = alan.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    try{
    var i=0;
    for  (var i=0;i<liste.length;i++){
      
      if ((liste[i].x>=this.x && liste[i].x<=(this.x+this.width) )|| (liste[i].x<=this.x && (liste[i].x+liste[i].width)>=this.x )){
        if ((liste[i].y>=this.y && liste[i].y<=(this.y+this.height ) ) || (liste[i].y<=this.y && (liste[i].y+liste[i].height)>=this.y)   ){
            
          if (liste[i].x>=this.x){
              var kesisenX=liste[i].x;
              var kesisenWidth=(this.x+this.width)-liste[i].x;
            }
            else{
              var kesisenX=this.x;
              var kesisenWidth=(liste[i].x+liste[i].width)-this.x;
            } 
            if (liste[i].y>=this.y){
              var kesisenY=liste[i].y;
              var kesisenHeight=(this.y+this.height)-liste[i].y;
            }
            else{
              var kesisenY=this.y;
              var kesisenHeight=(liste[i].y+liste[i].height)-this.y;
            
            }
          var renk1=this.color;
          var renk2=liste[i].color;
          if (renk1==renk2){
            continue;
          }
          var renk1Red=renk1.substring(1,3);
    var renk2Red=renk2.substring(1,3);
    var renk1Green=renk1.substring(3,5);
    var renk2Green=renk2.substring(3,5);
    var renk1Blue=renk1.substring(5,7);
    var renk2Blue=renk2.substring(5,7);
    var newRed=(parseInt(renk1Red,16)+parseInt(renk2Red,16))/2;
    var newGreen=(parseInt(renk1Green,16)+parseInt(renk2Green,16))/2;
    
    var newBlue=(parseInt(renk1Blue,16)+parseInt(renk2Blue,16))/2;
    
    
    ctx.fillStyle = "#"+Math.floor(newRed).toString(16)+Math.floor(newGreen).toString(16)+Math.floor(newBlue).toString(16);

    ctx.fillRect(kesisenX, kesisenY, kesisenWidth, kesisenHeight);
          
        }

      }
    }
    
  }
    catch(err){
      alert(err);
    }
  };

  /*this.newPos = function() {
    if (this.yonX != 0);
    this.x += this.speedX * this.yonX;
    if (this.yonX != 0);
    this.y += this.speedY * this.yonY;

    if (1170 < parseInt(this.x) || this.x <= 0) {
      this.x -= this.speedX * this.yonX;
      this.yonX = this.yonX * -1;
    }

    if (this.y >= 570 || this.y <= 0) {
      this.y -= this.speedY * this.yonY;
      this.yonY = this.yonY * -1;
    }
  };*/
  this.newPos=function(){
    var sinus=Math.sin(this.degree*Math.PI/180);
    var cos=Math.cos(this.degree*Math.PI/180);
    var sinSpeed=(this.speed* sinus)+sinArtık;
    var cosSpeed=(this.speed* cos)+cosArtık;
    sinArtık=sinSpeed-Math.floor(sinSpeed);
    cosArtık=cosSpeed-Math.floor(cosSpeed);
    this.x=this.x+Math.floor(cosSpeed);
    this.y=this.y-Math.floor(sinSpeed);
    if (1170 < parseInt(this.x) || this.x <= 0) {
      deg=this.degree%360;
      if (deg>=0 && deg<=180){
        deg=(90-deg)+90
      }
      if (deg>180 && deg<360){
        deg=(270-deg)+270;
      }
      this.degree=deg;
      //this.degree=Math.atan((-sinus)/(cos))*180/Math.PI;
      //alert(this.degree);
    }

    if (this.y >= 570 || this.y <= 0) {
      deg=this.degree%360;
      if (deg>=90 && deg<=270){
        deg=360-deg
      }
      if ((deg>0 && deg<90) || deg>270 && deg<360){
        if (deg>0){
          deg=360-deg;
        }
        else if (deg>270){
          deg=360-deg;
        }
      }
      this.degree=deg;
  }
}}

function updateSayac() {
  alan.clear();

  for (var i = 0; i < liste.length; i++) {
    liste[i].newPos();
    liste[i].update();
  }

  do {
    var time = new Date();
    var gecenSure = time - then;
  } while (gecenSure < 1000 / fps);

  then = time;
  requestAnimationFrame(updateSayac);
}
function stop() {
  liste[elementAdet - 1].speed= 0;
  
}

function reset() {
  liste=[];
  startGame();
}

function ekle() {
  elementAdet++;
  red = Math.floor(Math.random() * 255);
  green = Math.floor(Math.random() * 255);
  blue = Math.floor(Math.random() * 255);
  liste.push(
    new component(
      30,
      30,
      "#"+red.toString(16)+green.toString(16)+blue.toString(16),
      100,
      120
    )
  );
}
function degree(){
  liste[elementAdet - 1].degree = parseInt(
    document.getElementById("degree").value
  );
}
function speed(){
  liste[elementAdet - 1].speed = parseInt(
    document.getElementById("speed").value
  );
}
window.startGame = startGame;
window.component = component;
window.updateSayac = updateSayac;
window.stop = stop;
window.reset = reset;
window.ekle = ekle;
window.speed=speed;
window.degree=degree;