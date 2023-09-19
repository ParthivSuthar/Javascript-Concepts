// Singleton Objects
const userId = new Object()
console.log(userId);

// Non-Singleton Objects
const userId2 = {}
console.log(userId2);

const personDetails = {}
personDetails.id = "tot22"
personDetails.name = "Toto"
personDetails.city = "Goa"

console.log(personDetails);


// How to access objects in objects
const personId = {
    age: 20,
    fullname: {
        userfullname: {
            firstname: "Baba",
            lastname: "Jai"
        }
    }
}

console.log(personId.fullname.userfullname.lastname);


// Merge or Combine Objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);


// Using Spread Operator 😀
const obj4 = {...obj1, ...obj2}
console.log(obj4);


// Objects in Arrays in Databases
const personInfo = [
    id1 = {
        name: "nana",
        age: 98
    },
    id2 = {
        name: "lala",
        age: 85
    }
]

console.log(personInfo[1].age);


// How to get keys and values
console.log(personDetails);

console.log(Object.keys(personDetails));
console.log(Object.values(personDetails));


// Make key-value pair into Arrays
console.log(Object.entries(personDetails));

// Check whether this data is exist or not?
console.log(personDetails.hasOwnProperty('village'));