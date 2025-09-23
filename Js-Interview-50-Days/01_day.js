//1 --------------------------------------------------------------------------------------
const findlongWOrd  = function(str){
    words = str.split(" ")
    console.log(words);
    
    return words.reduce((accumulator, currentValue) => currentValue.length > accumulator.length ?  currentValue : accumulator, "" )

} 


// console.log(findlongWOrd("faj dfak kdjflks sdjfksf"));


//2 --------------------------------------------------------------------------------------
const firstWordValue = function (str){
    str = str.split(" ")
    console.log(str);
    
    str = str.map((n) => n.replace(n[0] ,n[0].toUpperCase()))
        console.log(str);
    str = str.join(" ")
    return str
        
}


// console.log(firstWordValue("my name is sandeep suthar"));


//3 ---------------------------------------------------------------------------------------


const countChar = function (name, namechar)  {
    name = name.toLowerCase().split("")    
    namechar = namechar.toLowerCase()

    const result = name.reduce((accumulator, currentValue) => {
        if(currentValue === namechar){
            accumulator++
        }
        
        return accumulator
    }, 0)
    return result
    
}

// console.log(countChar("MiscInjhfitfjexcfjIwi", "I"));


//4 ------------------------------------------------------------------------------------

const checkTraingleType = function(a, b, c){
    if(a === b && b === c){
        return "equilatral"

    } else if (a === b || a === c || b === c) {
        return "isoscels"

    } else {
        return "scalence"

    }
}

// console.log(checkTraingleType(3, 3, 3));
// console.log(checkTraingleType(3, 4, 3));
// console.log(checkTraingleType(6, 1, 3));

//5 -----------------------------------------------------------------------------------

const sortAscendings = (arr) => {

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < i; j++){
            if(arr[i] < arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    } 
    return arr
}
    

// console.log(sortAscendings([4, 3, 7, 6, 10]));

//6 ----------------------------------------------------------------------------------

const isPalindrome = function(str){
    str = str.toLowerCase().replace(/\s+/g, "")
    console.log(str);
    
    let strs = str.split("").reverse().join("")
    console.log(strs);

    if(str === strs){
        return true
    } else {
        return false
    }
    
}

// console.log(isPalindrome("A man12 a plan aq canal"));




//7 ----------------------------------------------------------------------------------

const maxNumber = (array) => {
    return Math.max(...array)
}

// console.log(maxNumber([1, -4, 893, 0, -1, 199, -999]));





// 8 ----------------------------------------------------------------------------------

const factorial = (num) => {
    let fact = 1
    for(let i = 1; i<= num; i++){
        // console.log(i);
        fact = fact * i
    }
    return fact
}

// console.log(factorial(5));




//9 ----------------------------------------------------------------------------------

const calculateAverage = (array) => {
    console.log(array.length);
    
    const a = array.reduce((accumulator, currentValue) => accumulator + currentValue )
    return a / array.length
}


// console.log(calculateAverage([5, 10, 2, 8]))




// 10 ----------------------------------------------------------------------------------    

const arrayEqul = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false
    }

    let a  = arr1.every((currentValue, index) => currentValue === arr2[index])

    return a
}

// console.log(arrayEqul([1, 2, 3], [1, 2, 3]))   // true
// console.log(arrayEqul([1, 2, 3], [1, 2, 4]))   // false
// console.log(arrayEqul([], []))                 //true


// 11 ----------------------------------------------------------------------------------

const sumDigits = (arr) => {
    let a = Array.from(String(arr), Number)
    let b = a.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return b   
}

// console.log(sumDigits(1234));



// 12 ----------------------------------------------------------------------------------

const removeBuplicated = (array) => {
    let newArr  = array.filter((accumulator, currentValue) => 
        array.indexOf(accumulator) === currentValue
    )
    return newArr
}

// console.log(removeBuplicated([1, 2, 3, 4, 5, 6, 7, 7]));




// 13 ----------------------------------------------------------------------------------

const countVowels = (str) => {
    let vowels = ["a", "e", "i", "o", "u"]

    let count = 0
    let strs = str.toLowerCase().split("")
    console.log(strs);
    
    for(let i = 0; i<strs.length; i++){
        if(vowels.includes(strs[i])){
            count++
        }
    }
    return count

    
}

// console.log(countVowels("sandeep suthar"))



// 14 ----------------------------------------------------------------------------------


function isPowerOfTwO(num){
    let values = false
    for(let i = 1; i < num; i++){
        if(2 ** i === num){
            values = true
        } 
    }
    return values
}


// console.log(isPowerOfTwO(8));


// 15 ----------------------------------------------------------------------------------

function sunOfSquares(array){
    return array.map((n) => n** 2).reduce((accumulator, currentValue) => currentValue + accumulator)
}


// console.log(sunOfSquares([1, 2, 3]));




// 16 ----------------------------------------------------------------------------------

function findMin(array){
    return array.reduce((accumulator, currentValue) => currentValue < accumulator ? currentValue : accumulator)
}



// console.log(findMin([5, 10, -2, 0, 100]));




// 17 ----------------------------------------------------------------------------------

function toCamelCase(string){
    let a = string.split(" ").map((n) => n.replace(n[0], n[0].toUpperCase())).join("")
   return a.replace(a[0], a[0].toLowerCase())
}

// console.log(toCamelCase("hello world sandeep"));


//18 ----------------------------------------------------------------------------------

const CharCaseUpperLower = (char) => {
    // if(char === char.toUpperCase()){
    //     char = true
    // } else {
    //     char = false
    // }
    // return char
                                // or
                                     
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 ){
        char = true
    } else {
        char = false
    }
    return char
}



// console.log(CharCaseUpperLower("r"));



//19 ----------------------------------------------------------------------------------

function startWith(str, str1){
    let a = str.toLowerCase().split(" ")[0]
    let b = str1.toLowerCase().split(" ")[0]

   return a === b   // return true or false
                                             
                                // or 

    // return str.toLowerCase().startWith(str1.toLoweCase())    // return true or false

}

// console.log(startWith("Hello world", "hello"));



// 20 ----------------------------------------------------------------------------------

function reverseString(str){
    let a = "";
    for(let i = str.length - 1; i >= 0; i--){
        a = a +  str[i]
    }
    return a
}

// console.log(reverseString("hello"));



// 21 ----------------------------------------------------------------------------------

function calculateMean(arr){
    let a = arr.reduce((acc, curr) => curr + acc)
    console.log(a / arr.length);
    
}

// calculateMean([1, 2, 3, 4, 5, 6])


// 22 ----------------------------------------------------------------------------------

const findMedian = (array) => {
    let newArr = array.sort((a, b) => a-b)
    console.log(newArr);
    let length = newArr.length
    let a = Math.floor(length / 2);
    
    if(length % 2 === 1){
        return newArr[a]

    } else {
        let sum = newArr[a -1] + newArr[a];
        return sum / 2
    }
    
}

// console.log(findMedian([4, 3, 8, 1, 8, 6, 9]));   //  odd
// console.log(findMedian([4, 3, 8, 1, 8, 6, 9, 12]));   // even


// 23 ----------------------------------------------------------------------------------

const obj = {}
obj['name'] = "sandeep"  // {key: 'value'}

// console.log(obj);   // { name: 'sandeep' }
// console.log(obj['name']);   // 'sandeep'



const number = [1, 2, 3, 3, 9, 10, 10, 10, 1]
let counts = {};

for (let i of number){
    counts[i] = (counts[i] || 0) + 1
}
// console.log(counts);


// 24 ----------------------------------------------------------------------------------

function findMode(array) {
    let consts = {}
    for(let i of array){
        consts[i] = (consts[i] || 0) + 1        
    }
    console.log(consts);

    let maxVlaueWithKey = Object.keys(consts).reduce((a, b) => consts[a] > consts[b] ? a : b)
    console.log(maxVlaueWithKey);    
}

console.log(findMode([1, 2, 2, 3, 1, 4, 2]));



