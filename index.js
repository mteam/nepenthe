var Container = require('stages').Container,
    Assets = require('assets'),
    Loader = require('loader'),
    Menu = require('menu'),
    Game = require('game'),
    Cards = require('cards');

function Nepenthe(element) {
  this.container = new Container(element);
  this.assets = new Assets;

  this.stages = {
    loader: new Loader,
    menu: new Menu,
    game: new Game,
    cards: new Cards
  };
}

Nepenthe.prototype.start = function() {
  var stages = this.stages,
      self = this;

  stages.menu.on('start', function() {
    self.open(stages.game);
  });

  stages.menu.on('cards', function() {
    self.open(stages.cards);
  });

  this.open(stages.menu);
};

Nepenthe.prototype.open = function(stage) {
  var container = this.container,
      loader = this.stages.loader,
      assets = this.assets;

  loader.update(0);
  container.use(loader);
  
  stage.load(assets);

  var batch = assets.load();

  batch.on('progress', function(e) {
    loader.update(e.percent);
  });

  batch.end(function() {
    assets.reset();
    container.use(stage);
  });
};

module.exports = Nepenthe;
