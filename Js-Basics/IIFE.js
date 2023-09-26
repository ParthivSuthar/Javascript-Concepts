// Note : Use Semicolon ; to end function

// Simple Function

function chai(){
    console.log("Good Morning");
}
chai();

Using IIFE () - 
(function coffee() {
    console.log("Good Evening");
})()  // this is IIFE

// ()() ~ coffee()IIFE()


// Using Arrow Functions

(function car(){            //THis is Name IIFE
    console.log("SUV");
})();

( () => {                    // This is Simple IIFE
    console.log(`Scorpio`);
})()


// If we want names

(function Info() {
    console.log("Hello");
})();

((nameD) => {
    console.log(`Good Morning ${nameD}`);
})("Rahul")
