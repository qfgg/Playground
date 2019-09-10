// dynamically import algorithm
// var js = document.createElement('script');
// js.src = 'maxheap.js';
// document.body.appendChild(js);
// var js1 = document.createElement('script');
// js1.src = 'dijkstra.js';
// document.body.appendChild(js1);

// after script has been loaded, run test code
window.onload = function() {
// function insertHeap(heap, n, fn = function(a, b) { return a - b; }) {
//     heap.push(n);

//     goUp(heap, heap.length - 1, fn);
// }

// function goUp(heap, i, fn) {
//     var parent = Math.floor((i - 1) / 2);

//     while (parent >= 0) {
//         if (fn(heap[parent], heap[i]) > 0) {
//             var tmp = heap[parent];
//             heap[parent] = heap[i];
//             heap[i] = tmp;
//         }
//         i = parent;
//         parent = Math.floor((i - 1) / 2);
//     }
// }

// function goDown(nums, i, max, fn) {
//     var tmp, swapIdx;
//     var leftChild = 2 * i + 1;
//     var rightChild = 2 * i + 2;

//     while (leftChild <= max) {
//         if (rightChild > max) {
//             if (fn(nums[leftChild], nums[i]) < 0) {
//                 swapIdx = leftChild;
//             }
//         } else {
//             if (fn(nums[leftChild], nums[i]) < 0 && fn(nums[rightChild], nums[i]) < 0) {
//                 swapIdx = fn(nums[leftChild], nums[rightChild]) < 0 ?
//                     leftChild : rightChild;
//             } else if (fn(nums[leftChild], nums[i]) < 0) {
//                 swapIdx = leftChild;
//             } else if(fn(nums[rightChild], nums[i]) < 0) {
//                 swapIdx = rightChild;
//             }
//         }
//         if (swapIdx !== undefined) {
//             tmp = nums[swapIdx];
//             nums[swapIdx] = nums[i];
//             nums[i] = tmp;
//             i = swapIdx;
//             leftChild = 2 * i + 1;
//             rightChild = 2 * i + 2;
//             swapIdx = undefined;
//         } else  {
//             break;
//         }
//     }
// }

// function popHeap(nums, fn = function(a, b) { return a - b; }) {
//     if (nums.length === 1) {
//         return nums.pop();
//     }

//     var r = nums[0];
//     nums[0] = nums.pop();
//     goDown(nums, 0, nums.length - 1, fn);

//     return r;
// }

// function cmp (a, b) {
//     return a.localeCompare(b);
// }

var findItinerary = function(tickets) {
    var res = [];
    var map = {};

    for (var i = 0, len = tickets.length; i < len; i++) {
        if (map[tickets[i][0]] === undefined) {
            map[tickets[i][0]] = [tickets[i][1]];
        } else {
            insertHeap(map[tickets[i][0]], tickets[i][1], cmp);
        }
    }

    search('JFK', 0, len, res, map);

    return res; 
};

function search(cur, idx, max, oneway, map) {
    if (idx === max) {
        oneway.push(cur);
        return true;
    }

    var next;
    for(var i = 0, len = (map[cur] || []).length; i < len; i++) {
        oneway.push(cur);
        next = popHeap(map[cur], cmp);
        if (search(next, idx + 1, max, oneway, map)) {
            return true;
        }
        oneway.pop(cur);
        insertHeap(map[cur], next, cmp);
    }
}

// var tickets = [["AXA","EZE"],["EZE","AUA"],["ADL","JFK"],["ADL","TIA"],["AUA","AXA"],["EZE","TIA"],["EZE","TIA"],["AXA","EZE"],["EZE","ADL"],["ANU","EZE"],["TIA","EZE"],["JFK","ADL"],["AUA","JFK"],["JFK","EZE"],["EZE","ANU"],["ADL","AUA"],["ANU","AXA"],["AXA","ADL"],["AUA","JFK"],["EZE","ADL"],["ANU","TIA"],["AUA","JFK"],["TIA","JFK"],["EZE","AUA"],["AXA","EZE"],["AUA","ANU"],["ADL","AXA"],["EZE","ADL"],["AUA","ANU"],["AXA","EZE"],["TIA","AUA"],["AXA","EZE"],["AUA","SYD"],["ADL","JFK"],["EZE","AUA"],["ADL","ANU"],["AUA","TIA"],["ADL","EZE"],["TIA","JFK"],["AXA","ANU"],["JFK","AXA"],["JFK","ADL"],["ADL","EZE"],["AXA","TIA"],["JFK","AUA"],["ADL","EZE"],["JFK","ADL"],["ADL","AXA"],["TIA","AUA"],["AXA","JFK"],["ADL","AUA"],["TIA","JFK"],["JFK","ADL"],["JFK","ADL"],["ANU","AXA"],["TIA","AXA"],["EZE","JFK"],["EZE","AXA"],["ADL","TIA"],["JFK","AUA"],["TIA","EZE"],["EZE","ADL"],["JFK","ANU"],["TIA","AUA"],["EZE","ADL"],["ADL","JFK"],["ANU","AXA"],["AUA","AXA"],["ANU","EZE"],["ADL","AXA"],["ANU","AXA"],["TIA","ADL"],["JFK","ADL"],["JFK","TIA"],["AUA","ADL"],["AUA","TIA"],["TIA","JFK"],["EZE","JFK"],["AUA","ADL"],["ADL","AUA"],["EZE","ANU"],["ADL","ANU"],["AUA","AXA"],["AXA","TIA"],["AXA","TIA"],["ADL","AXA"],["EZE","AXA"],["AXA","JFK"],["JFK","AUA"],["ANU","ADL"],["AXA","TIA"],["ANU","AUA"],["JFK","EZE"],["AXA","ADL"],["TIA","EZE"],["JFK","AXA"],["AXA","ADL"],["EZE","AUA"],["AXA","ANU"],["ADL","EZE"],["AUA","EZE"]];
var tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];
var r = findItinerary(tickets);
console.log(r);

// var ladderLength = function(beginWord, endWord, wordList) {
//     var startIdx = wordList.indexOf(beginWord);

//     if (startIdx === -1) {
//         wordList.unshift(beginWord);
//     } else if (startIdx !== 0) {
//         var tmp = wordList[startIdx];
//         wordList[startIdx] = wordList[0];
//         wordList[0] = tmp;
//     }

//     var endIdx = wordList.indexOf(endWord);
//     if (endIdx === -1) {
//         return 0;
//     }
    
//     var dp = [];
//     var len = wordList.length;
//     var i, j;

//     for (i = 0; i < len; i++) {
//         for (j = i + 1; j < len; j++) {
//             if (isConnect(wordList[i], wordList[j])) {
//                 if (i === 0 && j === endIdx) {
//                     return 2;
//                 }
//                 if (dp[i] === undefined) {
//                     dp[i] = [];
//                 }
//                 dp[i][j] = 1;
//             }
//         }
//     }

//     // different from ladder length, which is the word's count,
//     // curDistance is the edge count
//     var curDistance = 1;
//     var isEnd = true;

//     while (true) {
//         for (i = 1; i < len; i++) {
//             if (dp[0] && dp[0][i] === curDistance) {
//                 isEnd = false;
//                 for (j = i; j < len; j++) {
//                     if (dp[i] && dp[i][j] === 1) {
//                         if (j === endIdx) {
//                             return curDistance + 1 + 1;
//                         }
//                         if (dp[0] && dp[0][j] === undefined) {
//                             dp[0][j] = curDistance + 1;
//                         }
//                     }
//                 }
//                 for (j = 1; j < len; j++) {
//                     if (dp[j] && dp[j][i] === 1) {
//                         if (j === endIdx) {
//                             return curDistance + 1 + 1;
//                         }
//                         if (dp[0] && dp[0][j] === undefined) {
//                             dp[0][j] = curDistance + 1;
//                         }
//                     }
//                 }
//             }
//         }
//         if (isEnd) {
//             return 0;
//         }
//         isEnd = true;
//         curDistance++;
//     }
// };

// function isConnect(wd1, wd2) {
//     var count = 0;
//     for (var i = 0, len = wd1.length; i < len; i++) {
//         if (wd1[i] !== wd2[i]) {
//             if (count === 1) {
//                 return false;
//             }
//             count++;
//         }
//     }
//     return count === 1;
// }

// var beginWord = "qa";
// var endWord = "sq";
// var wordList = ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"];
// var r = ladderLength(beginWord, endWord, wordList);
// console.log(r);

// var maximalSquare = function(matrix) {
// };

// var A = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];

// var r = maximalSquare(A);
// console.log(r);

};