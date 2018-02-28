// dynamically import algorithm
var js = document.createElement('script');
js.src = 'merge sort.js';
document.body.appendChild(js);

// after script has been loaded, run test code
window.onload = function() {
  var input = [84, 2, 9, 5, 6, 2, 98, 6, 62, 7, 2, 62, 5, 24, 5, 15, 4, 7, 8, 4, 5, 6];
  var output = mergeSort(input);
  console.log(input);
  console.log(output);
};