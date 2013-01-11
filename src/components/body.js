var love = require('love');

module.exports = love.ecs.component({

  name: 'body',

  constructor: function(w, h) {
    this.rect = love.rect(0, 0, w, h);
  }

});
