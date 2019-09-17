// dynamically import algorithm
// var js = document.createElement('script');
// js.src = 'maxheap.js';
// document.body.appendChild(js);
// var js1 = document.createElement('script');
// js1.src = 'dijkstra.js';
// document.body.appendChild(js1);

// after script has been loaded, run test code
window.onload = function() {

var findMedianSortedArrays = function(nums1, nums2) {
	var len1 = nums1.length;
	var len2 = nums2.length;
	var md1 = Math.floor((len1 - 1) / 2);
    var md2 = Math.floor((len2 - 1) / 2);
};

var r = findMedianSortedArrays([1,5,15,19,20,22], [2,3,4,10,18,25]);
console.log(r);

};