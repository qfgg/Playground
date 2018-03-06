// dynamically import algorithm
var js = document.createElement('script');
js.src = 'bubble sort.js';
document.body.appendChild(js);
// var js1 = document.createElement('script');
// js1.src = 'insert sort.js';
// document.body.appendChild(js1);

// after script has been loaded, run test code
window.onload = function() {
  var a1 = [], a2 = [], a3 = [];
  for (var i = 0; i < 20; i++) {
    a1[i] = Math.round(Math.random() * 50);
  }
  // a2 = a1.slice();
  // a3 = a1.slice();
  // console.log(a1);
  // console.log(a2);
  // console.log(a3);
  console.log(a1);
  // var t1 = new Date().getTime();
  bubbleSort(a1);
  // var t2 = new Date().getTime();
  // mergeSorto(a2);
  // var t3 = new Date().getTime();
  // insertSort(a3);
  // var t4 = new Date().getTime();
  console.log(a1);
  // console.log(t2 - t1);
  // console.log(a1);
  // console.log(a2);
  // console.log(a3);
};