// const User_Email = "Sandeep@gmail.com"

// if (User_Email) {
//     console.log("got user email");
// } else {
//     console.log("Don't have user email");
// } 


// const User_Email = []

// if (User_Email) {
//     console.log("got user email");
// } else {
//     console.log("Don't have user email");
// } 

// falsy values  ------------------------------------------ IMP
// false, 0, -0, BinInt 0n, "", null, undefined, NaN


//truthy values --------------------------------------------IMP
// "0", 'false', " ", [], {}, function(){}
   
const User_Email = []          // Arry

if (User_Email.length === 0) {
    console.log("array is empty");
}

const empty_obj = {}            // Object

if (Object.keys(empty_obj).length === 0) {
    console.log("Object is empty");
    
}


// Nullish Coalescing Operator (??) : null, undefined -------------------- IMP

let val1;
val1 = 5 ?? 10
console.log(val1);    // -> 5


val1 = null ?? 10
console.log(val1)      // -> 10

val1 = undefined ?? 15
console.log(val1)      // -> 15

val1  = null ?? 58 ?? 35
console.log(val1);     // -> 58


// Terniary Operator ----------------------- IPM

// condition ? true : false

const ice_tea_Pice = 100

ice_tea_Pice >= 80 ? console.log("less than 80") : console.log("more than 80");

ice_tea_Pice <= 80 ? console.log("less than 80") : console.log("more than 80");
b