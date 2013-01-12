var love = require('love');

module.exports = love.ecs.system({

  initialize: function() {
    this.entities = this.find('position', 'velocity');
  },

  update: function(dt) {
    this.entities.each(function(entity) {
      var v = entity.velocity,
          p = entity.position;

      v.step.vupdate(v).multiply(dt);
      p.vadd(v.step);
    });
  }

});
