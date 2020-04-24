'use strict';

let wrapper = document.querySelector('.wrapper');

wrapper.onmousedown = function(e){
	let tar = (e.target);
	console.log(getCoords(tar));
	tar.onmousemove = function(event){
		let x = event.clientX - getCoords(tar).left;
		let y = event.clientY - getCoords(tar).top;
		console.log(x, y);
	tar.style.transform = "translate(" + x + "px, " + y + "px)"}
}

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}