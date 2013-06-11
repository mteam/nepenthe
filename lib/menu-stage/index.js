var dom = require('event'),
    bind = require('bind'),
    events = require('events'),
    Stage = require('stages').Stage,
    markup = require('./markup');

function Menu() {
  Stage.call(this, markup);
  events.extend(this);

  var select = bind(this, this.select);

  dom.bind(this.element, 'click', select, false);
  dom.bind(this.element, 'touchstart', select, false);
}

Menu.prototype = Object.create(Stage.prototype);

Menu.prototype.load = function(assets) {
  assets.image('build/menu-stage/images/background.png');
  assets.image('build/menu-stage/images/header.png');
  assets.image('build/menu-stage/images/front.png');
  assets.image('build/menu-stage/images/buttons.png');
};

Menu.prototype.select = function(e) {
  e.preventDefault();
  
  var target = e.target.getAttribute('data-target');
  this.trigger(target);
};

module.exports = Menu;
