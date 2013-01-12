var love = require('love');

module.exports = love.ecs.system({

  initialize: function() {
    this.entities = this.find('animation', 'position');
  },

  draw: function() {
    this.entities.each(function(entity) {
      var pos = entity.position,
          anim = entity.animation;

      love.graphics.draw(anim, pos.x, pos.y);
    });
  }

});
