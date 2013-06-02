module.exports = function(container) {

  container.add(require('player'));
  container.add(require('movement').System);
  container.add(require('animation-system').System);

};
