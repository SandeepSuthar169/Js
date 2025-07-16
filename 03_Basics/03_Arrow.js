const user = {         // ------------------IMP
    username: "sandeep",
    age: 20,


    welcomeMessage: function(){
        console.log(`${this.username}, welcome to pages`);
        console.log(this)
        
    }

}


// user.welcomeMessage()    //sandeep, welcome to pages
// user.username = "sam"
// user.welcomeMessage()    // sam, welcome to pages

// console.log(this);       // {}

// ----------------------------------------IMP
// function chai(){
//     let username = "sandeep"
//     console.log(this.username);      // undefined
// }
// chai()


// const chai = function(){           --------------- 
//     let username= "sandeep"
//     console.log(this.username);
    
// }
// console.log(chai());          // undefined


// ------------------------------------------IMPs
const chai = () => {            
    let username= "sandeep"
    console.log(this.username);
    
}
// chai()                            // undefined


// -----------------------------------------------
const chais = () => {            
    let username = "sandeep"
    console.log(this);
    
}
// chais()                            //  {}






// explicit return ------------------------------------  IMP

() => {}


const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(4, 8))                     // 12







// implicit return ------------------------------------  IMP


const addTwos = (num1, num2) =>  num1 + num2                                // 1
console.log(addTwos(4, 7));                    // 11



const addTws = (num1, num2) =>  (num1 + num2)                               // 2
console.log(addTws(4, 7));                    // 11



const addTosw = (num1, num2) =>  ({username: "sndeep"})                      // 3
console.log(addTosw());                                    // { username: 'sndeep' }



// ____________________________________________________ Ex

const myArry = [1, 2, 3, 4, 5, 6, 7]

myArry.forEach( () => {

})