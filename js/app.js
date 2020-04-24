'use strict';
let x, y, z, w;
z=0;
w=0;
let wrapper = document.querySelector('.wrapper');

wrapper.onmousedown = function(e){
	let tar = (e.target);
	x = getCoords(tar).left;
	y = getCoords(tar).top;
	tar.classList.toggle('active');
	console.log(getCoords(tar));

		document.addEventListener('keypress', function(e){
			e.preventDefault();
			if(e.code == 'KeyS' && tar.classList.contains('active')){
				console.log(z);
				z+=5;
				tar.style.transform =	"translate(" + w + "px, " + z + "px)"
			 }
			 if(e.code == 'KeyW' && tar.classList.contains('active')){
				console.log(z);
				z-=5;
				tar.style.transform =	"translate(" + w + "px, " + z + "px)"
			 }
			 if(e.code == 'KeyD' && tar.classList.contains('active')){
				console.log(w);
				w+=5;
				tar.style.transform =	"translate(" + w + "px, " + z + "px)"
			 }
			 if(e.code == 'KeyA' && tar.classList.contains('active')){
				console.log(w);
				w-=5;
				tar.style.transform =	"translate(" + w + "px, " + z + "px)"
			 }

		})

	
}




function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}