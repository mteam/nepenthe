var Stage = require('stages').Stage,
    Canvas = require('canvas'),
    Renderer = require('renderer'),
    Timer = require('timer'),
    ecs = require('ecs'),
    raf = require('raf'),
    bind = require('bind'),
    markup = require('./markup'),
    systems = require('./systems.js');

function LevelStage() {
  Stage.call(this, markup);

  this.update = bind(this, this.update);
  this.draw = bind(this, this.draw);

  var el = this.element.querySelector('canvas');

  this.canvas = Canvas.element(el);
  this.screen = new Renderer(this.canvas);
  this.timer = new Timer(this.update);
  this.entities = new ecs.EntityContainer;
  this.systems = new ecs.SystemContainer(this.entities);
  systems(this.systems);

  this.loadSystems = this.systems.iterator('load');
  this.initSystems = this.systems.iterator('initialize');
  this.updateSystems = this.systems.iterator('update');
  this.drawSystems = this.systems.iterator('draw');
}

LevelStage.prototype = Object.create(Stage.prototype);

LevelStage.prototype.load = function(assets) {
  this.loadSystems(assets);
};

LevelStage.prototype.enter = function() {
  this.canvas.fillParent();
  this.initSystems();
  this.timer.start();
  raf(this.draw);
};

LevelStage.prototype.update = function(dt) {
  this.updateSystems(dt);
};

LevelStage.prototype.draw = function() {
  this.screen.clear();
  this.drawSystems(this.screen);
  raf(this.draw);
};

module.exports = LevelStage;
