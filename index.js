// dynamically import algorithm
// var js = document.createElement('script');
// js.src = 'maxheap.js';
// document.body.appendChild(js);
// var js1 = document.createElement('script');
// js1.src = 'arraytree.js';
// document.body.appendChild(js1);
// var js1 = document.createElement('script');
// js1.src = 'randomArr.js';
// document.body.appendChild(js1);
// var js1 = document.createElement('script');
// js1.src = 'quicksort.js';
// document.body.appendChild(js1);

// after script has been loaded, run test code
window.onload = function() {

var multiply = function(num1, num2) {
	
};

<<<<<<< HEAD
function rotateLayer(matrix, x, y, step) {
	var tmp;

	for (var i = 0; i < step; i++) {
		tmp = matrix[y][x + i];
		matrix[y][x + i] = matrix[y + step - i][x];
		matrix[y + step - i][x] = matrix[y + step][x + step - i];
		matrix[y + step][x + step - i] = matrix[y + i][x + step];
		matrix[y + i][x + step] = tmp;
	}
}
var r =[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
];

rotate(r);
=======
var r = multiply();
>>>>>>> fa55ad94f9e94fd81a0ed12cbd033637472675e9
console.log(r);

};

