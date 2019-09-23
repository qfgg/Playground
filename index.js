// dynamically import algorithm
var js = document.createElement('script');
js.src = 'maxheap.js';
document.body.appendChild(js);
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

var trap = function(height) {
    
};

var r = trap([0,1,0,2,1,0,1,3,2,1,2,1]);
console.log(r);

};

