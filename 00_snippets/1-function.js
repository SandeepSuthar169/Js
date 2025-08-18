// 1 --------------- classic function -------------


function functionName(paramters){
    // codes   ||   body
}
functionName('arguments')  





// 2 -------------- Scopes ------------------

// Global scopes ---------------------

let Gscop = "hello world"  // Global scopes --

function GlobalFunction(){
    console.log(Gscop);
}
GlobalFunction();     
// console.log(Gscop);


// Local Scope -----------------------------

function localFunction(){
    let Lscop = 'hello world'   // Local Scope --
    console.log(Lscop);   
    
}
localFunction()



// 3 ---------- Arrow Function ------------
const sumNum = (x, y) => {
    return  x + y
}
console.log(sumNum(1, 1));





//4 ---------------  IIFE ( Immediately Invoked function Expression ) or ( ) ---------------

const sum = (function(a, b){
    return a + b;    
})(1, 1)

console.log(sum);

//             or   

const sums = ((a, b) =>{
    return a + b;
})(1, 1)

console.log(sums);

// 5 ---------------- Closures ------------------

function parent(){
    let word = 'hello wordl'

     function child(){
        console.log(word);
        
    }
    child()

};
parent()
// --------- HOF ( Higher-Order Function )-------------------
// Takes another function as an argument, Return a function 
function  firstNum(a){
    return function lastNum(b){
        return a + b
    }
}
const ok = firstNum(1)
const ok1 = ok(1)
console.log(ok1);
//