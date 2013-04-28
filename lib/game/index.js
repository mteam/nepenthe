var Stage = require('stages').Stage,
    Canvas = require('canvas'),
    Renderer = require('renderer'),
    Timer = require('timer'),
    Container = require('component-model').Container,
    SystemContainer = require('ecs').Container,
    bind = require('bind'),
    markup = require('./markup');

function Game() {
  Stage.call(this, markup);

  // canvas
  var el = this.element.querySelector('canvas'),
      canvas = Canvas.element(el);

  this.screen = new Renderer(canvas);

  // timer
  this.timer = new Timer;
  this.timer.onTick = bind(this, this.tick);

  // entities
  this.entities = new Container;

  // systems
  this.systems = new SystemContainer(this.entities);

  this.load = this.systems.iterator('load');
  this.update = this.systems.iterator('update');
  this.draw = this.systems.iterator('draw');
}

Game.prototype = Object.create(Stage.prototype);

Game.prototype.tick = function(dt) {
  this.update(dt);
  
  this.screen.clear();
  this.draw(this.screen);
};

module.exports = Game;
