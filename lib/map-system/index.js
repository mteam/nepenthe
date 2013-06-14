var TiledMap = require('tiled-map'),
    Position = require('position'),
    Drawable = require('drawable-system').Component,
    json = require('./maps/level_1.json');

function MapSystem(entities) {
  this.entities = entities;
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
      .map(this.map.getLayer, this.map)
      .forEach(function(layer, z) {
        this.entities.add(
          new Position(0, -220),
          new Drawable(layer.canvas, z)
        );
      }, this);

    this.map.predraw();
  }

};

module.exports = MapSystem;
