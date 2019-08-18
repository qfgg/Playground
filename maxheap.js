function insertOne(heap, n) {
    heap.push(n);

    var i = heap.length - 1;
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

function insertHeap(heap, n) {
    if (Object.prototype.toString.call(n) === '[object Array]') {
        for(var i = 0, len = n.length; i < len; i++) {
            this.insertOne(heap, n[i]);
        }
    } else {
        this.insertOne(n);
    }
}

function popHeap(heap) {
    var result = heap[0];
    var len = heap.length;
    heap[0] = heap[len - 1];
    heap.pop();

    goDown(heap, 0);

    return result;
}
function goDown(heap, i) {
    var len = heap.length;
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
        goDown(heap, i);
        i--;
    }
}
function heapSort(heap) {}

var heap = [79,66,43,83,30,87,38,55,91,72,49,9];
createHeap(heap);
console.log(heap);

var arr = [20, 15, 2, 14, 10, 1];
var h = [];
insertHeap(h, arr);
console.log(popHeap(h));
console.log(h);