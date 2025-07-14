//singletor
// Object.create

// object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "sandeep",
    0: "abc",
    "Full name" : "Sandeep Suthar",
    age: 12,
    email: "sandeep@rp.com",
    isLoggeIn: false,
    lastLogin: ['AS', "as"],
    [mySym]: "myKey1"             // Symbol
}


// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["Full name"])
// console.log(Jsuser[mySym])    //   myKey1   **

// ------------------------------------------ 

Jsuser.email = "suthar@sandeep.com"
// console.log(Jsuser)

// Object.freeze(Jsuser)          // *
Jsuser.email = "suthar@ss_sandeep.com"
// console.log(Jsuser)

// -----------------------------------------

Jsuser.greeting = function(){
    console.log("Hello js user");
}
Jsuser.greetingtwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

// console.log(Jsuser.greeting());       // undefined 
// console.log(Jsuser.greeting);       // [Function (anonymous)]

console.log(Jsuser.greetingtwo());      // Hello js user, sandeep