var Game = require('./game.js');

function GameView (game, ctx) {
  this.game = game;
  this.ctx = ctx;
}

GameView.start = function () {
  setInterval(this.game.moveObjects(), 20);
  setInterval(this.game.draw(), 20);
};
