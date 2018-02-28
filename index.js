// dynamically import algorithm
var js = document.createElement('script');
js.src = 'merge sort.js';
document.body.appendChild(js);

// after script has been loaded, run test code
window.onload = function() {
  var a1 = [21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  var a2 = [21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  var t1 = new Date().getTime();
  for (var i = 0; i < 1000; i++) {
    mergeSort(a1);
  }
  var t2 = new Date().getTime();
  for (var i = 0; i < 1000; i++) {
    mergeSorto(a2);
  }
  var t3 = new Date().getTime();
  console.log(t2 - t1, t3 - t2);
};