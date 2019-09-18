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
        if (tmp[i]) {
            tmp[i].left = tmp[l];
            if (r <= max) {
                tmp[i].right = tmp[r];
            }
        }
        i++;
        l = 2 * i + 1;
        r = l + 1;
    }
    return tmp[0];
}

var tree = createBinary([10,5,15,null,null,6,20]);
