// dynamically import algorithm
// var js = document.createElement('script');
// js.src = 'maxheap.js';
// document.body.appendChild(js);
// var js1 = document.createElement('script');
// js1.src = 'arraytree.js';
// document.body.appendChild(js1);
var js1 = document.createElement('script');
js1.src = 'randomArr.js';
document.body.appendChild(js1);

// after script has been loaded, run test code
window.onload = function() {

var findMedianSortedArrays = function(nums1, nums2) {
	var len1 = nums1.length;
	var len2 = nums2.length;

	// if there's no intersection between nums1 and nums2
	var mid = Math.floor((len1 + len2 - 1) / 2);
	var tmp = (len1 + len2) % 2 === 0;

	if (nums1[0] >= nums2[len2 - 1]) {
		if (len2 === len1) {
			return (nums2[len2 - 1] + nums1[0]) / 2;
		} else if (len2 > len1) {
			if (tmp) {
				return (nums2[mid] + nums2[mid + 1]) / 2;
			}
			return nums2[mid];
		} else {
			if (tmp) {
				return (nums1[mid - len2] + nums1[mid - len2 + 1]) / 2;
			}
			return nums1[mid - len2];
		}
	} else if (nums2[0] >= nums1[len1 - 1]) {
		if (len1 === len2) {
			return (nums1[len1 - 1] + nums2[0]) / 2;
		} else if (len1 > len2) {
			if (tmp) {
				return (nums1[mid] + nums1[mid + 1]) / 2;
			}
			return nums1[mid];
		} else {
			if (tmp) {
				return (nums2[mid - len1] + nums2[mid - len1 + 1]) / 2;
			}
			return nums2[mid - len1];
		}
	}

	// use the median of the longer arr to divide the shorter one
    var longArr, shortArr, lenLong, lenShort;
    
    if (len1 >= len2) {
        longArr = nums1;
        shortArr = nums2;
        lenLong = len1;
        lenShort = len2;
    } else {
        longArr = nums2;
        shortArr = nums1;
        lenLong = len2;
        lenShort = len1;
    }

	// use median (or minor half of median) to divide shortArr, and find out diff
	// make this as the start point
	var left = 0;
    var right = lenShort - 1;
	var cur = Math.floor((lenLong - 1) / 2);
    var pivot;

    pivot = getDifference(shortArr, left, right, longArr, cur);
    if (pivot[0] === 0) {
        return longArr[cur];
    }
    if (pivot[0] < 0) {
        right = pivot[2];
    } else {
        left = pivot[1] > 0 ? pivot[1] : 0;
    }

    // if diff !== 0, try to move median diff steps and divide again
    // narrow down to findInterval
    // cause if diff > 0, we move to right; otherwise left
    // make this new position as the end point
    var next, nextPivot;

    if (pivot[0] > 0) {
    	next = lenLong - 1;
    } else {
    	next = 0;
    }
    nextPivot = getDifference(shortArr, left, right, longArr, next);
    if (nextPivot[0] === 0) {
        return longArr[next];
    }
    if (nextPivot[0] < 0) {
        right = nextPivot[2];
    } else {
        left = nextPivot[1] > 0 ? nextPivot[1] : 0;
    }

    // binary search between cur and next
    if ((pivot[0] > 0 && nextPivot[0] < 0) || (pivot[0] < 0 && nextPivot[0] > 0)) {
	    while (cur + 1 !== next) {
	    	mid = Math.floor((cur + next) / 2);
	    	tmp = getDifference(shortArr, left, right, longArr, mid);
	    	if (tmp[0] === 0) {
		        return longArr[mid];
		    }
		    if (tmp[0] < 0) {
		        right = tmp[2];
		    } else {
		        left = tmp[1] > 0 ? tmp[1] : 0;
		    }

		    if (tmp[0] > 0) {
		    	if (pivot[0] < 0) {
		    		next = mid;
		    	} else {
		    		cur = mid;
		    	}
		    }
	    }
	    return getMedianInGap(longArr, cur, next, pivot, nextPivot, shortArr);
    }
};

// if cur is next to next, but no findings yet
// find median in this interval 
function getMedianInGap(outArr, cur, next, pivot, nextPivot, inArr) {
	var left, right, inStart, inEnd, diff;

	if (cur > next) {
		left = next;
		right = cur;
		inStart = nextPivot[2];
		inEnd = pivot[1];
		diff = nextPivot[0];
	} else {
		left = cur;
		right = next;
		inStart = pivot[2];
		inEnd = nextPivot[1];
		diff = pivot[0];
	}

	var tmp = inArr.slice(inStart, inEnd + 1);console.log(inArr.slice(inStart, inEnd + 1));
	tmp.unshift(outArr[left]);
	tmp.push(outArr[right]);

	var move = Math.floor(diff / 2);
	if (diff % 2 === 0) {
		return tmp[move];
	}

	return (tmp[move] + tmp[move + 1]) / 2;
}

// use source to divide arr into left part and right part
// return [diff, left, right]
// left: the border index of left part, right: the border index of right part
// diff: number of right part - number of left part(nums1 and nums2)
function getDifference(targetArr, searchStart, searchEnd, sourceArr, cur) {
    var left, right;

    left = findInterval(sourceArr[cur], targetArr, searchStart, searchEnd);
    right = left + 1;

    return [targetArr.length + sourceArr.length - right - left - cur - cur - 2, left, right];
}

// find out the interval source falls in using binary search
// return the beginning index of the interval
function findInterval(source, arr, start, end) {
    if (source < arr[start]) {
        return start - 1;
    }

    if (source > arr[end]) {
        return end;
    }

    var left = start;
    var right = end;
    var mid;

    while (left + 1 !== right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] === source) {
            return mid;
        } else if (arr[mid] > source) {
            right = mid;
        } else {
            left = mid;
        }
    }

    return left;
}

// var n1 = genArr();
// var n2 = genArr();
// console.log(n1, n2);
// var r = findMedianSortedArrays(n1, n2);
var r = findMedianSortedArrays([2], [1,4,7,8,9]);
console.log(r);

};

