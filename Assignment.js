function deepEqual(a, b) {
    if (a === b) {
      // items are identical
      return true;
    } else if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
        // items are objects - do a deep property value compare
      // join keys from both objects together in one array
      let keys = Object.keys(a).concat(Object.keys(b));
      // filter out duplicate keys
      keys = keys.filter(
        function (value, index, self) { 
          return self.indexOf(value) === index;
        }
      );
      for (p of keys) {
        if (typeof a[p] === 'object' && typeof b[p] === 'object') {
          if (deepEqual(a[p], b[p]) === false) {
            return false;
          }
        } else if (a[p] !== b[p]) {
          return false;
        }
      }
      return true;
    } else {
     return false; 
    }
  }
  

  let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {here: {is: "an"}, object: 0}));
// → false
console.log(deepEqual(obj, {here: {is: "another"}, object: 2}));
// → false
console.log(deepEqual(obj, {here: {isnt: "an"}, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an", deep: {poop: null, value: -1}}, object: 2}));
// → false
