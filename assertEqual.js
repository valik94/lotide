const assertEqual = function(actual, expected) {
  console.assert(actual === expected);
  if (actual === expected) {
    console.log(`🛑🛑🛑 Assertion Passed: %s  === %s `, actual, expected);
    return true;
  } else {
    console.log(`✅✅✅ Assertion Failed: %s !== %s `, actual, expected);
    return false;
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

module.exports = assertEqual;