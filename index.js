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

var multiply = function(num1, num2) {
    var hashmap = {};
    var digits = {};
    var i, j, k;
    var len = num1.length;
    var l = num2.length;

    for (i = 0; i < 10; i++) {
    	for (j = 0; j < 10; j++) {
    		hashmap[i + '' + j] = i * j;
    		if (i !== j) {
    			hashmap[j + '' + i] = hashmap[i + '' + j];
    		}
    	}
    }

    function mul(char1, char2, pos) {
    	var rs = hashmap[char1 + char2];
    	var r1 = rs % 10;

    	if (digits[pos] === undefined) {
    		digits[pos] = [r1];
    	} else {
    		digits[pos].push(r1);
    	}
    	if (rs > 10) {
    		var r2 = Math.floor(rs / 10);
    		var npos = pos + 1;
    		if (digits[npos] === undefined) {
	    		digits[npos] = [r2];
	    	} else {
	    		digits[npos].push(r2);
	    	}
    	}
	}

    for (i = 0; i < len; i++) {
    	for (j = 0; j < l; j++) {
    		mul(num1[i], num2[j], len + l - i - j - 2);
    	}
    }

    console.log(digits);
};

var num1 = "12", num2 = "98";
// var num1 = "123456789", num2 = "987654321";
var r = multiply(num1, num2);
console.log(r);

};

