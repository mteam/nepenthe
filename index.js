var Container = require('stages').Container,
    Menu = require('menu'),
    Cards = require('cards');

function Nepenthe(element) {
  this.container = new Container(element);

  this.stages = {
    menu: new Menu,
    cards: new Cards
  };
}

Nepenthe.prototype.start = function() {
  var container = this.container,
      stages = this.stages;

  stages.menu.on('cards', function() {
    container.use(stages.cards);
  });

  container.use(stages.menu);
};

module.exports = Nepenthe;
