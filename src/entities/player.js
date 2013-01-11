var love = require('love'),
    cs = require('../components');

module.exports = function() {
  return love.ecs.entity(
    'player',
    cs.animation, cs.body, cs.gravity, cs.input, cs.position,
    cs.solid, cs.velocity, cs.walking
  );
};
