const assertEqual = function(actual, expected) {
  console.assert(actual === expected);
  if (actual === expected) {
    console.log(`Assertion Passed: %s  === %s `, actual, expected);
  } else {
    console.log(`Assertion Failed: %s !== %s `, actual, expected);
  }
};


const findKeyByValue = function(object1, val1){
//let result={};
for (let key in object1){
  //console.log(key);
  //console.log(object1.key);
  if (object1[key] === val1){
    return key;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);