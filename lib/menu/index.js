var event = require('event'),
    events = require('events'),
    bind = require('bind'),
    Stage = require('stages').Stage,
    markup = require('./markup');

function Menu() {
  events.extend(this);
  Stage.call(this, markup);

  var select = bind(this, this.select);

  event.bind(this.element, 'click', select, false);
  event.bind(this.element, 'touchstart', select, false);
}

Menu.prototype = Object.create(Stage.prototype);

Menu.prototype.select = function(e) {
  var target = e.target.getAttribute('data-target');
  this.trigger(target);
};

module.exports = Menu;
