var love = require('love');

module.exports = love.ecs.component({

  name: 'gravity',

  constructor: function(a) {
    this.acceleration = a;
  }

});
