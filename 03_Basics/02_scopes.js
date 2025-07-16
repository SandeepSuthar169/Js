let a = 400

if (true) {
    let a  = 20
    const b = 30
    // console.log("INER" , a)
}

// console.log(a); 
// console.log(b); 
// console.log(c); 

// nested scopes --------------------------------------------------

function one(){
    const usernae = "sandeep"

    function two() {
        const pages = "file"
        // console.log(usernae);
    }
    // console.log(pages);

    two()
    
}
one()

// ----------------------------------------------

// if (true) {
//     const username = "sandeep"
    
//     if (username === "sandeep") {
//         const pages = " sites"
//         console.log(username + pages);
        
//     }
//     // console.log(pages);
    
// }
// // console.log(usernae);

console.log(addone(4))

function addone(num) {
    return num + 1
}

console.log(addTwo(4));

const calculate = function addTwo(num) {
    return num + 2
}

console.log(calculate)