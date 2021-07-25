// Polyfill of Array.bind() Method Start ..................................
var obj = {
    name: "roshan",
    city: "bangalore"
}

var func = function (param1, param2, param3) {
    console.log(this.name + " " + this.city + " " + param1, param2, param3);
}


//Normal Bind function
var bindedFunc = func.bind(obj, "IBM", "Bihar");
bindedFunc("India")

// Polyfill of bind function
Function.prototype.myBind = function (...param) {
    var func = this;
    var arg1 = param.slice(1);
    return function (...arg2) {
        func.apply(param[0], [...arg1, ...arg2])
    }
}
var myBindedFunc = func.myBind(obj, "IBM", "Bihar");
myBindedFunc("India")

// Polyfill of Array Bind Method End ........................................


