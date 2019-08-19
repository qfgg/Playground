function insertHeap(heap, n, fn) {
    heap.push(n);

    var i = heap.length - 1;
    var parent = Math.floor((i - 1) / 2);

    while (parent >= 0) {
        if ((fn && fn(heap[parent], heap[i]) > 0) || (!fn && heap[parent] > heap[i])) {
            var tmp = heap[parent];
            heap[parent] = heap[i];
            heap[i] = tmp;
        }
        i = parent;
        parent = Math.floor((i - 1) / 2);
    }
}

// function insertHeap(heap, n, fn) {
//     if (Object.prototype.toString.call(n) === '[object Array]') {
//         for(var i = 0, len = n.length; i < len; i++) {
//             this.insertOne(heap, n[i], fn);
//         }
//     } else {
//         this.insertOne(heap, n, fn);
//     }
// }

function popHeap(heap, fn) {
    var result = heap[0];
    var len = heap.length;
    heap[0] = heap[len - 1];
    heap.pop();

    goDown(heap, 0, len - 1, fn);

    return result;
}
function goDown(heap, i, len, fn) {
    var swap, tmp;
    var lchild = i * 2 + 1;
    var rchild = lchild + 1;
    
    while (lchild < len) {
        if (((fn && fn(heap[i], heap[lchild]) <= 0) || (!fn && heap[i] <= heap[lchild])) 
            && (rchild >= len || ((fn && fn(heap[i], heap[rchild]) <= 0) || (!fn && heap[i] <= heap[rchild])))) {
            break;
        }
        
        if (rchild >= len) {
            swap = lchild;
        } else {
            if (((fn && fn(heap[i], heap[lchild]) > 0) || (!fn && heap[i] > heap[lchild]))
                && ((fn && fn(heap[i], heap[rchild]) > 0) || (!fn && heap[i] > heap[rchild]))) {
                swap = (fn && fn(heap[lchild], heap[rchild]) < 0) || (!fn && heap[lchild] < heap[rchild]) ?
                    lchild : rchild;
            } else if (heap[i] <= heap[lchild]) {
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

function createHeap(heap, fn) {
    var len = heap.length;
    var i = Math.floor((len - 2) / 2);
    var lchild, rchild;

    while (i >= 0) {
        goDown(heap, i, len, fn);
        i--;
    }
}
function heapSort(heap, fn) {
    var heapSize = heap.length;
    var i = heapSize - 1;
    
    while (i > 0) {
        var tmp = heap[i];
        heap[i] = heap[0];
        heap[0] = tmp;

        heapSize--;
        goDown(heap, 0, heapSize, fn);
        i--;
    }
}