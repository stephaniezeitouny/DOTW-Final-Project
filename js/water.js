canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c = canvas.getContext('2d');

function mousePosition(event) {
  var mouseX = event.clientX; // get cursor X position
  var mouseY = event.clientY; // get cursor Y position

  // var num = mouseY/255;
  // var num2 = mouseX;
  // console.log(mouseY);
  animate(mouseX,mouseY);
}

window.addEventListener('mousemove', mousePosition);

// let i = 0;
// let dx=1;
// let dy=1;
function animate(xpos,ypos){

	requestAnimationFrame(animate);
	// c.clearRect(0,0,innerHeight,innerWidth);
	
	// while (i<100){
// let xpos = Math.ceil(Math.random()*canvas.width);
// let ypos = Math.ceil(Math.random()*canvas.height);
let radius = Math.ceil(Math.random()*50);
let b = Math.ceil(Math.random()*255);

	// console.log('random xpos: ' + xpos);
	// console.log('random ypos: ' + ypos);
	// console.log('radius: '+radius);

	// let blues = ['blue ridge mtns', 'chemical suit', 'st louis blues', 'natural gas	', 'parrot','alaska sky'];
		
	c.beginPath();
	c.arc(xpos,ypos,radius,0, Math.PI*2, false);
	c.fillStyle = 'rgba(0,0,'+b+')';
	c.fill();
	// c.translate(xpos,ypos); 

	// if(mouseX - xpos <50 && mouseX -xpos >50){
	// 	radius+=1;
	// }

	// // if(xpos > 10){
	// 	dx-=dx;
	// }
	// xpos+=dx;
	// i++;	
// }	
}
animate();


