const assertEqual = function(actual, expected) {
  console.assert(actual === expected);
  if (actual === expected) {
    console.log(`Assertion Passed: %s  === %s `, actual, expected);
  } else {
    console.log(`Assertion Failed: %s !== %s `, actual, expected);
  }
};
// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  //pseudocode: Goal: for each element of "allItems" array compare if it matches the string from itemsToCount object using keys
let result = {};
  for (var key in itemsToCount){
    if (itemsToCount[key] === false ){
      continue;
    }
    let counter = 0;
    for (var item in allItems){
      if (key === allItems[item]){
        counter += 1
      }
    }
    if (counter >0){
      result[key]=counter;
      console.log(result);
    }
  }
  return result;  
 }

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);