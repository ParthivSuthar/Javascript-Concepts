const score = 55
console.log(score);

const scoreOne = new Number(200)
console.log(scoreOne); 

const runRate = new Number(10)
console.log(runRate.toString);

// console.log(runRate.toString().length); //find length

// ** To get fixed digits after decimals
const newNumber = new Number(23)
console.log(newNumber.toFixed(2));


// ** To get precised value
const newNumberOne = new Number(121.36)
console.log(newNumberOne.toPrecision(3));


// to get Us and India Standard readability
const jobs = new Number(2323232323)
console.log(jobs.toLocaleString());

// India Standard
console.log(jobs.toLocaleString('en-IN'));


// **** Maths ****

console.log(Math.round(2.35)); 

console.log(Math.abs(-9));

console.log(Math.ceil(2.6)); // top value
console.log(Math.floor(2.6)); // bottom value

console.log(Math.min(2,6,1,3)); // Min value
console.log(Math.max(55,6,11,2)); // max value

console.log(Math.random()); // random 0-1

console.log((Math.random()*10) + 1); // to avoid 0.05, 0.041

console.log(Math.floor(Math.random()*10) + 1); // to get lowest round off number

// Set Min and Max 👇
const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max-min+1)) + min);