const assert = chai.assert;

describe('removeTimes', function() {
  it('should replace all x characters with * characters in a string', function() {
    assert.equal(removeTimes('9x8+4x2'), '9*8+4*2');
  });
  it('should return an empty string if passed an empty string', function() {
    assert.equal(removeTimes(''), "");
  });
  it('should return undefined if passed no argument', function() {
    assert.equal(removeTimes(), undefined);
  });
});
describe('removeDivide', function() {
  it('should replace all division symbols with / characters in a string', function() {
    assert.equal(removeDivide('9x8\u00F74\u00F72'), '9x8/4/2');
  });
  it('should return an empty string if passed an empty string', function() {
    assert.equal(removeDivide(''), "");
  });
  it('should return undefined if passed no argument', function() {
    assert.equal(removeDivide(), undefined);
  });
});
