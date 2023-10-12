/*
  According to Kepler's Third Law, the orbital period  T
  of two point masses orbiting each other in a circular or elliptic orbit is:
    T = 2π * Math.sqrt(a**3 / μ);
 
  "a" is the orbit's semi-major axis
  "μ" = GM is the standard gravitational parameter
  "G" is the gravitational constant,
  "M" is the mass of the more massive body.

  Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

  The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

  The values should be rounded to the nearest whole number. The body being orbited is Earth.

  The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const arrOfObj = [];

  for (let obj of arr) {
    const newObj = {};
    for (let property in obj) {
      if (property === 'avgAlt') {
        const a = earthRadius + obj[property];
        const T = Math.round(2 * Math.PI * Math.sqrt(a ** 3 / GM));

        newObj.name = obj.name;
        newObj.orbitalPeriod = T;

        arrOfObj.push(newObj);
      }
    }
  }
  
  return arrOfObj;
};

// Map() method
function orbitalPeriodMap(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  const arrOfObj = arr.map( obj => {
    const a = earthRadius + obj.avgAlt;
    const T = Math.round(2 * Math.PI * Math.sqrt(a ** 3 / GM));

    return { name: obj.name, orbitalPeriod: T };
  });

  return arrOfObj;
}

console.log(orbitalPeriod([{ name: 'sputnik', avgAlt : 35873.5553 }]));
console.log(orbitalPeriod([
  {name: "iss", avgAlt: 413.6}, 
  {name: "hubble", avgAlt: 556.7}, 
  {name: "moon", avgAlt: 378632.553}])
);

console.log(orbitalPeriodMap([{ name: 'sputnik', avgAlt : 35873.5553 }]));
console.log(orbitalPeriodMap([
  {name: "iss", avgAlt: 413.6}, 
  {name: "hubble", avgAlt: 556.7}, 
  {name: "moon", avgAlt: 378632.553}])
);