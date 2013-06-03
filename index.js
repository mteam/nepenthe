var Container = require('stages').Container,
    AssetsLoader = require('assets'),
    LoaderStage = require('loader-stage'),
    MenuStage = require('menu-stage'),
    LevelStage = require('level-stage'),
    CardsStage = require('cards-stage');

function Game(element) {
  this.container = new Container(element);
  this.assets = new AssetsLoader;

  this.stages = {
    loader: new LoaderStage,
    menu: new MenuStage,
    game: new LevelStage,
    cards: new CardsStage
  };
}

Game.prototype = {

  start: function() {
    var stages = this.stages;
    var self = this;

    stages.menu.on('start', function() {
      self.switch(stages.game);
    });

    stages.menu.on('cards', function() {
      self.switch(stages.cards);
    });

    this.switch(stages.menu);
  },

  switch: function(stage) {
    var stages = this.stages;
    var container = this.container;
    var assets = this.assets;

    stages.loader.reset();
    container.use(stages.loader);

    stage.load(assets);
    var batch = assets.load();

    batch.on('progress', function(e) {
      stages.loader.update(e.percent);
    });

    batch.end(function() {
      assets.reset();
      container.use(stage);

      if (stage.enter) stage.enter();
    });
  }

};

module.exports = Game;
