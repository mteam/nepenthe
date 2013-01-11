var love = require('love');

module.exports = love.ecs.component({

  name: 'walking',

  constructor: function() {
    this.direction = null;
  },

  start: function(direction) {
    this.direction = direction;
  },

  stop: function(direction) {
    if (this.direction == direction) {
      this.direction = null;
    }
  }

});