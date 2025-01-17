var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var MyEmitSubscribe = /** @class */ (function () {
    function MyEmitSubscribe() {
        this.eventCenter = {};
    }
    MyEmitSubscribe.prototype.subscribe = function (event, task) {
        if (typeof task !== 'function') {
            console.log('subscribe fail!');
            return;
        }
        if (this.eventCenter[event]) {
            this.eventCenter[event].push(task);
            return;
        }
        this.eventCenter[event] = [task];
    };
    MyEmitSubscribe.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var subscribes = this.eventCenter[event];
        if (!subscribes) {
            console.log('there is no one subscribe!');
            return;
        }
        subscribes.forEach(function (task) { return task.apply(void 0, args); });
    };
    MyEmitSubscribe.prototype.emitAll = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var eventStr in this.eventCenter) {
            if (Object.prototype.hasOwnProperty.call(this.eventCenter, eventStr)) {
                this.emit.apply(this, __spreadArray([eventStr], args, false));
            }
        }
    };
    return MyEmitSubscribe;
}());
var mysb = new MyEmitSubscribe();
mysb.subscribe('a', console.log);
mysb.subscribe('d', console.log);
mysb.subscribe('a', console.log);
mysb.subscribe('b', console.log);
mysb.subscribe('c', console.log);
mysb.emit('a', 'this is a');
mysb.emit('b', 'this is b');
mysb.emit('c', 'this is c');
mysb.emit('d', 'this is d');
mysb.emit('e', 'this is e');
mysb.emitAll('sssssssss');
