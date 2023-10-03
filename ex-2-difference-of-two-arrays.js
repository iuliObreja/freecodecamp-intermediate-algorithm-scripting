/*
  Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  const concatenatedArrays = arr1.concat(arr2);
  
  return concatenatedArrays.filter( item => {
    return (arr1.includes(item) === false && arr2.includes(item) === true) || 
           (arr1.includes(item) === true && arr2.includes(item) === false);
  });
};

const arrOne = [1, 2, 3, 5, 7, 8, 'winter'];
const arrTwo = [1, 2, 3, 4, 8, 5, 5, 5, 'is coming'];
console.log(diffArray(arrOne, arrTwo));