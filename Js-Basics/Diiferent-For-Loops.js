// For of 

// This is Array and Object specific loop

const arr = [2,3,5,6]

for(const num of arr) {
    // console.log(num);
}


// In String Part

let nameA = "Rajesh"

for(const i of nameA) {
    // console.log(i);
}


// Remove space and Continue
const greeting = "Hello World"

for(const i of greeting) {
    if(i == " ")
    continue
    // console.log(`Each char is ${i}`)
}



// Maps 

const map = new Map()
map.set('IN', "India")
map.set('Fr', "France")
map.set('Pak', "Pakistan")

// console.log(map);
// console.log(typeof map);



// For of loop in Map

const map2 = new Map()

map2.set('Apple', "Red")
map2.set('Banana', "Yellow")
map2.set('Guava', "Green")

for(const [key, value] of map2) {
    // console.log(key, ':-', value);
}



// For in Loop 
const person = {
    name: "Royal",
    age: 55,
    color: "black",
    height: 172
}

for(const key in person) {
    // console.log(key);
}



// To Print Object

const userID = {
    customerName: 'Rajesh',
    buyItems: 'Soap',
    cityName: 'Rajpur'
}

for(const key in userID) {
    // console.log(`Left side of ${key} is goes to values ${userID[key]}`);
}



// To Print Values

const userId2 = {
    customerName: 'Rajesh',
    buyItems: 'Soap',
    cityName: 'Rajpur'
}

for(const key in userId2) {
    // console.log(userId2[key]);
}



// For in Loop in Array

const fruits = [5,6,8,9]

for(const i in fruits) {
    // console.log(fruits[i]);
}



// For Each Loop

const city = ['Rajpur','jaipur','Mahesana']

city.forEach( function (item) {
    console.log(item);
})


// basic CallBack Function using Arrow function

const car = ['BMW', 'ACD', 'VVR']

car.forEach( (item) => {
    // console.log(item);
})



// Another Variation using Reference of another function

function printMe(item) {
    // console.log(item);
}

const tree = ['Neem', 'Banyan']

tree.forEach(printMe)



// There are different parameters

const veg = ['tomato','potato']

veg.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})



// Objects in Array (Most Important Operation to get data from Databases)

const bikes = [
    {
        bikeName: "Honda",
        bikePrice: 560000
    },

    {
        bikeName: "Yamaha",
        bikePrice: 100000
    },

    {
        bikeName: "BMW",
        bikePrice: 250000
    }
]

bikes.forEach( (item) => {
    console.log(item.bikePrice);
})







