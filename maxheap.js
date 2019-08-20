function insertHeap(heap, n) {
    heap.push(n);

    goUp(heap, heap.length - 1);
}

function goUp(heap, i) {
    var parent = Math.floor((i - 1) / 2);

    while (parent >= 0) {
        if (heap[parent] < heap[i]) {
            var tmp = heap[parent];
            heap[parent] = heap[i];
            heap[i] = tmp;
        }
        i = parent;
        parent = Math.floor((i - 1) / 2);
    }
}

// function insertHeap(heap, n) {
//     if (Object.prototype.toString.call(n) === '[object Array]') {
//         for(var i = 0, len = n.length; i < len; i++) {
//             this.insertOne(heap, n[i]);
//         }
//     } else {
//         this.insertOne(heap, n);
//     }
// }

function popHeap(heap) {
    var result = heap[0];
    var len = heap.length;
    heap[0] = heap[len - 1];
    heap.pop();

    goDown(heap, 0, len - 1);

    return result;
}
function goDown(heap, i, len) {
    var swap, tmp;
    var lchild = i * 2 + 1;
    var rchild = lchild + 1;
    
    while (lchild < len) {
        if (heap[i] >= heap[lchild] && (rchild >= len || heap[i] >= heap[rchild])) {
            break;
        }
        
        if (rchild >= len) {
            swap = lchild;
        } else {
            if (heap[i] < heap[lchild] && heap[i] < heap[rchild]) {
                swap = heap[lchild] > heap[rchild] ? lchild : rchild;
            } else if (heap[i] >= heap[lchild]) {
                swap = rchild;
            } else {
                swap = lchild;
            }
        }
        
        tmp = heap[swap];
        heap[swap] = heap[i];
        heap[i] = tmp;
        i = swap;
        lchild = i * 2 + 1;
        rchild = lchild + 1;
    }
}

function createHeap(heap) {
    var len = heap.length;
    var i = Math.floor((len - 2) / 2);
    var lchild, rchild;

    while (i >= 0) {
        goDown(heap, i, len);
        i--;
    }
}
function heapSort(heap) {
    var heapSize = heap.length;
    var i = heapSize - 1;
    
    while (i > 0) {
        var tmp = heap[i];
        heap[i] = heap[0];
        heap[0] = tmp;

        heapSize--;
        goDown(heap, 0, heapSize);
        i--;
    }
}

var heap = [79,66,43,83,30,87,38,55,91,72,49,9];
createHeap(heap);
heapSort(heap);
console.log(heap);