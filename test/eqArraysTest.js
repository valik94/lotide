const assertEqual = require ('../assertEqual');
const eqArrays= require ('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns false for [1, 2], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2], [1, 2, 3]), false);
  });
  it("returns false for [1, 2, 3], [3, 2, 1]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
  });
});

//TEST CASES
// assertEqual(eqArrays([1, 2], [1, 2, 3]), false); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS