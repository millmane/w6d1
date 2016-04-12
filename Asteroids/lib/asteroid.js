var Util = require('./utils.js');
var MovingObject = require('./movingObject.js');

function Asteroid (pos){

  MovingObject.call(this, {
    color: Asteroid.COLOR,
    radius: Asteroid.RADIUS,
    pos: this.pos,
    vel: Util.randomVec()
  });

  // this.vec = Util.randomVec(this.vel);
}

Util.inherits(Asteroid, MovingObject);

Asteroid.COLOR = "#00FF00";
Asteroid.RADIUS = 5;

module.exports = Asteroid;
