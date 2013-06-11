var TiledMap = require('tiled-map'),
    json = require('./maps/level_1.json');

function MapSystem(entities) {

}

MapSystem.prototype = {

  load: function(assets) {
    this.assets = {
      tileset: assets.image('build/map-system/images/tileset.png'),
      objects: assets.image('build/map-system/images/objects.png')
    };
  },

  initialize: function() {
    this.map = TiledMap.load(JSON.parse(json), {
      tileset: this.assets.tileset,
      objects: this.assets.objects
    });

    this.layers = ['background', 'platforms', 'foreground']
      .map(this.map.getLayer, this.map);

    this.map.predraw();
  },

  draw: function(canvas) {
    this.layers.forEach(function(layer) {
      layer.canvas.draw(canvas.ctx, 0, -220);
    });
  }

};

module.exports = MapSystem;