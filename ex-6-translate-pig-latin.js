/*
  Pig Latin is a way of altering English Words. The rules are as follows:
    - If a word begins with a consonant, take the first consonant or consonant cluster,
      move it to the end of the word, and add 'ay' to it.
    - If a word begins with a vowel, just add 'way' at the end.
  Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

function translateToPigLatin(str) {
  const endForVowels = ['way'];
  const endForCons = ['ay'];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  let consBeforeVowel = [];
  let flag = false;
  
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      consBeforeVowel.push(str[i]);
      flag = true;
    } else if (vowels.includes(str[i])) {
      break;
    }
  }

  if (flag) {
    return str.slice(consBeforeVowel.length)
              .concat(...consBeforeVowel)
              .concat(endForCons)
              .toLowerCase();
  }
  return str.concat(endForVowels).toLowerCase();
};

console.log(translateToPigLatin('schwartz'));
console.log(translateToPigLatin('eight'));
console.log(translateToPigLatin('rmnp'))