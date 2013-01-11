[
  'animation', 'body', 'gravity', 'input', 'position', 
  'solid', 'velocity', 'walking'
].forEach(function(component) {
  exports[component] = require('./' + component);
});
