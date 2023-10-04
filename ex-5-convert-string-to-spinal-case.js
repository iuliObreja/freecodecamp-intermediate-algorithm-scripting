/*
  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
  */

function spinalCase(str) {
  const re = /([a-z])([A-Z])/g;

  return str.replace(re, '$1 $2')
            .split(/[^a-zA-Z0-9]/)
            .join('-')
            .toLowerCase();
};

const string = 'The_Andy_Griffith_Show';
const string2 = 'AllThe-small Things';

console.log(spinalCase(string));
console.log(spinalCase(string2));