function VM(option) {
    var keys = Object.keys(option.data);
    keys.forEach(function(key) {
        proxy(this, key, option.data);
    });
    var mKeys = Object.keys(option.methods);
    mKeys.forEach(function(key) {
        proxy(this, key, option.methods);
    });
    observe(option.data);
    compile(option.el, option.data, this);
}

function proxy(target, key, source) {
    Object.defineProperty(target, key, {
        get: function(){
            return source[key];
        },
        set: function(newValue){
            source[key] = newValue;
        },
        enumerable : true,
        configurable : false
    })
}
