!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e){var i=[],n=0,r=0,s=360,o=0,h=0,d={canvas2:document.createElement("canvas"),start:function(){this.canvas2.width=1200,this.canvas2.height=600,this.context=this.canvas2.getContext("2d"),document.body.insertBefore(this.canvas2,document.body.childNodes[0]),r=new Date,u()},clear:function(){this.context.clearRect(0,0,1200,600)}};function a(){var t=new c(30,30,"#ff0000",100,120);i.push(t),n++,d.start()}function c(t,e,n,r,s){this.color=n,this.width=t,this.height=e,this.speedX=0,this.speedY=0,this.degree=0,this.speed=0,this.yonX=0,this.yonY=0,this.x=r,this.y=s,this.update=function(){ctx=d.context,ctx.fillStyle=this.color,ctx.fillRect(this.x,this.y,this.width,this.height);try{var t=0;for(t=0;t<i.length;t++)if((i[t].x>=this.x&&i[t].x<=this.x+this.width||i[t].x<=this.x&&i[t].x+i[t].width>=this.x)&&(i[t].y>=this.y&&i[t].y<=this.y+this.height||i[t].y<=this.y&&i[t].y+i[t].height>=this.y)){if(i[t].x>=this.x)var e=i[t].x,n=this.x+this.width-i[t].x;else e=this.x,n=i[t].x+i[t].width-this.x;if(i[t].y>=this.y)var r=i[t].y,s=this.y+this.height-i[t].y;else r=this.y,s=i[t].y+i[t].height-this.y;var o=this.color,h=i[t].color;if(o==h)continue;var a=o.substring(1,3),c=h.substring(1,3),u=o.substring(3,5),g=h.substring(3,5),l=o.substring(5,7),f=h.substring(5,7),y=(parseInt(a,16)+parseInt(c,16))/2,p=(parseInt(u,16)+parseInt(g,16))/2,x=(parseInt(l,16)+parseInt(f,16))/2;ctx.fillStyle="#"+Math.floor(y).toString(16)+Math.floor(p).toString(16)+Math.floor(x).toString(16),ctx.fillRect(e,r,n,s)}}catch(t){alert(t)}},this.newPos=function(){var t=Math.sin(this.degree*Math.PI/180),e=Math.cos(this.degree*Math.PI/180),i=this.speed*t+o,n=this.speed*e+h;o=i-Math.floor(i),h=n-Math.floor(n),this.x=this.x+Math.floor(n),this.y=this.y-Math.floor(i),(1170<parseInt(this.x)||this.x<=0)&&(deg=this.degree%360,deg>=0&&deg<=180&&(deg=90-deg+90),deg>180&&deg<360&&(deg=270-deg+270),this.degree=deg),(this.y>=570||this.y<=0)&&(deg=this.degree%360,deg>=90&&deg<=270&&(deg=360-deg),(deg>0&&deg<90||deg>270&&deg<360)&&(deg>0?deg=360-deg:deg>270&&(deg=360-deg)),this.degree=deg)}}function u(){d.clear();for(var t=0;t<i.length;t++)i[t].newPos(),i[t].update();do{var e=new Date,n=e-r}while(n<1e3/s);r=e,requestAnimationFrame(u)}window.startGame=a,window.component=c,window.updateSayac=u,window.stop=function(){i[n-1].speed=0},window.reset=function(){i=[],a()},window.ekle=function(){n++,red=Math.floor(255*Math.random()),green=Math.floor(255*Math.random()),blue=Math.floor(255*Math.random()),i.push(new c(30,30,"#"+red.toString(16)+green.toString(16)+blue.toString(16),100,120))},window.speed=function(){i[n-1].speed=parseInt(document.getElementById("speed").value)},window.degree=function(){i[n-1].degree=parseInt(document.getElementById("degree").value)}}]);