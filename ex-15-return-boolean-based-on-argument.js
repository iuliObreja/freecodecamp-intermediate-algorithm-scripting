/*
  Check if the predicate (second argument) is truthy on all 
  elements of a collection (first argument).

  In other words, you are given an array collection of objects. 
  The predicate 'pre' will be an object property and you need to 
  return true if its value is truthy. Otherwise, return false.
*/

function truthCheck(collection, pre) {
  let truthyCounter = 0;
  
  for (let obj of collection) {
    if (obj[pre]) {
      truthyCounter++;
    }
  }

  return truthyCounter === collection.length ? true : false;
};


const collectionOne = [
  {name: "Quincy", role: "Founder", isBot: false}, 
  {name: "Naomi", role: "", isBot: false}, 
  {name: "Camperbot", role: "Bot", isBot: true}
];

const collectionTwo = [
  {name: "Pikachu", number: 25, caught: 3}, 
  {name: "Togepi", number: 175, caught: 1}, 
  {name: "MissingNo", number: NaN, caught: 0}
];

console.log(truthCheck(collectionOne, "name"));
console.log(truthCheck(collectionOne, "role"));
console.log(truthCheck(collectionTwo, "number"));