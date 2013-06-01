var Position = require('position'),
    Velocity = require('movement').Component;

function PlayerSystem(entities)
{
  this.name = 'player';
  this.entities = entities;
}

PlayerSystem.prototype = {

  initialize: function() {
    this.entities.add(
      'player',
      Position,
      Velocity
    );
  }

};

module.exports = PlayerSystem;
