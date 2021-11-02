const assertArrayEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const assert = require ('chai').assert;

describe("#assertArrayEqual", () => {
  it("returns false when passing in [1, 2], [1, 2, 3]) to eqArrays", () => {
    assert.strictEqual(eqArrays([1, 2], [1, 2, 3]), false);
  });
  it("returns false when passing in [1, 2, 3], [3, 2, 1]) to eqArrays", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
  });
  it(`returns true when passing in (["1", "2", "3"], ["1", "2", "3"]) to eqArrays`, () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
  });
});

//TEST CODE-TEST CASES
// assertArrayEqual([1,2,3],[1,3,5]);
// assertArrayEqual([2,6],[2,6,7]);
// assertArrayEqual([1,5,9],[1,5,9]);
// assertArrayEqual(eqArrays([1, 2], [1, 2, 3]), [1, 2, 3]); // => false
// assertArrayEqual(eqArrays([1, 2, 3], [3, 2, 1]), [3, 2, 1]); // => false

// assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), ["1", "2", "3"]); // => true
// assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), ["1", "2", 3]); // => false

// assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]), ["1", "2", "3"]); // => should PASS