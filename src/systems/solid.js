var love = require('love');

module.exports = love.ecs.system({

  update: function() {
    var cs = this.system('collisions').all();

    var i, c;
    for (i = 0; i < cs.length; i++) {
      c = cs[i];

      if (c.entity.has('solid') && c.other.has('solid')) {
        c.entity.positon.vadd(c.resolve());
      }
    }
  }

});
