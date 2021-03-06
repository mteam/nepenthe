var Stage = require('stages').Stage,
    is = require('helpers').is,
    markup = require('./markup');

function Loader() {
  Stage.call(this, markup);

  this.bar = this.element.querySelector('.progressbar .loaded');
  this.fluid = this.element.querySelector('.fluid .loaded');
}

Loader.prototype = Object.create(Stage.prototype);

Loader.prototype.update = function(percentage) {
  if (!is.number(percentage)) {
    throw new Error('percentage is not a number');
  }

  if (percentage < 0 || percentage > 100) {
    throw new Error('percentage is invalid');
  }

  this.bar.style.width =
  this.fluid.style.height =
    percentage + '%';
};

Loader.prototype.reset = function() {
  this.update(0);
};

module.exports = Loader;
