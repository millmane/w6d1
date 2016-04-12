
function Util () {}

Util.inherits = function(ChildClass, ParentClass){
  function Surrogate() {}
  Surrogate.prototype = ParentClass.prototype;
  ChildClass.prototype = new Surrogate();
  ChildClass.prototype.constructor = ChildClass;
};
//
Util.randomVec = function() {
  // vel = sqrt((x1 - x2) ** 2 + (y1-y2) ** 2)
  var x = Math.floor(Math.random() * (20) - 10);
  var y = Math.floor(Math.random() * (20) - 10);
  return [x,y];
};



module.exports = Util;
