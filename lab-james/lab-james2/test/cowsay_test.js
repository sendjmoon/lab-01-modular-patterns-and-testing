const expect = require('chai').expect;
const newCowsay = require('../lib/cowsay');
const cowsay = require('cowsay');

describe('what the cow says', function() {
  it('should say what the user inputs', function() {
    expect(cowsay.say('hello').to.eql('hello'));
  });
});

// const expect = require('chai');
// const cowsaycli = require('../../bin/cowsay');

// describe('cowsaycli', function() {
  // before(function() {
    // tihs.argv_backup = process.argv;
    // process.argv = [null,null, 'test'];
    // });
// });
