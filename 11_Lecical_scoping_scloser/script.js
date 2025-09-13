let fname = "sandeep"

function  sayName(){
    let fname  = "suthar"
    // 
    console.log(fname);
}

console.log("my name is:", fname);
sayName()
//Cannot redeclare block-scoped variable 'fname' 


//-----------------------------------------------------

function countNumber(){
    let num = 0
    return function (){
        num++
        return num
    }

}
let a = countNumber()
console.log(a())
console.log(a())
console.log(a())
console.log(a())

let b = countNumber()
console.log(b())
console.log(b())
console.log(b())
console.log(b())