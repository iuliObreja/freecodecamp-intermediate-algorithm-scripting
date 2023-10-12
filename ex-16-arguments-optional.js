/*
  Create a function that sums two arguments together. If only one argument is provided, 
  then return a function that expects one argument and returns the sum.

  For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

  Calling this returned function with a single argument will then return the sum:
      var sumTwoAnd = addTogether(2);
      sumTwoAnd(3); returns 5.

  If either argument isn't a valid number, return undefined.
*/

function addTogether() {
  let a = arguments[0];
  let b;

  if (typeof a !== 'number') {
    return undefined;
  }

  if (arguments.length === 2 && typeof arguments[1] === 'number') {
    b = arguments[1];
    return a + b;
  } else if (arguments.length === 1) {
      return (second) => typeof second === 'number'
                            ? a + second
                            : undefined;
  }
};

console.log(addTogether('8', 6));
console.log(addTogether(5, 4));
console.log(addTogether(5, '4'));
console.log(addTogether(3)(7));
console.log(addTogether(5)([10]));

const sumTenAnd = addTogether(10);
console.log(sumTenAnd(90));