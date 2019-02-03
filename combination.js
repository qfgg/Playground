var matrix = [['a', 'b'], ['c', 'd', 'e'], ['f', 'g', 'h', 'i']];
// "fca", "fcb", "fda", "fdb", "fea", "feb",
// "gca", "gcb", "gda", "gdb", "gea", "geb",
// "hca", "hcb", "hda", "hdb", "hea", "heb",
// "ica", "icb", "ida", "idb", "iea", "ieb"
// 递归
function cmb(mat) {
    if (!mat || Object.prototype.toString.call(mat) !== '[object Array]') {
        return [];
    }
    if (mat.length === 1) {
        return mat[0];
    } else {
        var list = [];
        var rest = cmb(mat.slice(1));

        for(var i = 0, len = mat[0].length; i < len; i++) {
            for(var j = 0, l = rest.length; j < l; j++) {
                list.push(mat[0][i] + rest[j]);
            }
        }
        return list;
    }
}
// 非递归
function cmb2(mat) {
    if (!mat || Object.prototype.toString.call(mat) !== '[object Array]') {
        return [];
    }
    var list = mat.slice();
    var total = mat.length;
    while(total > 1){
        var tmp = [];
        for(var i = 0, l1 = list[total - 1].length; i < l1; i++) {
            for (var j = 0, l2 = list[total - 2].length; j < l2; j++) {
                tmp.push(list[total - 1][i] + list[total - 2][j]);
            }
        }
        list.splice(total - 2, 2, tmp);
        total--;
    }
    return list[0];
}
var res = cmb2(matrix);
console.log(res);