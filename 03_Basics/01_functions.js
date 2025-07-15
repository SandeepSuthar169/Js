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
// console.log(logingUserMessages("sandeep"));



// --------------------------------------------------------------------------------


function cartCalutePrice(...num1) {     // ... rest operator
        return num1
}

// console.log(cartCalutePrice(200, 500, 100, 500));            //  [ 200, 500, 100, 500 ]



//  ----------------------------------------------------------------------------------

function cartCalutePrice(val1, val2, ...num1) {     // ... rest operator
        return num1
}

// console.log(cartCalutePrice(200, 500, 100, 500));                // [ 100, 500 ]


// -----------------------------------------------------------------------------------

const user = {
    userName: "sandeep",
    age: 34
}
function handleUser(anyUsers){
    console.log(`User name is ${anyUsers.userName} and age is ${anyUsers.age}`)
}

// handleUser(user)                                                    // User name is sandeep and age is 34


// ---------------------------------

handleUser({
    username: "sam",
    age: 21                                       // User name is undefined and age is 21
})


// --------------------------------------------------------------------------------


const myNewArray = [200, 400, 100, 600]

function returnSecondUser(getArray){
    return getArray[1]
}
console.log(returnSecondUser(myNewArray));                 // 400



