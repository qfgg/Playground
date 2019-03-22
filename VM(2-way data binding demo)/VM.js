function VM(option) {
    var keys = Object.keys(option.data);
    var context = this;
    keys.forEach(function(key) {
        proxy(context, key, option.data);
    });
    var mKeys = Object.keys(option.methods);
    mKeys.forEach(function(key) {
        proxy(context, key, option.methods);
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
