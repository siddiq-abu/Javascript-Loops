/// WHILE LOOP ///

// let count  = 1

// while (count <= 100){
//     console.log(count);
//     count = count + 1 ;
// }


/// FOR LOOP ///

// for (let i = 0 ; i < 100 ; i = i + 1){
//     console.log(i);
// }

// EXAMPLES //

// // (Q1) Write a for loop that loops through 1 to 20 //
for (let i = 1 ; i <= 20 ; i++){
console.log(i);

// (Q2) If the number divisible by 3 and 5, print "Frontend Simplified" //
if (i % 3 === 0 && i % 5 === 0){
    console.log(`${i} -> Frontend Simplified`);
}

// (Q2) If the number divisible by 3, print "Frontend" //
else if (i % 3 === 0){
    console.log(`${i} -> Frontend`);
}


// (Q2) If the number divisible by 3, print "Simplified" //
else if (i % 5 === 0){
    console.log(`${i} -> Simplified`);
}

// (Q2) If the number is not divisible by either 3 or 5, Print the number //
else{
    console.log(`${i} -> ${i}`);
}



}


/// EG02 ///

// Print out every character from the string: "frontend Simplified" //

const str ="Frontend simplified"

for (let i = 0 ; i < str.length; ++i) {
    console.log(str[i]);
}

