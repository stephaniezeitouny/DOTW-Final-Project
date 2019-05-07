const frame = document.querySelector(".container");
const images = document.querySelectorAll('a');
console.log(images);

function changeOpacity(event) {
  if (event.target.tagName == 'A') { // only work with img elements
    for (let i = 0; i < images.length; i++) {
      images[i].className = 'semitransparent'; // change all frame image classes
    }
    event.target.className = "opaque"; // keep selected image opaque
    event.target.addEventListener('mouseout', resetOpacity, false);
  }
  event.stopPropagation();
}

function resetOpacity() {
  for (let i = 0; i < images.length; i++) {
    images[i].className = 'opaque'; // change all frame image classes
  }
}

frame.addEventListener('mouseover', changeOpacity, false);