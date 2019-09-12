// dynamically import algorithm
// var js = document.createElement('script');
// js.src = 'maxheap.js';
// document.body.appendChild(js);
// var js1 = document.createElement('script');
// js1.src = 'dijkstra.js';
// document.body.appendChild(js1);

// after script has been loaded, run test code
window.onload = function() {

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
//     var imax = matrix.length;
//     if (imax === 0) {
//         return 0;
//     }

//     var dp = {};
//     var next;
//     var jmax = matrix[0].length;
//     var i, j;
//     var flag = false;

//     for (i = 0; i < imax; i++) {
//         for (j = 0; j < jmax; j++) {
//             if (matrix[i][j] === '1') {
//                 dp[[i, j]] = true;
//                 flag = true;
//             }
//         }
//     }

//     if (flag === false) {
//         return 0;
//     }

//     var count = 1;
//     var key, tmp;

//     while (true) {
//         next = {};
//         flag = false
//         for (key in dp) {
//             tmp = key.split(',');
//             i = Number(tmp[0]);
//             j = Number(tmp[1]);
//             if (dp[[i + 1, j]] && dp[[i, j + 1]] && dp[[i + 1, j + 1]]) {
//                 next[[i, j]] = true;
//                 flag = true;
//             }
//         }
//         if (!flag) {
//             return count * count;
//         }
//         dp = next;
//         count++;
//     }
// };

// var A = [["0"]];

// var r = maximalSquare(A);
// console.log(r);

};