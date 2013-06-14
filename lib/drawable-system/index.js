var Sorter = require('container-sorter');

function DrawableComponent(object, z) {
  this.name = 'drawable';
  this.object = object;
  this.z = z;
}

function DrawableSystem(entities) {
  var drawables = entities.select('drawable', 'position');
  var sorter = new Sorter(drawables, this.compare);
  this.sorter = sorter;
}

DrawableSystem.prototype = {

  draw: function(canvas) {
    var entities = this.sorter.components;

    for (var i = 0; i < entities.length; i++) {
      var pos = entities[i].get('position').vector,
          object = entities[i].get('drawable').object;

      object.draw(canvas.ctx, pos.x, pos.y);
    }
  },

  compare: function(a, b) {
    a = a.get('drawable');
    b = b.get('drawable');
    
    if (a.z < b.z) return -1;
    if (a.z == b.z) return 0;
    if (a.z > b.z) return 1;
  }

};

exports.Component = DrawableComponent;
exports.System = DrawableSystem;
