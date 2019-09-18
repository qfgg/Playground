// dynamically import algorithm
// var js = document.createElement('script');
// js.src = 'maxheap.js';
// document.body.appendChild(js);
// var js1 = document.createElement('script');
// js1.src = 'arraytree.js';
// document.body.appendChild(js1);

// after script has been loaded, run test code
window.onload = function() {

var findMedianSortedArrays = function(nums1, nums2) {
	var len1 = nums1.length;
	var len2 = nums2.length;
    var longArr, shortArr, lenLong, lenShort;

    if (len1 > len2) {
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

	var cur = Math.floor((lenLong - 1) / 2);
    var cur2 = null;
    var next, step, tmp;
    var left = 0;
    var right = lenShort - 1;
    var pivot;

    if (lenLong % 2 === 0) {
        cur2 = cur + 1;
        pivot = getDifference(shortArr, left, right, longArr[cur], longArr[cur2]);
        if (pivot[0] === 0) {
            return (longArr[cur] + longArr[cur + 1]) / 2;
        }
    } else {
        isEven = false;
        pivot = getDifference(shortArr, left, right, longArr[cur]);
        if (pivot[0] === 0) {
            return longArr[cur];
        }
    }

    if (pivot[0] < 0) {
        right = pivot[2];
        step = Math.floor(pivot[0] / 2);
        if (pivot[0] % 2 === 0) {
            tmp = cur + step;
            cur = tmp >= 0 ? tmp : 0;
            if (cur2 !== null) {
                cur2 = cur + 1;
            }
        } else {
            if (cur2 !== null) {
                cur2 = null;
                tmp = cur + step;
                cur = tmp >= 0 ? tmp : 0;
            } else {
                tmp = cur2 + step;
                cur2 = tmp >= 0 ? tmp : 0;;
                cur = cur2 - 1;
            }
        }
    } else {
        left = pivot[1];
    }
};

function getDifference(arr, start, end, source1, source2) {
    var left, right;

    left = findInterval(source1, arr, start, end);
    if (source2) {
        right = findInterval(source2, arr, left > 0 ? left : start, end) + 1;
    } else {
        right = left + 1;
    }

    return [arr.length - 1 - left - right, left, right];
}

function findInterval(target, arr, start, end) {
    if (target < arr[start]) {
        return start - 1;
    }

    if (target > arr[end]) {
        return end;
    }

    var left = start;
    var right = end;
    var mid;

    while (left + 1 !== right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            right = mid;
        } else {
            left = mid;
        }
    }

    return left;
}

var r = findMedianSortedArrays([5,15,22], [2,3,4,10,18,25]);
console.log(r);

};

