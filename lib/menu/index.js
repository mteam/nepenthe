var event = require('event'),
    bind = require('bind'),
    Stage = require('stages').Stage,
    markup = require('./markup');

function Menu() {
  Stage.call(this, markup);

  var select = bind(this, this.select);

  event.bind(this.element, 'click', select, false);
  event.bind(this.element, 'touchstart', select, false);
}

Menu.prototype = Object.create(Stage.prototype);

Menu.prototype.select = function(e) {
  switch (e.target.className) {
    case 'start':
      alert('start new game');
      break;
    case 'load':
      alert('load new game');
      break;
    case 'cards':
      alert('cards');
      break;
  }
};

module.exports = Menu;
