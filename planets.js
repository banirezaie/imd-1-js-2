let planets = [ 'Moon', 'Earth', 'Jupiter', 'Uranus' ]

// come on... everyone know that 'Moon' is not a planet, let's remove it
planets.shift();
//add 'Mercury' at the end of your array
planets.push('mercury');
//add 'Mars' at the beginning of your array
planets.unshift('mars');
//console.log the final answer
console.log(planets);
//it should be like:
// ['Mars', 'Earth', 'Jupiter', 'Uranus', 'Mercury']


