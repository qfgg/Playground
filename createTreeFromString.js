function Node(val) {
    this.value = val;
    this.children = null;
}

function getTree(str, start, end) {
    let i = start;
    while (str[i] !== '(' && i < end) {
        i++;
    }
    const parent = new Node(str.slice(start, i));
    if (str[i] === '(') {
        const children = getChildren(str, i + 1, end - 1);
        parent.children = [];
        for (let j = 0; j < children.length; j++) {
            parent.children.push(getTree(children[j], 0, children[j].length));
        }
    }
    return parent;
}

function getChildren(str, start, end) {
    const children = [];
    let tmp = '';
    let leftCount = 0;
    for (let i = start; i < end; i++) {
        if (str[i] === '(') {
            tmp += str[i];
            leftCount++;
        } else if (str[i] === ')') {
            tmp += str[i];
            leftCount--;
        } else if ((leftCount === 0 && str[i] !== ',') || leftCount > 0) {
            tmp += str[i];
        } else if (leftCount === 0 && str[i] === ',') {
            children.push(tmp);
            tmp = '';
        }
    }
    if (tmp) {
        children.push(tmp);
    }
    return children;
}

function fn(str) {
    return getTree(str, 0, str.length);
}

const input = 'A(B,C(C1,C2(C21,C22),C3),D(D1,D2))';
console.log(fn(input));