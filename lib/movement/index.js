var Vector = require('vector');

exports.Component = VelocityComponent;
exports.System = MovementSystem;

function VelocityComponent() {
  this.name = 'velocity';
  this.vector = new Vector(0, 0);
  this.step = new Vector(0, 0);
}

function MovementSystem(entities) {
  this.name = 'movement';
  this.entities = entities.select('velocity', 'position');
}

MovementSystem.prototype = {

  update: function(dt) {
    var entities = this.entities.all();

    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i],
          position = entity.get('position'),
          velocity = entity.get('velocity');

      velocity.step.vupdate(velocity.vector).multiply(dt);
      position.vector.vadd(velocity.step);
    }
  }

};
