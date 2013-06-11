var Position = require('position'),
    Velocity = require('movement').Component,
    Spritesheet = require('spritesheet'),
    Nonlinear = require('animation').Nonlinear,
    Animation = require('animation-system').Component;

function PlayerSystem(entities)
{
  this.name = 'player';
  this.entities = entities;
}

PlayerSystem.prototype = {

  load: function(assets) {
    this.asset = assets.image('build/player/player.png');
  },

  initialize: function() {
    var sheet = new Spritesheet(this.asset, 80, 160);
    var animation = new Nonlinear(sheet, [[1, 0.7], [2, 0.2], [1, 3], [2, 0.2]]);
    
    this.entities.add(
      'player',
      new Position(0, 0),
      Velocity,
      new Animation(animation)
    );
  }

};

module.exports = PlayerSystem;
