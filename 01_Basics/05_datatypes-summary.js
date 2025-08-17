// Primitive ------------- stack
// 7 types :-> String, Number, Booling, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEMail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);   // false

const bigNumber = 934759374592875n


//---------------------------------------------------*

// Reference [ Non Primitice]
// Array, Object, Functions

// Arrat
const heros = ["Iran_man", "Superman", "Spiderman", "Hulck"];

// Object
let myObj = {
    name : "sandeep",
    age : 20,
};

//Function
const myFunction = function(){
    console.log("Sandeep Hello");
}


// Stack (Primitive) --------------------and -------------------- Heap (Non - Primitive).

//Stack (Primitive)
let MyGithunAccount = "SandeepSuthar167"
let anotherAccount = MyGithunAccount
anotherAccount = "suthar-sandeep-167"

console.log(anotherAccount);
console.log(MyGithunAccount);



//--------------------------------------------
//Heap (Non - Primitive)
let userOne = {
    name : "users",
    iD : "uer123",
    num : 1290
}

let userTwo = userOne

userTwo.name = "sandeep123"

console.log(userOne.name);
console.log(userTwo.name);