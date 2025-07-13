const myArray = [1, 2, 3, 4, 5, 6, 7]
const myHeros = ["hcnerg", "dihve", "kjdfvbkd"]

// console.log(myArray);
// console.log(myArray[3]);

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2[1]);

// Array methods

// myArr2.push(6)
// myArr2.pop()
// myArr2.unshift(12)                   // [ 12, 1, 2, 3, 4, 5 ]
// myArr2.shift()                       // [ 1, 2, 3, 4, 5 ]

// console.log(myArr2.includes(2));     // true
// console.log(myArr2.indexOf(5));      // 4

// const newArr = myArr2.join()

// console.log(newArr);                    // 1,2,3,4,5
// console.log(typeof newArr);             // string
// console.log(myArr2);


//---------------------------------------------------------------

//slice,  No (returns new array/string),   Copying part of array
// splice   Yes (changes array in place),  Adding/removing/replacing elements


console.log("A ", myArr2);        //    A  [ 1, 2, 3, 4, 5 ]

const myn1 = myArr2.slice(1, 4)

console.log(myn1);               // [ 2, 3, 4 ]
console.log("B ", myArr2);       // B  [ 1, 2, 3, 4, 5 ]