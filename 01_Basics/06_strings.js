const name  = "sandeep"
const reproCount = "35"


// console.log(`hello ${name} and  my repo count is ${reproCount}`);

const gameName = new String('hahah-hao-kb');
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));       //  charactor position
// console.log(gameName.indexOf('h'));    //  charactor position

const newString = gameName.substring(0, 6)
// console.log(newString);

const anotherString = gameName.slice(-5, 2)
// console.log(anotherString);

 const newSrirngOne = "    sandeep    "
// console.log(newSrirngOne);             // "    sandeep    "
// console.log(newSrirngOne.trim());        // "sandeep"


const url = "https://sandeep.com/suthar$30&suthar"

console.log(url.replace('$30&', '-'));    // https://sandeep.com/suthar-suthar

console.log(url.includes('sandeep'))      //true

console.log(gameName.split('-'));