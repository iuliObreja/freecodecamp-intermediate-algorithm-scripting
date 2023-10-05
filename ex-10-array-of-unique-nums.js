/*
  Write a function that takes two or more arrays and returns a new array of unique values 
in the order of the original provided arrays.

  In other words, all values present from all arrays should be included in their original order, 
but with no duplicates in the final array.

  The unique numbers should be sorted by their original order, but the final array should not be
sorted in numerical order.

  For example: uniteUnique([1,2,3],[2,5,1,7],[6,3,9]);  should return [1,2,3,5,7,6,9]
*/

function uniteArrByUniqueNumbers(arr, ...arrays) {
  const unitedArrays = arr.concat(...arrays);
  const uniqueNumbersArr = [];
 
  for (const num of unitedArrays) {
    if (!uniqueNumbersArr.includes(num)) {
      uniqueNumbersArr.push(num);
    }
  }

  return uniqueNumbersArr;
};

console.log(uniteArrByUniqueNumbers([1,2,3], [2,5,1,7], [6,3,9]));
console.log(uniteArrByUniqueNumbers([1,2,3], [1,2,3], [0,3,4], [2,8,1,10,6]));