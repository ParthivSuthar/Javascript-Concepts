// Control Flow

// We don't want to execute all code at one time, some situation execute this control etc.


// => If

// if(true) {
    // Execute if (condition) is true
}

// // if(false) {
//     // Didnt Execute, if (condition) is false
// }


// Basic Operators 👇

// > - Greater than
// < - Less than
// >= - Greater than or Equal to
// <= - Less than or Equal to
// =  - Assign
// == - Equality sign
// === - Strict equality (data type also)
// != - Not Equal to
// !== - Strict inequality 


// Example 👇

if(2 == "2"){
    console.log("Executed");
}


// Not Executed

if (2 != "2") {
    console.log("Executed");
}


// Anti Inequality

if (2 !== "2") {
    console.log("Execute this Inequaltiy");
}


// Strict Equality 

if (2 === 2) {
    console.log("Check Strick Equality");
}


// If Conditions 👇

const temperature = 50

if (temperature > 100) {
    console.log("Too Hot");
}
console.log("Hot");         // It will 100% Execute, whether True or False


// If and Else

const run = 120

if (run > 1000) {
    console.log("Not so high");
} else {
    console.log("It is low score");
}


// Scope Related Concept 🔍

const score = 20

if (score > 10) {
    const power = "fly"
    console.log(`User Power : ${power}`); // Executed inside
}


// This will not execute

const number = 10

if(number > 5) {
    const hello = "buddy"
    console.log(`Hello ${hello}`);
}
console.log(`Hello ${hello}`);        // Not Execute this(Outside)




// Using "var" it will execute because of global scope pollution

const no = 230

if (no > 100) {
    var hello = "buddy"
    console.log(`Hello ${hello}`);
}
console.log(`Hello ${hello}`);


// Shorthand Notation 😀

const apple = 2
if(apple > 0) console.log("I have 2 apples");


// This is called "Implicit Scope" ☝️



// Bad Practice and Not Recommeded to Write ❌
const balance = 1000
if(balance > 3) console.log("Yes"), console.log("No");


// Multiple Conditions

const numeric = 1200

if (numeric > 2000) {
    console.log("greater than 2000");
} else if (numeric > 1500) {
    console.log("greater than 1500");
} else if (numeric > 1000) {
    console.log("greater than 1000");
} else {
    console.log("greater than itself");
}



// Using Logical Operators - &&(And) and ||(Or)

const userLoggedin = true
const userDebitCard = true

if (userLoggedin && userDebitCard) {
    console.log("Allow to Buy");
}

// 🔴 Note : Here both conditions must be true, if anyone is false, it will not give output.



// Using Or (||)

const userLoggedFromEmail = true
const userLoggedFromGoogle = false

if (userLoggedFromEmail || userLoggedFromGoogle) {
    console.log("You are Logged in");
}

// 🔴 Note : If any one condition should true, it will give output




// 2 - Switch Case

const month = 3

switch(month) {
    case 1:
        console.log("jan");
        break;
        
    case 2:
        console.log("feb");
        break;

    case 3:
        console.log("Mar");
        break;
}



// If there is String 

const name = "rah"

switch (name) {
    case "ram":
        console.log("Ramesh");
        break;
    case "rah":
        console.log("Rahul");
        break;
    default:
        break;
}



// Truthy ✅ and Falsy ❌ Values

//Truthy 👉 " ", [], {}, function(){}, "0", 'false'

// Falsy 👉 0, -0, 0n, BigInt, null, undefined, NaN


// Truthy 👇
const helloG = "buddy"

if (helloG) {
    console.log("Hello kaise Ho");
} else {
    console.log("Bye");
}


// Falsy 👇
const symbol = ""

if (symbol) {
    console.log("This is Symbol");
} else {
    console.log("Not a Symbol"); 
}



// For Empty Object {}
const emptyObj = {}

if (Object.keys(emptyObj). length === 0) {
    console.log("Object is Empty");
}

// Object.keys(emptyObj). -> this gives Array of Object




// Nullish Coalescing Operator (??) 

// It is used to check safety of null values

let pal;
pal = 10 ?? 20
console.log(pal);        // Gives 10



// But for Null Value 👇
let pal2;
pal2 = null ?? 20
console.log(pal2);              // Gives 20



// For Undefined 
let rose
rose = undefined ?? 23
console.log(rose);           // Same as Null gives - 23



// Interesting 😀
let gig
gig = 20 ?? 56 ?? 11
console.log(gig);           //Gives 1st Value only



// Ternary Operator (?)

// condition ? true : false

const iceCream = 20
iceCream > 10 ? console.log("very good"): console.log("not good");











