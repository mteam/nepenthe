var Stage = require('stages').Stage,
    markup = require('./markup');

function Loader() {
  Stage.call(this, markup);

  this.bar = this.element.querySelector('.progressbar .loaded');
  this.fluid = this.element.querySelector('.fluid .loaded');
}

Loader.prototype = Object.create(Stage.prototype);

Loader.prototype.update = function(percentage) {
  if (typeof percentage != 'number') {
    throw new Error('percentage is not a number');
  }

  if (percentage < 0 || percentage > 100) {
    throw new Error('percentage is invalid');
  }

  this.bar.style.width =
  this.fluid.style.height = percentage + '%';
};

module.exports = Loader;
