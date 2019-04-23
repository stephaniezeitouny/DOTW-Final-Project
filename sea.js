var colors = ['#cc, #6cf, #eba13a'];

function animateBubbles(event) {
	var circle = document.createElement('div');
	circle.setAttribute('class', 'circle');
	document.body.appendChild(circle);

	var xPos = event.clientX;
	var yPos = event.clientY;

	circle.style.left = xPos +'px';
	circle.style.top = yPos +'px';

	var color = Math.floor((Math.random() * colors.length));
	circle.style.borderColor = color;
	circle.style.transition = 'all 0.5s linear 0s';

	circle.style.left = circle.offsetLeft -20 +'px';
	circle.style.top = circle.offsetTop -20 +'px';

	circle.style.width = '50px';
	circle.style.height = '50px';
	circle.style.borderWith = '5px';
	circle.style.opacity = 0;

	console.log(xPos, yPos);
}

document.onmousemove = animateBubbles;

// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', e=>{
// 	cursor.setAttribute('style', 'top: ' + e.pageY +'px; left' +e.pageX+'px;')

// })