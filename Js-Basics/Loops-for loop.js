// For Loop

// Print 0 to 9 👇

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}


// Condition in Loop

for(let i = 0; i<10; i++) {
    let element = i
    if(i == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}


// Loop inside Loop (Nested Loop)

for(let i=0; i<=10; i++) {
    console.log(`Outer loop value: ${i}`);
    for(let j=0; j<=10; j++) {
        console.log(`Inner loop value ${j} and outer loop ${i}`);
    }
}


// Print Table

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
    console.log(i + '*' + j + '=' + i*j);
        
    }
}


// Loops in Array 

let newArray = ['KGF','KGF2','SHOLAY']

for(let i=0; i<newArray.length; i++){
    const element = newArray[i]
    console.log(element);
}


// break and continue


// ** break **

for(let i=0; i<=10; i++) {
    if(i == 5) {
        console.log('5 is Detected');
        break
    }
    console.log(`Value of i is ${i}`);
}


// ** Continue **

for(let i=0; i<=7; i++) {
    if(i == 3) {
        console.log('I am not coming');
        continue
    }
    console.log(`the value of i is ${i}`);
}
