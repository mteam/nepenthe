module.exports =
  [
    'collisions', 'drawing', 'gravity', /*'input',*/
    'movement', 'solid'
  ].map(function(name) {
    return require('./' + name);
  });
