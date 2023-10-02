// Call Stack is used to track multiple calling functions

// It is based on Principle called LIFO (Last in First Out)

function one() {
    console.log("One");
}
one()

function two() {
    console.log("Two");
}
two()

function three() {
    console.log("Three");
}
three()


// => You can see Call Stack in Browser
// - First open Chrome
// - Right click – Inspect
// - Source -> Snippets-> New Snippets
// - Enter callstack.js
// - Write this  👇
function a() {
    console.log("A")
}
a()

function b() {
    console.log("B")
}
b()

// -> Ctrl + S to Save  (Don’t Forget)
// -> Press ctrl + enter or Play button downside to show


