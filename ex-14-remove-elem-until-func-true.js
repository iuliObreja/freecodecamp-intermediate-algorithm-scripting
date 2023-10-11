/*
  Given the array arr, iterate through and remove each element starting from the 
  first element (the 0 index) until the function func returns true when the iterated element is passed through it.

  Then return the rest of the array once the condition is satisfied, otherwise, 
  arr should be returned as an empty array.

  For example: dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
*/

function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(i);
    }
  }

  return [];
};

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([1, 2, 3, 4, 7, 4], function(n) {return n > 3}));
console.log(dropElements([0, 9, 8, 11, 5, 8, 0], function(n) {return n >= 11}));
console.log(dropElements([0, 9, 8, 11, 5, 8, 0], function(n) {return n > 11}));