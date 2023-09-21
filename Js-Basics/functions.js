// Function Syntax 

function showMyName() {
    console.log("H");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}

showMyName()  // This will be Executed
showMyName // this is Reference


function addTwoNum(number1, number2) {
    console.log(number1 + number2);
}

addTwoNum() // Gives NaN - Not a Number

// Add Arguments and Parameters to Execute

function addTwoNum(number1, number2) {
    console.log(number1 + number2);
}

addTwoNum(8,3)


// How to execute function and store in Variable

function addTwoNum(number1, number2) {
    let result = number1 + number2
    console.log("Hello");
    return result
}

const result = addTwoNum(10,20)
console.log(result);


// This will not execute "Hello" because after returning result it will not give "Hello"
function addTwoNum(number1, number2) {
    let result = number1 + number2
    return result
    console.log("Hello");
}

const result1 = addTwoNum(20,20)
console.log(result1);


// An Easy way and without declaring variable

function multiTwoNum(number3, number4) {
    return number3 * number4
}

const multiple = multiTwoNum(2,3)
console.log(multiple);



// Instead of numbers in parameter and 2and3 in arguments , there are many ways to get value

function userLogedIn(username) {
    return `${username} Just Loged in`
}
console.log(userLogedIn("Rahul"));


