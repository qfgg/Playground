// dynamically import algorithm
// var js = document.createElement('script');
// js.src = 'maxheap.js';
// document.body.appendChild(js);
var js1 = document.createElement('script');
js1.src = 'arraytree.js';
document.body.appendChild(js1);
var js1 = document.createElement('script');
js1.src = 'randomArr.js';
document.body.appendChild(js1);
var js1 = document.createElement('script');
js1.src = 'quicksort.js';
document.body.appendChild(js1);

// after script has been loaded, run test code
window.onload = function() {

var rotate = function(matrix) {
	var size = matrix.length;
	var i = 0;
	while (size - i - i > 1) {
		rotateLayer(matrix, i, i, size - i - i - 1);
		i++;
	}
};

function rotateLayer(matrix, x, y, step) {
	var tmp;

	for (var i = 0; i < step - x; i++) {
		tmp = matrix[y][x + i];
		matrix[y][x + i] = matrix[y + step - i][x];
		matrix[y + step - i][x] = matrix[y + step][x + step - i];
		matrix[y + step][x + step - i] = matrix[y + i][x + step];
		matrix[y + i][x + step] = tmp;
	}
}
var r =[
  [7,4,1],
  [8,5,2],
  [9,6,3]
];
// var r = [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ];
rotate(r);
console.log(r);

};

