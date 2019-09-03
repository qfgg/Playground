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

var findItinerary = function(tickets) {
    var res = [];
    var ticketsMap = {};
    var visited = {};
    var maxIdx = tickets.length;

    for (var i = 0; i < maxIdx; i++) {
        if (ticketsMap[tickets[i][0]] === undefined) {
            ticketsMap[tickets[i][0]] = [tickets[i][1]];
        } else {
            ticketsMap[tickets[i][0]].push(tickets[i][1]);
        }
    }

    search(ticketsMap, 'JFK', 0, maxIdx, [], res, visited);

    return res[0];
};

function search(ticketsMap, cur, idx, maxIdx, oneway, res, visited) {
    if (idx === maxIdx) {
        var newway = oneway.concat([cur]);
        if (res.length === 0 || (res.length === 1 && newway.join('').localeCompare(res[0].join('')) < 0)) {
            res[0] = newway;
        }
    }
    if (ticketsMap[cur]) {
        for(var i = 0, len = ticketsMap[cur].length; i < len; i++) {
            if (!visited[cur + ticketsMap[cur][i]]) {
                visited[cur + ticketsMap[cur][i]] = true;
                oneway.push(cur);
                search(ticketsMap, ticketsMap[cur][i], idx + 1, maxIdx, oneway, res, visited);
                oneway.pop(cur);
                visited[cur + ticketsMap[cur][i]] = false;
            }
        }
    }
    
}

var tickets = [["JFK","DEF"],["DEF","JFK"],["DEF","GHI"],["GHI","DEF"]];
var r = findItinerary(tickets);
console.log(r);

};