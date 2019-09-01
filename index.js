// dynamically import algorithm
// var js = document.createElement('script');
// js.src = 'maxheap.js';
// document.body.appendChild(js);
// var js1 = document.createElement('script');
// js1.src = 'dijkstra.js';
// document.body.appendChild(js1);

// after script has been loaded, run test code
window.onload = function() {
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// function makeList(arr) {
//     if (arr.length === 0) {
//         return null;
//     }
//     var head = new ListNode();
//     var cur = head;
//     for (var i = 0, len = arr.length; i < len; i++) {
//         cur.val = arr[i];
//         cur.next = i < len - 1 ? new ListNode() : null;
//         cur = cur.next;
//     }
//     return head;
// }

// function printList(l) {
//     var arr = [];
//     while (l !== null) {
//         arr.push(l.val);
//         l = l.next;
//     }
//     console.log(arr);
// }
/*
function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
function qsort(arr, s, e, fn) {
    if (s >= e) {
        return;
    }
    var i = s;
    var j = e;
    while(j > i) {
        while(j > i && ((fn && fn(arr[j], arr[s]) >=0) || (!fn && arr[j] >= arr[s]))) {
            j--;
        }
        while(j > i && ((fn && fn(arr[i], arr[s]) <=0) || (!fn && arr[i] <= arr[s]))) {
            i++
        }
        if (i !== j) {
            swap(arr, i, j);
        }
    }
    if (s !== j) {
        swap(arr, s, j);
    }
    qsort(arr, s, j - 1, fn);
    qsort(arr, j + 1, e, fn);
}
function quicksort(arr, fn) {
    qsort(arr, 0, arr.length - 1, fn);
}
*//*
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function createBinary(arr) {
    var tmp = arr.map(function(item){
        return item === null ? item : new TreeNode(item);
    });
    var max = arr.length - 1;
    var i = 0;
    var l = 2 * i + 1;
    var r = l + 1;

    while (l <= max) {
        tmp[i].left = tmp[l];
        if (r <= max) {
            tmp[i].right = tmp[r];
        }
        i++;
        l = 2 * i + 1;
        r = l + 1;
    }
    return tmp[0];
}

var tree = createBinary([3,9,20,1,2,15,7]);
*/


var r = combinationSum(ncandidates, target);
console.log(r);

};