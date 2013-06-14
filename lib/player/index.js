var Position = require('position'),
    Velocity = require('movement').Component,
    Spritesheet = require('spritesheet'),
    Nonlinear = require('animation').Nonlinear,
    Animation = require('animation-system').Component,
    Drawable = require('drawable-system').Component;

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
    
    this.entity = this.entities.get('player');
    this.entity.add(Velocity);
    this.entity.add(new Animation(animation));
    this.entity.add(new Drawable(animation, 1));
  }

};

module.exports = PlayerSystem;
