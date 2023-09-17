let myDate = new Date()
console.log(myDate);  // Not a Proper way 

// Convert to String
console.log(myDate.toString());

// Type of Date
console.log(typeof myDate);

// To Get Date
console.log(myDate.toDateString());

// TO get Current Date and Time
console.log(myDate.toLocaleString());

// Here month starts from 0 ~ January
let newDate = new Date(2023,0,17)
console.log(newDate.toDateString());

// To get Particular date and time
let oneDate = new Date(2023,1,26,9,7)  //am and for pm - 21,7
console.log(oneDate.toLocaleString());

// Date format dd/mm/yyyy
let twoDate = new Date("2023-01-14")
console.log(twoDate.toLocaleString());

// TO check Timestamp (from Jan 1 1970)
let myTimeStamp = Date.now()
console.log(myTimeStamp);

// To compare with another Date (in miliseconds)
let threeDate = new Date("1-23-2023")
console.log(threeDate.getTime());

// To get round off figure in seconds
let mynewTimeStamp = Date.now()
console.log(Math.floor(Date.now()/1000));

// TO get Day, Month and Year
let onlyDate = new Date("2023.1.26")
console.log(onlyDate.getDate());
console.log(onlyDate.getDay());
console.log(onlyDate.getFullYear());