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
    

console.log(sortAscendings([4, 3, 7, 6, 10]));