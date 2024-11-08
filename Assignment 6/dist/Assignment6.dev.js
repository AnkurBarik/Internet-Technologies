"use strict";

var square = document.getElementById('square');
var circle = document.getElementById('circle');
var position = 0;

function slideElement() {
  var box = square;

  if (box.style.transform === 'translateX(100px)') {
    box.style.transform = 'translateX(0)';
  } else {
    box.style.transform = 'translateX(100px)';
  }

  box.style.transition = 'transform 1s ease-in-out';
}

function scaleElement() {
  if (circle.style.scale === '2') {
    circle.style.scale = '1';
  } else {
    circle.style.scale = '2';
  }

  circle.style.transition = 'scale 1s ease-in-out';
}

function fadeElement() {
  if (circle.style.opacity === '0') {
    circle.style.opacity = '1';
  } else {
    circle.style.opacity = '0';
  }

  circle.style.transition = 'opacity 1s ease';
}

function slideLoop() {
  setInterval(slideElement, 1000);
}

function scaleLoop() {
  setInterval(scaleElement, 1000);
}

function fadeLoop() {
  setInterval(fadeElement, 1000);
}
//# sourceMappingURL=Assignment6.dev.js.map
