const assertArraysEqual = function (array1, array2){
  const arraysAreEqual = eqArrays(array1, array2);
  if (arraysAreEqual) {
    console.log(`Assertion Passed: ${array1}  === ${array2} `);
  }
  else {
    console.log(`Assertion Failed: ${array1}  !== ${array2} `);
  }
}

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

const without = function (source, itemsToRemove) {
 let resultarr=[];
 //console.log(itemsToRemove)
 for (let i=0; i < source.length; i++){
   if (source[i] != itemsToRemove){
    resultarr.push(source[i]);
   }
   else{
    continue;
   }
   //console.log(source[i])
 }
 console.log(resultarr);
 return resultarr;
}

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(words, [ "lighthouse"]);

module.exports = without;