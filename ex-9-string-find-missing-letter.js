/*
  Find the missing letter in the passed letter range and return it.

  If all letters are present in the range, return 'undefined'.
*/

function findMissingLetter(str) {
  const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  if (str.split('').length === alphabet.length) {
    return undefined;
  }

  let groupMatchingStr = [];
  let startSpliceForGroup = 0;
  const endSpliceForGroup = str.length + 1;

  for (let letter of alphabet) {
    if (letter === str[0]) {
      startSpliceForGroup = alphabet.indexOf(letter);
    }
  }

  groupMatchingStr = alphabet.splice(startSpliceForGroup, endSpliceForGroup);
  
  return groupMatchingStr.filter( letter => {
    return str.includes(letter) === false
  }).join('');   
};

console.log(findMissingLetter("abce"));
console.log(findMissingLetter("defgijkl"));
console.log(findMissingLetter("pqrtu"));
console.log(findMissingLetter('abcdefghijklmnopqrstuvwxyz'));