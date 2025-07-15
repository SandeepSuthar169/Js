function sayMyName() {
    console.log("S"); 
    console.log("A"); 
    console.log("N" ); 
    console.log("D");
    console.log("E");
 
}

// sayMyName        // reference parts
// sayMyName()      // execution



// function addTwoNumbwers(numbwe1, numbwe2) {
//     console.log(numbwe1 + numbwe2)
// }

// addTwoNumbwers(3, 4)        // 7
// addTwoNumbwers(3, "4")        // 34
// addTwoNumbwers(3, "a")          //3a
// addTwoNumbwers(3, null)        // 3

//Result:->  undefined

//-----------------------------------------------------------------------------
function addTwoNumbwers(numbwe1, numbwe2) {
    // let result = numbwe1 + numbwe2
    // return result

    return
}


const result = addTwoNumbwers(3, 5)
// console.log("Result:-> ", result);            // 8






//-----------------------------------------------------------------------------
// function logingUserMessage(username) {
//     return `${username} just logged in`
// }

// console.log(logingUserMessage("sandeep"));
// console.log(logingUserMessage());  // ->  undefined just logged in



// or ------------------------------------------------------------------

function logingUserMessages(usernames) {
    if(usernames === undefined) {
        console.log("please enter a name");
    }
    return `${usernames}just logged in`
}
// console.log(logingUserMessages());



function logingUserMessages(usernames) {
    if(!usernames) {
        console.log("please enter a name");
    }
    return `${usernames} just logged in`
}
console.log(logingUserMessages("sandeep"));