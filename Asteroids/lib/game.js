var Asteroid = require('./asteroid.js');

function Game() {
  this.asteroids = Game.addAsteroids;

}

Game.addAsteroids = function() {
  var asteroids = [];
  for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
    asteroids.push(new Asteroid(Game.randomPosition() ) );
  }
  return asteroids;
};

Game.randomPosition = function() {
  var x = Math.random() * Game.DIM_X;
  var y = Math.random() * Game.DIM_Y;
  return [x,y];
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

  this.asteroids.forEach(function (asteroid) {
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function () {

  this.asteroids.forEach(function (asteroid) {
    asteroid.move();
  });

  //probably add ship in here
};

Game.DIM_X = 800;
Game.DIM_Y = 800;
Game.NUM_ASTEROIDS = 10;
