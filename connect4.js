var root = [];
var count = [];
var hash = {};
var curGroup = 0;

function win(x, y) {
    c = getConnected(x, y);
    if (c.length === 0) {
        hash[x + '-' + y] = curGroup;
        root[curGroup] = curGroup;
        count[curGroup] = 1;
        curGroup++;
    } else if (c.length === 1) {
        hash[x + '-' + y] = hash[c[0][0] + '-' + c[0][1]];
        count[root[hash[x + '-' + y]]]++;
        if (count[root[hash[x + '-' + y]]] === 4) {
            console.log('you win!');
            return;
        }
    } else {
        hash[x + '-' + y] = hash[c[0][0] + '-' + c[0][1]];
        newRoot = hash[c[0][0] + '-' + c[0][1]];
        
        for (var i = 1; i <c.length; i++) {
            if (root[hash[c[i][0] + '-' + c[i][1]]] === hash[c[i][0] + '-' + c[i][1]]) {
                count[newRoot] += count[root[hash[c[i][0] + '-' + c[i][1]]]];
            }
        }
        count[newRoot]++;
        if (count[newRoot] === 4) {
            console.log('you win!');
            return;
        }

        for (var i = 1; i < c.length; i++) {
            root[hash[c[i][0] + '-' + c[i][1]]] = newRoot;
        }
    }
}

function getConnected(x, y) {
    var result = [];
    if (hash[(x - 1) + '-' + y] !== undefined) {
        result.push([x - 1, y]);
    }
    if (hash[(x + 1) + '-' + y] !== undefined) {
        result.push([x + 1, y]);
    }
    if (hash[x + '-' + (y - 1)] !== undefined) {
        result.push([x, y - 1]);
    }
    if (hash[x + '-' + (y + 1)] !== undefined) {
        result.push([x, y + 1]);
    }
    if (hash[(x - 1) + '-' + (y - 1)] !== undefined) {
        result.push([x - 1, y - 1]);
    }
    if (hash[(x - 1) + '-' + (y + 1)] !== undefined) {
        result.push([x - 1, y + 1]);
    }
    if (hash[(x + 1) + '-' + (y - 1)] !== undefined) {
        result.push([x + 1, y - 1]);
    }
    if (hash[(x + 1) + '-' + (y + 1)] !== undefined) {
        result.push([x + 1, y + 1]);
    }
    return result;
}

win(0, 0);
win(2, 2);
win(1, 1);
win(2, 3);
