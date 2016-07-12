const expect = require('chai').expect;
const cowsay = require('./cowsay');

describe('what the cow says', function() {
  it('should say what the user inputs', function() {
    expect(cowsay()).to.eql('moo cow says undefined');
  });
});
