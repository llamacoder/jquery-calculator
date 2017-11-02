let assert = const chai = require('chai');
const assert = chai.assert;
const main = require('../js/index.js');

describe('removeTimes', function() {
  it('should replace all x characters with * characters in a string', function() {
    assert.equal(removeTimes('9x8+4x2'), '9*8+4*2';
  });
});
