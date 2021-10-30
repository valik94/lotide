const inspect = require('util').inspect;

const object1 = { a: "7", b: "2" };
const object2 = { b: "2", a: "1" };

const assertObjectsEqual = function(actual, expected) {
  if (actual!== expected){
    console.log(`✅✅✅ Assertion Passed:: ${inspect(object1)} and ${inspect(object2)}`);
    return false;
  }
  console.log(`❌❌❌ Assertion Passed:: ${inspect(object1)} and ${inspect(object2)}`);
  return true;
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length){
    return false;
  }
for (let i of array1) {
  if (arr1[i] !== arr2[i]) {
    return false;
    }
  }
return true;
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //let result = [];
  array1 = Object.keys(object1);
  array2 = Object.keys(object2); 
  if (!eqArrays(array1,array2)) {
    return false;
  }
  for (let key in object1) {
    //console.log('-------------',object1[key],object2[key]);
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

assertObjectsEqual(eqObjects(object1, object2),true);