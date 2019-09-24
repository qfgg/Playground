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

var leastInterval = function(tasks, n) {
	var taskCount = {};
    for (var i = 0, len = tasks.length; i < len; i++) {
    	if (taskCount[tasks[i]] === undefined) {
    		taskCount[tasks[i]] = 1;
    	} else {
    		taskCount[tasks[i]]++;
    	}
    }
};

var tasks = ["A","A","A","B","B","B"], n = 2
var r = leastInterval(tasks, n);
console.log(r);

};

