/*
Dynamic Transforms of Grid Shapes
- Mapped to cursor movement
- Scaled to browser window
*/

const text = document.querySelectorAll('.container__text');
let xBrowserRatio;
let yBrowserRatio;

function scaleRatio() {
  let browserWidth = window.innerWidth;
  let browserHeight = window.innerHeight;

  xBrowserRatio = browserWidth / 120; // not a full 180 deg rotation
  yBrowserRatio = browserHeight / 120; // not a full 180 deg rotation
}

function mousePosition(event) {
  let xPos = event.clientX; // get cursor X position
  let yPos = event.clientY; // get cursor Y position

  updateRotation(xPos, yPos);
}

function updateRotation(xPos, yPos) {
  // map horizontal rotation to X position relative to browser width
  let xRotation = 60 - Math.ceil(yPos / yBrowserRatio); // half the scaled rotation value
  console.log('X rotation: ' + xRotation); // 0 deg rotation at page center

  // map vertical rotation to Y position relative to browser height
  let yRotation = -60 + Math.ceil(xPos / xBrowserRatio); // half the scaled rotation value
  console.log('Y rotation: ' + yRotation); // 0 deg rotation at page center

  // set perspective of shapes
  for (let i = 0; i < text.length; i++) {
    text[i].style.transform = 'rotateX(' + xRotation + 'deg)' + ' ' + 'rotateY(' + yRotation + 'deg)';
  } 
}

// update scale when the page loads
window.addEventListener('load', scaleRatio);

// update scale when the window is resized
window.addEventListener('resize', scaleRatio);

// detect mouse movements
window.addEventListener('mousemove', mousePosition);







function select(){
  let list = document.getElementById('container');
  let item = document.querySelectorAll('.container__text');
    for(let i=0; i<item.length;i++){
        item[i].rotatation = updateRotation();
      }

}



  // function changeOpacity(event) {
  //   if (event.target.tagName == 'H1') {
  //     for(let i=0; i<item.length;i++){
  //       item[i].rotatation = updateRotation();
  //     }
  //     event.target.className ='opaque';
  //     event.target.addEventListener('mouseout', resetOpacity,false);
  //   }
  //   event.stopPropogation;
    
  // }

  // function resetOpacity(){
  //   for (let i =0; i<item.length; i++){
  //     item[i].className = 'opaque';
  //   }
  // }

  // list.addEventListener('mouseover', changeOpacity, false);