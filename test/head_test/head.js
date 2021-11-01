const assertEqual = require('../../assertEqual');

function head(arr1){
  if (arr1.length === 0 ){
    return undefined;
  }
  return arr1[0];
}

// const assertEqual = function(actual, expected) {
  
//   console.assert(actual === expected);
//   if (actual === expected) {
//     console.log(`Assertion Passed: %s  === %s `, actual, expected);
//   } else {
//     console.log(`Assertion Failed: %s !== %s `, actual, expected);
//   }
// };

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

module.export =head;
