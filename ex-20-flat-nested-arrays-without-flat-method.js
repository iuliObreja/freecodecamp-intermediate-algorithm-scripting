/*
  Flatten a nested array. You must account for varying levels of nesting.

  Restrictions:
    You cannot use Array.prototype.flat() and Array.prototype.flatMap().
*/

function flatNestedArray(arr) {
  let flattenArr = [];
  
  for (let elem of arr) {
    Array.isArray(elem) 
      ? flattenArr = flattenArr.concat(flatNestedArray(elem)) 
      : flattenArr.push(elem);
  }

  return flattenArr;
};

const array = [22, 44, [1, 2, [3, [[4]]]]];

console.log(flatNestedArray(array));