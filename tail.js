const assertEqual = require('./assertEqual')

const tail = function(arr1) {
  let newarr=[];
  if (arr1.length === 0) {
    return newarr;
  }
  if (arr1.length === 1) {
    return newarr;
  }
  console.log(arr1);
  newarr=arr1.slice(1);
  return newarr;
}
// const assertEqual = function(actual, expected) {
//   console.assert(actual === expected);
//   if (actual === expected) {
//     console.log(`Assertion Passed: %s  === %s `, actual, expected);
//   } else {
//     console.log(`Assertion Failed: %s !== %s `, actual, expected);
//   }
// };

// // TEST CODE
// //TEST CASE 1
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); 

// //TEST CASE
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

//export function
module.exports = tail;