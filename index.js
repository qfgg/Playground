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

var trap = function(height) {
	var count = 0;

    var bottomCount = trapBottom(height);
    while (height.length > 0) {
    	count += bottomCount;
    	bottomCount = trapBottom(height);
    }

    return count;
};

function trapBottom(height) {
	var count = 0;
	var i = 0;
	var j;
	var len = height.length;
	while (height[i] === 0 && i < len) {
		height.shift();
	}
	var j = height.length - 1;
	while(height[j] === 0 && j >= 0) {
		height.pop();
		j--;
	}
	for (i = 0, len = height.length; i < len; i++) {
		if (height[i] === 0) {
			count++;
		} else {
			height[i]--;
		}
	}
	return count;
}

var r = trap([4,2,3]);
console.log(r);

};

