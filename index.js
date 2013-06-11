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

    // show loader
    stages.loader.reset();
    container.use(stages.loader);

    // add assets
    stage.load(this.assets);
    var batch = this.assets.load();

    // display progess
    batch.on('progress', function(e) {
      stages.loader.update(e.percent);
    });

    // load assets
    batch.end(function() {
      container.use(stage);
      if (stage.enter) stage.enter();
    });
  }

};

module.exports = Game;
