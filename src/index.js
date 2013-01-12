var love = require('love');

var player = require('./entities/player'),
    platform = require('./entities/platform'),
    systems = require('./systems');

var game = {
  entities: null,
  systems: null
};

module.exports = game;

love.load = function() {

  // create managers
  game.entities = love.cm.container();
  game.systems = love.ecs.manager(game.entities);

  // add entities
  // game.manager.add(player(20, 20));
  game.entities.add(platform(0, 200, 300, 30));

  // add systems
  systems.forEach(game.systems.add, game.systems);

};

love.update = function(dt) {
  game.systems.update(dt);
};

love.draw = function() {
  game.systems.draw();
};
