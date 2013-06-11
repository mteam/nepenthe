var Stage = require('stages').Stage,
    closest = require('closest'),
    event = require('event'),
    bind = require('bind'),
    markup = require('./markup');

function Cards() {
  Stage.call(this, markup);

  this.active = null;

  var open = bind(this, this.open);
  event.bind(this.element, 'click', open, false);
  event.bind(this.element, 'touchstart', open, false);
}

Cards.prototype = Object.create(Stage.prototype);

Cards.prototype.load = function(assets) {
  assets.image('build/cards-stage/images/album.png');

  for (var i = 1; i < 6; i++) {
    assets.image('build/cards-stage/images/lvl' + i + '_front.png');
    assets.image('build/cards-stage/images/lvl' + i + '_back.png');
  }
};

Cards.prototype.open = function(e) {
  e.preventDefault();
  
  var card = closest(e.target, '.card');

  if (this.active) {
    this.active.classList.remove('active');
  }

  if (this.active === card) {
    this.active = null;
  } else {
    card.classList.add('active');
    this.active = card;
  }
};

module.exports = Cards;
