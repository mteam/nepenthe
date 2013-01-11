var love = require('love');

module.exports = love.ecs.component(love.vector, {

  name: 'velocity',
  
  constructor: function() {
    love.vector.call(this);
    this.step = love.vector();
  }
  
});
