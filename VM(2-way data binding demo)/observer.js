function Dep(){
    this.subs = [];
}
Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub);
    },
    notify: function() {
        this.subs.forEach(function (sub) {
            sub.update();
        })
    }
}
function observe(data) {
    if (!data || typeof data !== 'object') {
        return;
    }
    var keys = Object.keys(data);
    keys.forEach(function(key) {
        defineReactive(data, key, data[key]);
    });
}
function defineReactive(data, key, val) {
    var dep = new Dep();
    Object.defineProperty(data, key, {
        get: function(){
            if (Dep.target) {
                dep.addSub(Dep.target);
                Dep.target = null;
            }
            return val;
        },
        set: function(newValue){
            if (newValue !== data[key]) {
                val = newValue;
                dep.notify();
            }
        },
        enumerable : true,
        configurable : false
    });
}
