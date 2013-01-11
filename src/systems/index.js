var systems = {};

[
  'collisions', 'drawing', 'gravity', /*'input',*/
  'movement', 'solid'
].forEach(function(name) {
  systems[name] = require('./' + name);
});

module.exports = function setup(manager) {
  var result = {};

  for (var name in systems) {
    switch (name) {
      case 'solid':
        result[name] = new systems[name](manager, )
    }
  }
};
