const expect = require('chai').expect;
const assert = require('assert');
const cowsay = require('../cowsay');

describe('what the cow says', function() {
  it('should say what the user inputs', function() {
    expect(cowsay('hello')).to.eql('moo cow says hello');
    assert.deepEqual(cowsay('hello'), cowsay('hello'));
  });
});
