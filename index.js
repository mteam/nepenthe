var Container = require('stages').Container,
    Menu = require('menu'),
    Cards = require('cards');

function Game() {
  this.container = null;
}

module.exports = Game;

Game.prototype.init = function(element) {
  this.container = new Container(element);
};

Game.prototype.start = function() {
  console.log('game started');

  var menu = new Menu,
      cards = new Cards;

  var container = this.container;

  menu.on('cards', function() {
    container.use(cards);
  });

  container.use(menu);
};
