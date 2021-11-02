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

const findKey= function(object, callback){
  //result =_.findKey(object, function(o){ return callback(o); });
  //const findKeyByValue = function(object1, val1){
    //let result={};
    for (let key in object){
      //console.log(object[key]);
        //console.log(callback);
      if (callback(object[key])){
        return key;
        }
      }
      return undefined;
    }

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),'noma'); // => "noma"


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), "Akaleri");

module.exports = findKey;