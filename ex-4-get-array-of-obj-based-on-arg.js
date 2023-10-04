/*
Make a function that looks through an array of objects (first argument) 
  and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the collection 
  if it is to be included in the returned array.

  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" }, 
      { first: "Mercutio", last: null }, 
      { first: "Tybalt", last: "Capulet" }
    ], { last: "Capulet" }
  );
    
    should return [{ first: "Tybalt", last: "Capulet" }].
*/

function getArrOfObjThatMatchArgument(collection, source) {
  const sourceKeys = Object.keys(source);
  
  return collection.filter( obj => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false;
      }
    }

    return true;
  });
};

const collectionArr = [
  { "apple": 1, "bat": 2 },
  { "Ta na na na na na naa": 2, "bat": 2, "maaan": 2 },
  { "apple": 1, "bat": 2, "cookie": 2 }
];

console.log(getArrOfObjThatMatchArgument(collectionArr, { "maaan": 2, "bat": 2 }));