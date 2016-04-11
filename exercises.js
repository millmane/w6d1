function sum() {
  var args = Array.prototype.slice.call(arguments);
  var result = 0;
  for (var i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}

Function.prototype.myBind = function(context) {
  var args = Array.prototype.slice.call(arguments, 1);
  var self = this;
  var result = function () {
    var args2 = Array.prototype.slice.call(arguments);
    return self.apply(context, args.concat(args2));
  };
  return result;
};

function curriedSum (numArgs) {
  var numbers = [];

  function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      return numbers.reduce(function(a, b) {
        return a + b;
      });
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

function summer(num1, num2){
  return num1 + num2;
}

Function.prototype.curry = function (numArgs) {
  var args = [];
  var self = this;
  var _curry = function(el) {
    args.push(el);

    if (args.length === numArgs) {
      console.log(this);
      // return self.apply(this,args);
      return this.apply(this, args);
    } else {
      return _curry;
    }
  }.myBind(this);

  return _curry;
};

Function.prototype.inherits = function (SuperClass) {
  function Surrogate() {}
  var self = this;

  Surrogate.prototype = SuperClass.prototype;

  this.prototype = new Surrogate();
  // Surrogate.prototype.constructor() === new Surrogate();
  this.prototype.constructor = this;
  // this.prototype.constructor = function(){
  //   var args = Array.prototype.slice.call(arguments);
  //   SuperClass.apply(self, args);
  // };


};


function Animal (name) {
  this.name = name;
}

Animal.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

function Dog () {}

// The surrogate will be used to construct `Dog.prototype`.

Dog.prototype.bark = function () {
  console.log("Bark!");
};


function Cat(name) {
  this.name = name;
}

Cat.prototype.says = function (sound, person) {
  console.log(this.name + " says " + sound + " to " + person + "!");
  return true;
};

var markov = new Cat("Markov");
var breakfast = new Cat("Breakfast");
