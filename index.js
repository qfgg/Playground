// dynamically import algorithm
var js = document.createElement('script');
js.src = 'insert sort.js';
document.body.appendChild(js);

// after script has been loaded, run test code
window.onload = function() {
  var input = [12, 4, 6, 1, 58, 67, 1, 45, 2, 15, 12, 634, 2, 1, 23];
  var ouput = insertSort(input);
  console.log(input);
  console.log(ouput);
};