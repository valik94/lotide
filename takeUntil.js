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

const takeUntil = function(array, callback) {
  let result=[];
  let bool = false;
  //console.log(array, callback)
  array.map(function(y){
    if (callback(y) ){
      bool = true;
    }
    if (!bool){
      result.push(y)
    }
  })
  return result;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); 
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

module.exports = takeUntil;