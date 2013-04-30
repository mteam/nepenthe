var Container = require('stages').Container,
    AssetsLoader = require('assets'),
    LoaderStage = require('loader-stage'),
    MenuStage = require('menu-stage'),
    GameStage = require('game-stage'),
    CardsStage = require('cards-stage');

function Nepenthe(element) {
  this.container = new Container(element);
  this.assets = new AssetsLoader;

  this.stages = {
    loader: new LoaderStage,
    menu: new MenuStage,
    game: new GameStage,
    cards: new CardsStage
  };
}

Nepenthe.prototype.start = function() {
  var stages = this.stages,
      this_ = this;

  stages.menu.on('start', function() {
    this_.open(stages.game);
  });

  stages.menu.on('cards', function() {
    this_.open(stages.cards);
  });

  this.open(stages.menu);
};

Nepenthe.prototype.open = function(stage) {
  this.stages.loader.reset();
  this.container.use(this.stages.loader);
  
  stage.load(this.assets);

  var batch = this.assets.load(),
      this_ = this;

  batch.on('progress', function(e) {
    this_.stages.loader.update(e.percent);
  });

  batch.end(function() {
    this_.assets.reset();
    this_.container.use(stage);
  });
};

module.exports = Nepenthe;
