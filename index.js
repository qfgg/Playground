// dynamically import algorithm
// var js = document.createElement('script');
// js.src = 'maxheap.js';
// document.body.appendChild(js);
// var js1 = document.createElement('script');
// js1.src = 'arraytree.js';
// document.body.appendChild(js1);
// var js1 = document.createElement('script');
// js1.src = 'randomArr.js';
// document.body.appendChild(js1);
// var js1 = document.createElement('script');
// js1.src = 'quicksort.js';
// document.body.appendChild(js1);
var js1 = document.createElement('script');
js1.src = 'list.js';
document.body.appendChild(js1);

// after script has been loaded, run test code
window.onload = function() {

var longestPalindrome = function(s) {
	if (s === '' || s.length === 1) {
		return s;
	}

    var dp = [];
    var l, i, j, pStart, pEnd;
    var maxlen = 0;
    var len = s.length;

    for (l = 1; l <= len; l++) {
    	for (i = 0; i < len - l + 1; i++) {
    		j = i + l - 1;
    		if (l === 1 || (l === 2 && s[i] === s[i + 1]) ||
    		(s[i] === s[j] && dp[i + 1] && dp[i + 1][j - 1])) {
    			if (!dp[i]) {
    				dp[i] = [];
    			}
    			dp[i][j] = true;

	    		if (l > maxlen) {
	    			maxlen = l;
	    			pStart = i;
	    			pEnd = j;
	    		}
    		}
    	}
    }

    return s.slice(pStart, pEnd + 1);
};

var s = "babad";//"bab"
var p = longestPalindrome(s);
console.log(p);
s = "cbbd";//"bb"
p = longestPalindrome(s);
console.log(p);

};

