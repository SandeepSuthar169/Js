const marvel_heros = ['thor', 'Iranman', 'spiderman']
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)                    // [ 'thor', 'Iranman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros);

// console.log(marvel_heros[3]);            //  [ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[3][1]);         //  flash

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);         // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// console.log(array3);               

//-------------------------------------------------------------------------------------

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);


// ------------------------------------------------------------------------------------

const another_array = [1, 2 ,3, [4, 5, 6, [7, 8, 9, [1, 6, 7]]]]

const real_another_array = another_array.flat(2)     // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 1, 6, 7 ] ]
// console.log(real_another_array);


const real_another_arrays =  another_array.flat(Infinity)
// console.log(real_another_arrays);                    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 6, 7


//-------------------------------------------------------------------------------------- 

console.log(Array.isArray("Sandeep"))                   // false
console.log(Array.from("Sandeep"))                      // ['S', 'a', 'n', 'd', 'e', 'e', 'p']
console.log(Array.from({name: "Sandeep"}))              // {}

// ---------------------------------------------------------------------------------------

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));           // [ 100, 200, 300 ] 