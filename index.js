// dynamically import algorithm
var js = document.createElement('script');
js.src = 'maxheap.js';
document.body.appendChild(js);
// var js1 = document.createElement('script');
// js1.src = 'arraytree.js';
// document.body.appendChild(js1);
// var js1 = document.createElement('script');
// js1.src = 'randomArr.js';
// document.body.appendChild(js1);
// var js1 = document.createElement('script');
// js1.src = 'quicksort.js';
// document.body.appendChild(js1);
// var js1 = document.createElement('script');
// js1.src = 'list.js';
// document.body.appendChild(js1);

// after script has been loaded, run test code
window.onload = function() {

	var h = [79,66,43,83,30,87,38,55,91,72,49,9];
	createHeap(h);
	console.log(h);

};

