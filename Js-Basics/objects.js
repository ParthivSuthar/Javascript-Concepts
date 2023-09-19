// Objects //

// Object is of key-value pair.

// There are 2 ways to declare Objects

// 1 - Literal
// 2 - Constructor 

// In constructor, there is "Singleton" concept in which when we declare object through constructor, Singlton is created 

// 1 - Object Literals
// const JsUser = {}

const JsUser = {
    name: "Mahadev",
    age: "infinity",
    city: "Kedarnath",
    isLogin: false,
    email: "mahadev@kashi.com",
    lastLoginDays: ["Monday"]
}

// There are two ways to access property

// console.log(JsUser.name);
// console.log(JsUser["name"]);

// You can't access this property with dot (.)

const JsPser = {
    name: "Baba",
    "full name": "Baburao Vapte",
    age: 25,
    city: "Jaipur",
    email: "baba@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

// console.log(JsPser.name); 
// console.log(JsPser.full name);  gives error
// console.log(JsPser["full name"]); 


// How to access Symbol Property in Object

// First declare Symbol

const mySymbo = Symbol("Sym1")
console.log(mySymbo);

// Then add in Object
const JsTer = {
    name: "Baba",
    [mySymbo]: ["Sym1"],  // this give Object
    "full name": "Baburao Vapte",
    age: 25,
    city: "Jaipur"
}

// console.log(JsTer.mySymbo);
// console.log(typeof JsTer.mySymbo); // It gives String

console.log(JsTer[mySymbo]);
console.log(typeof JsTer[mySymbo]);  //✅ Type Object


// To change any Value

const personDetails = {
    name: "Rahul",
    age: 20
}

personDetails.age = 50
// console.log(personDetails.age);
// console.log(personDetails);


// To Freeze any Object
// Object.freeze(JsTer) 

// How to add Function in Object and it treats as Variable
personDetails.greeting = function() {
    console.log("Hello, Good Morning");
}

console.log(personDetails.greeting());


// how to take name reference from Object personDetails
personDetails.greetingTwo = function() {
    console.log(`Hello, Good Morning ${this.name}`);
}
console.log(personDetails.greetingTwo());



