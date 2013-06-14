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

    this.map.layers.forEach(function(layer, z) {
      if (layer.canvas) {
        this.addLayer(layer, z);
      } else if (layer.objects) {
        this.addObjects(layer);
      }
    }, this);

    this.map.predraw();
  },

  addLayer: function(layer, z) {
    this.entities.add(
      new Position(0, 0),
      new Drawable(layer.canvas, z)
    );
  },

  addObjects: function(layer) {
    var entities = this.entities;

    layer.objects.forEach(function(obj) {
      var args = [
        new Position(obj.x, obj.y)
      ];

      if (obj.name) args.unshift(obj.name);
      entities.add.apply(entities, args);
    });
  }

};

module.exports = MapSystem;
