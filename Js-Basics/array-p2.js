const heroes = ["Hulk", "Thor", "Shaktiman"]
const villains = ["Gabbar", "Rolex", "Mogambo"]

heroes.push(villains)
console.log(heroes);  // It gives villains like an element in array


// Try Concat

const cinema = heroes.concat(villains)
console.log(cinema);

// Easy way is Use Spread Operator
const newCinema = [...heroes,...villains]
console.log(newCinema);

// To get subarray elements
let marks = [12,25,[20,26,23],47,56,[98,[20,10,5]],100]
console.log(marks.flat(Infinity));

// To check Array
console.log(Array.isArray("Baba"));  //Check is it Array?

// now convert data to array
console.log(Array.from("Baba"));

// Interesting thing  []🤔
console.log(Array.from({name:"Baba"}));

// You can use "of" instead of "from"
let score1 = 20
let score2 = 30
let score3 = 40

console.log(Array.of(score1, score2, score3));  
