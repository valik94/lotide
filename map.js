const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item); //console.log testing
    console.log('item AFTER: ', callback(item)); //console.log testing
    console.log('---'); //console.log testing
    results.push(callback(item)); //pushing items from callback to result
  }
  return results;
}

const results1 = map(words, word => word[0]);
//console.log(results1); 

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

// const results1 = map(words, word => word[0]);
// console.log(results1);

//console.log(map);
map(words,word => word[0]);

// Write test cases using at least three different ways of using map.
assertArraysEqual(map(words, word => word[0]),['g','c','t','m','t']);
assertArraysEqual(map(words, word => word[0]),['g','o','t','m','t']);
assertArraysEqual(map(words, word => word[0]),['g','o','t','m','t','y']);