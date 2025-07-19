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
    console.log(key);            // it is not a iterable 
    
}



