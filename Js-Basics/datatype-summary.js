// There are 2 two types of Data Type

// Primitive Data Type (value type) -> 7 types : String, Number, Boolean, Bigint, undefined, null, Symbol

const bigInt = 646946494949494949616n

let id = Symbol('2023')
let loggedId = Symbol('2023')

console.log(id === loggedId);  // Gives False


// Non - Primitive (reference type) -> Array, Object, Function

const villains = ["Gabbar", "Thanos", "Kirmada"];

let mainObject = {
    name: "Hello",
    age: 56,
    City: "keherva"
}

const myFunction = function() {
    console.log("Hello");
}

// To check datatype
console.log(typeof age);



