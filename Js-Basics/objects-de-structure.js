// Object De-Structure

const course = {
    name: "Js Hindi",
    price: "899",
    courseInstructor: "Baba"
}

const {courseInstructor: instructor} = course
// console.log(courseInstructor); 
console.log(instructor);  // this is called Object De-structure

// In Api , Values which are get in "Json" Format

{
    "name": "Hello",
    "price": "888",
}

