// Filter 👇

// => Filter also take callback function
// => Filter give values that stored in variable
// => Filter gives values which are only true
// => Filter use Conditions to filter out values 
// => Filter is True and False Game ✅❌

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNums.filter( (num) => num > 5)
// console.log(newNum);   


// One Important to remember is that if we write {} (Scope) we have to write return 👍

const oldInt = [1,2,3,4,5,6,7]

const newInt = oldInt.filter( (Int) => {
    return Int > 5
})

// console.log(newInt);




// If we want to write same in ForEach Loop

const square = [2,4,6,8,10,12]

const newSquare = []

square.forEach( (sqr) => {
    if(sqr > 6) {
        newSquare.push(sqr)
    }
})

console.log(newSquare);



// Real Word usage of Filter 😀 

const books = [
    { title: "Book One", genre: "Fiction", publish: 1989, edition: 2001},
    {title: "Book Two", genre: "History", publish: 1988, edition: 2012},
    {title: "Book Three", genre: "Non Fiction", publish: 1990, edition: 2020},
    {title: "Book Four", genre: "History", publish: 1889, edition: 2013},
];

let userBook = books.filter( (bk) => bk.genre === 'History')

// To use {} (Scope) we have to write return 👇
userBook = books.filter( (bk) => {return bk.publish >= 1985})

// For Multiple Conditions 👇
userBook = books.filter( (bk) => {
    return bk.publish >= 1988 && bk.genre === 'History'
})
console.log(userBook);


//----------------- Map -------------------------//

const myNumeric = [1,2,3]

const newNumeric = myNumeric.map( (numeric) => numeric + 10 )
console.log(newNumeric);

// => If we open {} Scope , we have to write return as same as filter. ✅


// Chaining Method - (Use two or more methods at same time 😀)

const car = [1,2,3]

const newCar = car
                .map( (model) => model * 10)
                .map( (model) => model + 1)
                .filter( (model) => model >= 20)
console.log(newCar);



// ------------------ Reduce ----------------------//

const myNumers = [1,2,3]

// const myTotal = myNumers.reduce(function (acc, curval) {
//     console.log(`Accumulator: ${acc} and Currentvalue: ${curval}
//     `);
//     return acc + curval
// }, 0)

// With Arrow Function () => ()
const myTotal = myNumers.reduce( (acc, currval) => acc + currval, 0 )

console.log(myTotal);



// RealWorld Use of Reduce in Shopping Cart

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },

    {
        itemName: "C++ Course",
        price: 1999
    },

    {
        itemName: "C Course",
        price: 899
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);











