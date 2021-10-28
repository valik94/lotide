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
const assertArrayEqual = function (array1, array2){
  const arraysAreEqual = eqArrays(array1, array2);
  if (arraysAreEqual) {
    console.log(`Assertion Passed: ${array1}  === ${array2} `);
  }
  else {
    console.log(`Assertion Failed: ${array1}  !== ${array2} `);
  }
}

function middle(array){
  let result =[];
  if (array.length === 1 || array.length === 2){
    return result;
  }
  if (array.length % 2 !== 0){
    result.push(array[(Math.floor(array.length / 2))]);
    return result;
  }
  if (array.length %2 === 0){ 
    result.push(array[(array.length / 2) - 1]) && result.push(array[(array.length / 2)])
    return result
  }
}

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
