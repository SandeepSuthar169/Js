// 1 ------------------------------------- IMP
const x = [1, 2, 3]

const total = x.reduce(function (acc, cu_val ) {
    // console.log(` acc: ${acc}, cu_cal ${cu_val}`);
    
    return acc + cu_val 
    
}, 0)

// console.log(total);


// 2----------------------------------------

const my_total = x.reduce( (acc, cu_val) => acc + cu_val, 0) 

console.log(my_total);


// ---------------- example -----------------------

const shopping_Cart = [
    {
        itern_mane : "a",
        price : 101
    },
    {
        itern_mane : "b",
        price : 202
    },
    {
        itern_mane : "c",
        price : 330
    }
]

const total_Pay = shopping_Cart.reduce( (x,i) =>  x + i.price, 0)

console.log(total_Pay);
