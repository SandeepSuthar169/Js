// for of

// ["", "", ""]
// [{}, {}, {}]

//1 -----------------------------------
const R = [1, 2, 3, 4, 5]

for (const K of R) {
    // console.log(K);
    
}

//2 ------------------------------------

const g = "hello world!"
for (const D of g) {
    // console.log(`Each char is ${D}`);
    
}

// 3 ------------- Maps ----------------

const map = new Map()
map.set('IN',  "india")
map.set('USA',  "United States of America")
map.set('Fr',  "France")
map.set('IN',  "india")

console.log(map);

for (const [K, value] of map) {
    // console.log(K, ": - " , value);
    
}


// 4-----------------------------------------

const myObject = {
    'game1': 'NFS',
    'game2': "spiderman"             // object is not iterable
}

for (const [key, value] of myObject) {
    // console.log(key, ":-> ", value)
    
}