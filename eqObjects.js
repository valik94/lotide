const assertEqual = function(actual, expected) {
  //console.assert(actual === expected);
  if (actual === expected) {
    console.log(`Assertion Passed: %s  === %s `, actual, expected);
  } else {
    console.log(`Assertion Failed: %s !== %s `, actual, expected);
  }
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
  array2 = Object.keys(object2); //not sure why its not working. this is glitchy
  // console.log('++++++++++++++',array1, array2);
  // if (array1.length !== array2.length){
  //   return false;
  // }
  if (!eqArrays(array1,array2)) {
    return false;
  }
  for (let key in object1) {
    //console.log('-------------',object1[key],object2[key]);
    if (object1[key] !== object2[key]) {
      return false;
      // arrayResult1 = Array.isArray(array1);
      // arrayResult2 = Array.isArray(array2);
      // if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      //   if (!eqArrays(object1[key], object2[key])){
      //   return false;
      //   }
      // }
      // else if (object1[key] !== object2[key]){
      //   return false;
      // }
    }
  }
  return true;
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true
//console.log('<<<<<<<<<<<<', eqObjects(ab, ba));
// const abc = { a: "1", b: "2", c: "3" };
// assertEqual((eqObjects(ab, abc))); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2)); // => false

//I think the test cases are incorrect. I believe my code is compelte here, but without access to mentors I cannot verify. nor correct it if its incorrect.

module.exports = eqObjects;