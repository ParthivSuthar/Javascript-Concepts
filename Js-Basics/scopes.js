//{} is a Scope 

if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a); 
// console.log(b);
// console.log(c); // ✅ this will give value because of "var"


var c = 200  // This is GLobal Scope
if (true) {  // This is Block Scope
    let a = 10
    const b = 20
    var c = 30
}


// this is will execute (Block Scope👇)
let y = 10
if (true) {
    const x = 20
    let y = 30
}
// console.log(y); 

// This is will execute Global Scope

let ab = 200

if (true) {
    const aa = 300
    let ab = 230
    // console.log(ab);
}





