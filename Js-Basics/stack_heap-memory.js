// Stack(Primitive) and Heap (Non-Primitive)

let myNewNumber = "Hello123"

let myOldNumber = myNewNumber
myOldNumber = "Hello000"

console.log(myOldNumber);
console.log(myNewNumber);

// Ex  of Object

let userDetails = {
    name: "hello",
    age: 56,
    city: "Baroda"
}

let peopleDetails = userDetails
peopleDetails.city = "Lodra"

console.log(userDetails.city);
console.log(peopleDetails.city);

