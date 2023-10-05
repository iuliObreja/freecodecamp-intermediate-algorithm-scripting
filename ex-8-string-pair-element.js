/*
  Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, 
which form building blocks of the DNA double helix.

  The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the 
provided DNA strand. For each character in the provided string, find the base pair character. 
  
  Return the results as a 2d array.

  For example, for the input 'GCG', return [["G", "C"], ["C","G"], ["G", "C"]]
*/

function pairElement(str) {
  const basePairAT = ['A', 'T'];
  const basePairCG = ['C', 'G'];
  const pairedArr = [];

  for (let char of str) {
    if (basePairAT.includes(char) && basePairAT[0] !== char) {
      pairedArr.push(basePairAT.slice().reverse());
    } else if (basePairAT[0] === char) {
      pairedArr.push(basePairAT.slice());
    } else if (basePairCG.includes(char) && basePairCG[0] !== char) {
      pairedArr.push(basePairCG.slice().reverse());
    } else {
      pairedArr.push(basePairCG.slice());
    }
  }
  
  return pairedArr;
};

const string = ('TAGCG');
console.log(pairElement(string));