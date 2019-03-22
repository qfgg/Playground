function VM(obj) {
    var keys = Object.keys(obj.data);
    var context = this;
    keys.forEach(function(key) {
        proxy(context, key, obj.data);
    });
    var mKeys = Object.keys(obj.methods);
    mKeys.forEach(function(key) {
        proxy(context, key, obj.methods);
    });
    observe(obj.data);
    compile(obj.el, obj.data, this);
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
