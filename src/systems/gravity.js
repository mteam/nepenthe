var love = require('love');

module.exports = love.ecs.system({

  initialize: function() {
    this.entities = this.entities('gravity', 'velocity');
  },

  update: function(dt) {
    this.entities.each(function(entity) {
      var advance = entity.gravity.acceleration * dt;
      entity.velocity.nadd(0, advance);
    });
  }

});
