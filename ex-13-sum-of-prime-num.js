/*
    Write a function that returns the sum of all prime numbers 
    that are less than or equal to num.

    !!! You can easily change the output into returning the sum of first N prime numbers,
    uncommenting/replacing.
*/

function sumOfPrimeLessThanInput(num) {
  if (num < 2) {
    return `Prime numbers not found`;
  }
  
  let sum = 2;
  // let isPrime = 1;
  let nextNumber = 3;
  
  while (nextNumber <= num) { //isPrime <= num, instead of nextNumber <= num
    let checkForNonPrime = true;

    for (let i = 2; i < nextNumber; i++) {
      if (nextNumber % i === 0) {
        checkForNonPrime = false;
        break;
      }
    }

    if (checkForNonPrime) {
      sum += nextNumber;
      // isPrime++
    }

    nextNumber++;
  }

  return sum;
};

console.log(sumOfPrimeLessThanInput(6));