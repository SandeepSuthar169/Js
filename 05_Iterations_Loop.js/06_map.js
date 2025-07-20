const my_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const R = my_num.map( (T) => T + 10)
// console.log(R);
//--------------------------------------------------------

//1
const my_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//2
const Rs = my_nums.map( (T) =>{ 
    return T + 10
})
// console.log(Rs);


//3
const newNUMs = my_nums
                .map( (F) => F * 10 )
                .map( (F) => F + 1 )
                .filter( (F) => F >= 40)
            
console.log(newNUMs);
