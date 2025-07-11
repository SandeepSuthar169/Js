// Primitive
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


//*---------------------------------------------------*

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