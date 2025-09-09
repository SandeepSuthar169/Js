//1---------------------------------------------------------------------------------------
const findlongWOrd  = function(str){
    words = str.split(" ")
    console.log(words);
    
    return words.reduce((accumulator, currentValue) => currentValue.length > accumulator.length ?  currentValue : accumulator, "" )

} 


// console.log(findlongWOrd("faj dfak kdjflks sdjfksf"));


//2---------------------------------------------------------------------------------------
const firstWordValue = function (str){
    str = str.split(" ")
    console.log(str);
    
    str = str.map((n) => n.replace(n[0] ,n[0].toUpperCase()))
        console.log(str);
    str = str.join(" ")
    return str
        
}


console.log(firstWordValue("my name is sandeep suthar"));
