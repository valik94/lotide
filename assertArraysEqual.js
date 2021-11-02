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
const assertArraysEqual = function (array1, array2){
  const arraysAreEqual = eqArrays(array1, array2);
  if (arraysAreEqual) {
    console.log(`Assertion Passed: ${array1}  === ${array2} `);
  }
  else {
    console.log(`Assertion Failed: ${array1}  !== ${array2} `);
  }
}

assertArraysEqual([1,2,3],[1,3,5]);
assertArraysEqual([2,6],[2,6,7]);
assertArraysEqual([1,5,9],[1,5,9]);
// assertArrayEqual(eqArrays([1, 2], [1, 2, 3]), [1, 2, 3]); // => true
// assertArrayEqual(eqArrays([1, 2, 3], [3, 2, 1]), [3, 2, 1]); // => false

// assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), ["1", "2", "3"]); // => true
// assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), ["1", "2", 3]); // => false

// assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]), ["1", "2", "3"]); // => should PASS