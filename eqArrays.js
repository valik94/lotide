const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
//   //console.assert(actual === expected);
//   if (actual === expected) {
//     console.log(`Assertion Passed: %s  === %s `, actual, expected);
//   } else {
//     console.log(`Assertion Failed: %s !== %s `, actual, expected);
//   }
// };

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length){
    return false;
  }
  for (let i=0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// //TEST CASES
// assertEqual(eqArrays([1, 2], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

module.exports = eqArrays;