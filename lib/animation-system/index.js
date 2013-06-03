function AnimationComponent(animation) {
  this.name = 'animation';
  this.animation = animation;
}

function AnimationSystem(entities) {
  this.name = 'animation';
  this.animated = entities.select('animation');
  this.positioned = entities.select('animation', 'position');
}

AnimationSystem.prototype = {

  update: function(dt) {
    var entities = this.animated.all();

    for (var i = 0; i < entities.length; i++) {
      entities[i].get('animation').animation.update(dt);
    }
  },

  draw: function(renderer) {
    var entities = this.positioned.all();

    for (var i = 0; i < entities.length; i++) {
      var animation = entities[i].get('animation').animation,
          position = entities[i].get('position').vector;

      renderer.draw(animation, position.x, position.y);
    }
  }
  
};

exports.Component = AnimationComponent;
exports.System = AnimationSystem;
