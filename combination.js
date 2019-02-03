var matrix = [['a', 'b'],['c', 'd'], ['e', 'f']];

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

var res = cmb(matrix);
console.log(res);