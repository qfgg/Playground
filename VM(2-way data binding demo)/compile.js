function compile(el, data, context) {
    var root = el;
    if (typeof el === 'string') {
        root = document.getElementById(el.replace(/^#/, ''));
    }
    if (root.children.length > 0) {
        for (var i = 0, len = root.children.length; i < len; i++) {
            compile(root.children[i], data, context);
        }
    } else {
        var key;
        var clickFn = root.getAttribute('v-on:click');
        if (root.tagName === 'INPUT') {
            key = root.getAttribute('v-model');
            Dep.target = new Watcher(data, key, root);
            // read data[key] will trigger addSup(Dep.target)(observer.js)
            root.value = data[key];
            root.addEventListener('input', function(evt) {
                data[key] = evt.target.value;
            });
        } else if (/{{\w+}}/.test(root.innerText)) {
            var m = root.innerText.match(/{{(\w+)}}/);
            key = m[1];
            Dep.target = new Watcher(data, key, root);
            root.innerText = data[key];
        } else if (clickFn) {
            root.addEventListener('click', context[clickFn].bind(context));
        }
    }
}
