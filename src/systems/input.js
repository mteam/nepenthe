var love = require('love');

module.exports = love.ecs.system({

  initialize: function(input, walking) {
    love.keyboard.on('pressed', this.pressed);
    love.keyboard.on('released', this.released);

    this.entity = this.find('input', 'walking').single();
  },

  pressed: function(key) {
    if (key == 'left') {
      this.entity.walking.start('left');
    }
  }

});
