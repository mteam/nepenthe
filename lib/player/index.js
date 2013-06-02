var Position = require('position'),
    Velocity = require('movement').Component,
    Image = require('image'),
    anim = require('animation'),
    Animation = require('animation-system').Component;

function PlayerSystem(entities)
{
  this.name = 'player';
  this.entities = entities;
}

PlayerSystem.prototype = {

  load: function(assets) {
    this.asset = assets.get('build/player/player.png');
  },

  initialize: function() {
    var sprite = new Image(this.asset);
    var reel = new anim.Reel(sprite, 80, 160);
    var animation = new anim.Nonlinear(reel, [[1, 0.7], [2, 0.2], [1, 3], [2, 0.2]]);
    
    this.entities.add(
      'player',
      new Position(0, 0),
      Velocity,
      new Animation(animation)
    );
  }

};

module.exports = PlayerSystem;
