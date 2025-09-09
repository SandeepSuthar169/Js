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

console.log(countChar("MiscInjhfitfjexcfjIwi", "I"));


//4 ------------------------------------------------------------------------------------
