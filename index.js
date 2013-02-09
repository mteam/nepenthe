var Container = require('stages').Container,
    Menu = require('menu');

function Game() {
  this.container = null;
}

module.exports = Game;

Game.prototype.init = function(element) {
  this.container = new Container(element);
};

Game.prototype.start = function() {
  console.log('game started');

  this.container.use(new Menu);
};
