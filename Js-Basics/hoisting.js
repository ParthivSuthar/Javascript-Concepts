// Nested Functions

function one() {
    const username = "Rahul"

    function two() {
        const website = "Tumblr"
        // console.log(username);
    }
    // console.log(website); // this will not execute

    // two()  this will execute
}

// one()  // this will not execute


// Functions in if else

if (true) {
    const username = "Baba"

    if (username === "Baba") {
        const website = " Youtube"
        // console.log(username + website); // ✅
    }
    // console.log(website);  this will not execute
}

// console.log(username);  this will not execute


// Interesting Concept - Hoisting


console.log(addOne(2));  // this will execute
function addOne(num) {
    return num + 1
}



console.log(addTwo(3)); // this will not execute
const addTwo = function(num) {
    return num + 2
}

// here both are functions, but addTwo is called as expressions is like variable 

// This is called “hoisting” in which tells where to store functions, how to declare functions .




