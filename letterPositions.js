const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i=0; i < sentence.length; i++){
    const letter = sentence[i];
    if (letter === ' '){
      continue;
    }
    if (results[letter]){
      results[letter].push(i);
    }
    else{
      results[letter] = [i]; //here [letter] is a variable
      //results.letter = [i] //equivalent to results["letter"]
    }
  }
  return results;
};

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

assertArrayEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions; 