const assertArrayEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

//TEST CODE-TEST CASES
assertArrayEqual([1,2,3],[1,3,5]);
assertArrayEqual([2,6],[2,6,7]);
assertArrayEqual([1,5,9],[1,5,9]);
assertArrayEqual(eqArrays([1, 2], [1, 2, 3]), [1, 2, 3]); // => true
assertArrayEqual(eqArrays([1, 2, 3], [3, 2, 1]), [3, 2, 1]); // => false

assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), ["1", "2", "3"]); // => true
assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), ["1", "2", 3]); // => false

assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]), ["1", "2", "3"]); // => should PASS