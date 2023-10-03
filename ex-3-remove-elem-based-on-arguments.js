/*
  Remove all elements from the initial array that are of the same value as these arguments.
The function must accept an indeterminate number of arguments
*/

function removeElemBasedOnArguments(arr, ...args) {
  const argumentsArr = [...args];

  return arr.filter( item => argumentsArr.includes(item) === false );
};

const arr = [1, 2, 3, 1, 2, 3, 'mic', 'check'];
console.log(removeElemBasedOnArguments(arr, 3));