// 1 ------------ object --------------------
const myObject =  {
    js: 'javascipt',
    cpp:"C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} :- ${myObject[key]}`);       
}






//2 -------------- Array -----------------

const programming = ['js', 'py', 'php', 'java', 'C++', 'C#']

for (const key in programming) {
    // console.log(programming[key]);
    
}





//3 --------------- Map ------------------

const map = new Map()
map.set('IN',  "india")
map.set('USA',  "United States of America")
map.set('Fr',  "France")
map.set('IN',  "india")



for (const key in map) {
    // console.log(key);            // it is not a iterable 
    
}


// 4----------------------------------------------
const coding = ['js', 'py', 'php', 'java', 'C++', 'C#']
//4.1
coding.forEach( function (i) {
    // console.log(i);
    
})
//4.2
coding.forEach( (i) => {
    // console.log(i);
    
})

//4.3
function printMe(i) {
    console.log(i);
    
}
// coding.forEach(printMe)



//4.4
coding.forEach( (i, index, arr ) => {
    // console.log(i, index, arr);
    
} )



//5 ------------------------------------------------
// [{}, {}, {}]

const my_Coding = [
    {
        language_name: "AS",
        last_name: "BS"
    },
    {
        language_name: "CW",
        last_name: "BW"
    },
    {
        language_name: "RT",
        last_name: "YT"
    },
]

my_Coding.forEach( (i) => {
    
    console.log(i.language_name);
    console.log(i.last_name);
    
} )