function AnimationComponent(animation) {
  this.name = 'animation';
  this.animation = animation;
}

function AnimationSystem(entities) {
  this.name = 'animation';
  this.entities = entities;
}

AnimationSystem.prototype = {

  initialize: function() {
    this.animated = this.entities.select('animation');
  },

  update: function(dt) {
    var entities = this.animated.all();

    for (var i = 0; i < entities.length; i++) {
      entities[i].get('animation').animation.update(dt);
    }
  }
  
};

exports.Component = AnimationComponent;
exports.System = AnimationSystem;
