// Using THIS

const user = {
    name: "Ramesh",
    age: 20,

    welcomeMessage: function() {
        console.log(`${this.name}, Welcome Bhai`);
    }
}

user.welcomeMessage()


// Now change the name

const userX = {
    nameX: "Ramesh",
    age: 20,

    thisAge: function() {
        console.log(`This is not my Age ${this.age}`);
    }
}
// userX.thisAge()
userX.age = 50
userX.thisAge()


// When Print "THIS"

const writer = {
    nameW: "Soordas",
    age: 20,

    myNameTab: function() {
        console.log(`my name is ${this.nameW}`);
        console.log(this);
    }
}
writer.myNameTab()
writer.nameW = "PritamDas"
writer.myNameTab()


// This give Empty Object {}
const carName = {
    carN: "Bmw",
    year: 1998,

    myCar: function() {
        console.log(`this is my new ${this.carN}`);
        console.log(this);
    }
}
console.log(this);



// Print 'THIS' in Scope
function coffee() {
    console.log(this);
}
coffee()



// This give Undefined
function chai() {
    let chaiN = "Baba"
    console.log(this.chaiN);
}
chai()



// ARROW Function

// Basic Arrow Function
const chaiPyali = () => {
    let username = "Lala"
    console.log(this);
}
chaiPyali()


const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(2,3));


// Here come "Implicit Return" which form a single statement in that we don't want to write "return" and {}

const subTwo = (num3, num4) => (num3 - num4)
console.log(subTwo(6,4));

// Note : Implicit Return: Not to write "return"
//        Explicit Return: must write {}


// Object in Arrow Functions
const details = () => ({nameL: "BB"}) 
console.log(details());

