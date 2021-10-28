const assertEqual = function(actual, expected) {
  console.assert(actual === expected);
  if (actual === expected) {
    console.log(`Assertion Passed: %s  === %s `, actual, expected);
  } else {
    console.log(`Assertion Failed: %s !== %s `, actual, expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const countLetters = function (str){
  let result = {};
  let counter = 0;
  for (char of str){
    //console.log(char);
    if (char === ' '){
      continue;
    }
  if (result[char] !== undefined){
    result[char]+=1;
  }
  else{
    result[char] = 1;
  }
  //console.log(result);
  }
  return result;
}

console.log(countLetters('LHL'));
console.log(countLetters('lighthouse labs rocks sock'));