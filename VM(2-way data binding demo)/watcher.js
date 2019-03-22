function Watcher(data, key, node) {
    this.data = data;
    this.key = key;
    this.node = node;
}
Watcher.prototype.update = function() {
    if (this.node.tagName === 'INPUT') {
        this.node.value = this.data[this.key];
    } else {
        this.node.innerText = this.data[this.key];
    }
}
