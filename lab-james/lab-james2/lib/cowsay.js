const cowsay = require('cowsay');

var newCowsay = exports = module.exports = function(string) {
  return cowsay.say({
    text: string,
    e: 'oO',
    T: 'U'
  });
};

console.log(newCowsay('hello'));

// #!/usr/bin/env node
// var cowsay = require('./lib/cowsay');

// var cowsaycli = exports = module.exports = function(string, writeStream) {
// writeStream = writeStream || process.stdout;
// string = string || process.argv[2];
// string = string || '';
// writeStream.write(string + '\n');
// };

//cowsaycli();
