// Array is written in []

const myArr = [1,2,3,4,5]
console.log(myArr);

console.log(typeof myArr); // Object

console.log(myArr[0]); // to access element

// There are 2 ways to declare Arrays

const myHeroes = ["ironman, hulk"]  // 1 
console.log(myHeroes);

const myVillains = new Array('Rolex, Gabbar')  //2
console.log(myVillains);

// Array Methods //

const newArr = [1,2,3,4,5,6,7]
newArr.push(10)  //To add elements to the end
console.log(newArr);

newArr.pop()  // To remove elements from the end
console.log(newArr);

newArr.unshift(100) //add elements to start
console.log(newArr);

newArr.shift() // remove elements from start
console.log(newArr);

console.log(newArr.includes(5)); //check element present in array

console.log(newArr.indexOf(10)); // return index of value in array if not return -1

const uniqueArr = newArr.join() // convert them into string
console.log(uniqueArr);
console.log(newArr);

// Slice and Splice
const oneArr = [2,3,4,5,6,7,8,9,10]

const myn1 = oneArr.slice(2,3) // it give copy of start to end
console.log(myn1);
console.log("A ", oneArr);

const twoArr = [1,2,3,4,5,6,7,8,9,10]
const myn2 = twoArr.splice(2,5) // It removes from original array
console.log("B ", twoArr);
console.log(myn2);
