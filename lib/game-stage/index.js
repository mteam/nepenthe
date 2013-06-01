var Stage = require('stages').Stage,
    Canvas = require('canvas'),
    Renderer = require('renderer'),
    Timer = require('timer'),
    ecs = require('ecs'),
    raf = require('raf'),
    bind = require('bind'),
    markup = require('./markup');

function Game() {
  Stage.call(this, markup);

  this.update = bind(this, this.update);
  this.draw = bind(this, this.draw);

  // canvas
  var el = this.element.querySelector('canvas'),
      canvas = Canvas.element(el);

  this.screen = new Renderer(canvas);

  // timer
  this.timer = new Timer(this.update);

  // entities
  this.entities = new ecs.EntityContainer;

  // systems
  this.systems = new ecs.SystemContainer(this.entities);

  this.loadSystems = this.systems.iterator('load');
  this.updateSystems = this.systems.iterator('update');
  this.drawSystems = this.systems.iterator('draw');
}

Game.prototype = Object.create(Stage.prototype);

Game.prototype.load = function(assets) {
  this.loadSystems(assets);
};

Game.prototype.enter = function() {
  this.timer.start();
  raf(this.draw);
};

Game.prototype.update = function(dt) {
  this.updateSystems(dt);
};

Game.prototype.draw = function() {
  this.screen.clear();
  this.drawSystems(this.screen);
  raf(this.draw);
};

module.exports = Game;
