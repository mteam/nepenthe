var love = require('love'),
    cs = require('../components');

module.exports = function(x, y, w, h) {
  return love.ecs.entity(
    'platform',
    new cs.body(x, y, w, h), new cs.position(x, y), cs.solid
  );
};
