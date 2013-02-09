var Stage = require('stages').Stage,
    markup = require('./markup');

function Menu() {
  Stage.call(this, markup);
}

Menu.prototype = Object.create(Stage.prototype);

module.exports = Menu;
