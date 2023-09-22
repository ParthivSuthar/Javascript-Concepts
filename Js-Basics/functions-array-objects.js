function myProductPrice(num1) {
    return num1
}

console.log(myProductPrice(2525));

// But if there are more values 😀Use Rest Operator
function shopNumber(...num2) {
    return num2
}

// console.log(shopNumber(500,501,503));

// Rest and Spreator are same but you should know when to use

// Very Interesting in Rest Operator 👇😀

function carNumber(val1, val2, ...num3) {
    return num3
}

console.log(carNumber(2020,2503,6520,2323));
// Here val1 take 2020, val2 take 2503 and Rest will give all values.


// Function with Objects 
const personId = {
    username: "Ram",
    age: 25
}

function getAge(personAge) {
    console.log(`Username is ${personAge.username} and my Age is ${personAge.age}`);
}

getAge(personId)


// But if you change price to "prices", it will give undefined

// Another way to pass Objects

const bikeNumber = {
    plateNo: "2020Ab",
    year: 1998
}

function getNumber(bikePlateNo) {
    console.log(`My bike number is ${bikePlateNo.plateNo} and this is since ${bikePlateNo.year}`);
}

getNumber(bikeNumber) //1st way
getNumber({           // 2nd Way
    plateNo: "2020CD",
    year: 2020
})


// Functions with Arrays

const fruitPack = [202,236,252,56,899]

function packNumber(pack) {
    return pack[2]
}

console.log(packNumber(fruitPack));

// Another way

const findNumber = [0,2,3,6,9]

function getUniqueNumber(num_1) {
    return num_1[3]
}

console.log(getUniqueNumber([0,6,9,10]));




