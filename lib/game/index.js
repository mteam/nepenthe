var Stage = require('stages').Stage,
    Canvas = require('canvas'),
    markup = require('./markup');

function Game() {
  Stage.call(this, markup);

  var el = this.element.querySelector('canvas');
  this.canvas = new Canvas(el);
}

Game.prototype = Object.create(Stage.prototype);

Game.prototype.load = function() {

};

module.exports = Game;
