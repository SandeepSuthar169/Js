let score = "sandeep"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNuber = Number(score)
// console.log(typeof valueInNuber);
// console.log(valueInNuber);

// "33" -> 33
// "33abc" -> NaN
// true -> 1, false -> 0

let isLoggedIn = "sandeep"
let boolenIsLoggenIn = Boolean(isLoggedIn)
// console.log(boolenIsLoggenIn);

// 1 -> true, 0 -> false
// "" -> false
// "sandeep" -> true

let someNumber = 33
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ------------------------Operation---------------------------------

let value = 2
let negValue = -value
// console.log(negValue)


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);


let str1 = "hello"
let str2 = " sandeep"
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2);            //  -> 12
// console.log(1 + "2");            //  -> 12
// console.log("1" + 2 + 3);        //  -> 123
// console.log(1 + 2 + "2");        //  -> 32


// console.log(true);                // true
// console.log(+true);              // 1
// console.log(true+);             // error
// console.log(+"");              //  0

// prefix and postfic js

let gameCounter = 100
gameCounter++;
console.log(gameCounter)            // 101

let GameCounter = 100
++GameCounter;
console.log(GameCounter)            // 101

