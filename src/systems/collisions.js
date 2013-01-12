var love = require('love');

module.exports = love.ecs.system({

  initialize: function() {
    love.events.extend(this);

    this.entities = this.find('position', 'body');
    this.hash = love.collisions.hash(50);
  },

  update: function(dt) {
    this.hash.reset();

    this.entities

      .each(function(entity) {
        var p = entity.position;
        entity.body.position(p.x, p.y);

        this.hash.insert(entity.body);
      }, this)

      .each(function(entity) {
        var collisions = hash.collisions(entity);

        for (var i = 0; i < collisions.length; i++) {
          this.trigger('collision', entity, collisions[i]);
        }
      }, this);
  }

});
