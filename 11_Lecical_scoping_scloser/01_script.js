let fname = "sandeep"

function  sayName(){
    let fname  = "suthar"
    // 
    console.log(fname);
}

console.log("my name is:", fname);
sayName()
//Cannot redeclare block-scoped variable 'fname' 


// -----------------------------------------------------

function countNumber(){
    let num = 0
    return function (){
        num++
        return num
    }

}
// let a = countNumber()
// console.log(a())    //1
// console.log(a())    //2
// console.log(a())    //3
// console.log(a())    //4
// console.log(a())    //5


// let b = countNumber()
// console.log(b())   // 1
// console.log(b())   // 2
// console.log(b())   // 3
// console.log(b())   // 4
// console.log(b())   // 5

//-----------------------------------------------------



function createCounter(stepSize, initalValue){
    return function (){
        initalValue = initalValue + stepSize;
        return initalValue
    }
}

const e1 = createCounter(1, 10)
console.log(e1());  // 11
console.log(e1());  // 12
console.log(e1());  // 13
console.log(e1());  // 14
console.log(e1());  // 15
