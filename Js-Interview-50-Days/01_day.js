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

console.log(removeBuplicated([1, 2, 3, 4, 5, 6, 7, 7]));
