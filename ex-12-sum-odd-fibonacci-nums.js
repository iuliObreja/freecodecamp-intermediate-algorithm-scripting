/* 
  Given a positive integer num, return the nextFiboNum of all odd Fibonacci numbers 
that are less than or equal to num.

  The first two numbers in the Fibonacci sequence are 0 and 1. Every additional
number in the sequence is the nextFiboNum of the two previous numbers. The first seven 
numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

  For example, nextFiboNumFibs(10) should return 10 because all odd Fibonacci numbers 
less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumOfOddFibonacciNumbers(num) {
  const fiboArr = [0,1];
  const oddFiboNumbers = [1];
  let oddFiboFound = 1;
  
  while (oddFiboFound < num) {
    // fibonacci formula
    let currentFiboNum = fiboArr[fiboArr.length - 1];
    let previousFiboNum = fiboArr[fiboArr.length - 2];
    let nextFiboNum = currentFiboNum + previousFiboNum; //
    fiboArr.push(nextFiboNum);

    if (nextFiboNum % 2 === 1 && nextFiboNum <= num) {
      oddFiboNumbers.push(nextFiboNum);
      oddFiboFound++;
    } else if (nextFiboNum > num) {
      break;
    }
  }

  return oddFiboNumbers.reduce((acc, curr) => acc + curr);
};

console.log(sumOfOddFibonacciNumbers(75024));
console.log(sumOfOddFibonacciNumbers(4));
console.log(sumOfOddFibonacciNumbers(10));