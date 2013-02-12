var Stage = require('stages').Stage,
    closest = require('closest'),
    event = require('event'),
    bind = require('bind'),
    markup = require('./markup');

function Cards() {
  Stage.call(this, markup);

  var open = bind(this, this.open);

  event.bind(this.element, 'click', open, false);
  event.bind(this.element, 'touchstart', open, false);
}

Cards.prototype = Object.create(Stage.prototype);

Cards.prototype.load = function(loader) {
  loader.add('cards/album.png');

  for (var i = 1; i < 6; i++) {
    loader.add('lvl' + i + '_front.png');
    loader.add('lvl' + i + '_back.png');
  }
};

Cards.prototype.open = function(e) {
  var el = closest(e.target, '.card');
  el.classList.toggle('active');
};

module.exports = Cards;
