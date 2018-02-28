// dynamically import algorithm
var js = document.createElement('script');
js.src = 'merge sort.js';
document.body.appendChild(js);

// after script has been loaded, run test code
window.onload = function() {
  var a1 = [84, 98, 62, 62, 5, 24, 5, 15, 4, 7, 8, 4, 5, 6, 2, 9, 5, 6, 2, 2, 1, 4];
  var a2 = [84, 98, 62, 62, 5, 24, 5, 15, 4, 7, 8, 4, 5, 6, 2, 9, 5, 6, 2, 2, 1, 4];
  var t1 = new Date().getTime();
  for (var i = 0; i < 1000; i++) {
    mergeSort(a1);
  }
  var t2 = new Date().getTime();
  for (var i = 0; i < 1000; i++) {
    mergeSort1(a2);
  }
  var t3 = new Date().getTime();
  console.log(t2 - t1, t3 - t2);
};