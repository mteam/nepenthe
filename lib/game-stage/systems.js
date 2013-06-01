module.exports = function(container) {

  container.add(require('player'));
  container.add(require('movement').System);

};
