// dynamically import algorithm
// var js = document.createElement('script');
// js.src = 'minheap.js';
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


function change(coins, amount) {
    var detail = [];
    var dp = [];
    var tmp;

    for (var i = 1; i <= amount; i++) {
        for (var j = 0, len = coins.length; j < len; j++) {
            if (i === coins[j]) {
                dp[i] = 1;
                detail[i] = [coins[j]];
            } else if (i > coins[j]) {
                tmp = i - coins[j];
                if (dp[tmp] !== undefined && dp[tmp] !== -1) {
                    dp[i] = dp[i] === undefined ? dp[tmp] + 1 : Math.min(dp[i], dp[tmp] + 1);
                    detail[i] = detail[i] === undefined ? detail[tmp].concat([coins[j]]) : dp[i] < dp[tmp] + 1 ? detail[i] : detail[tmp].concat([coins[j]]);
                }
            }
        }
        if (dp[i] === undefined) {
            dp[i] = - 1;
            detail[i] = [];
        }
    }

    return [dp[amount], detail[amount]];
}

var r = change([3,7,13], 53);
console.log(r);
    
};