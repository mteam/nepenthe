function Game() {
  this.container = null;
}

module.exports = Game;

Game.prototype.init = function(container) {
  this.container = container;
};

Game.prototype.start = function() {
  console.log('game started');
};
