var Vector = require('vector');

module.exports = PositionComponent;

function PositionComponent(x, y) {
  this.name = 'position';
  this.vector = new Vector(x, y);
}
