// OOPs

//object -> collection of properties and methods

//types of OOps
//     \-> Abstraction, Encapsulation, Inheritance, Polymorphism 

//       \-> Objecy literal
//            \-> COnstructor function, Protitypes, Classes, Intances (new, this)



//------------------------------------------------------------

const user = {
    username: "sandeep",
    loginCount: 1,
    logIn: true,

    getUserDatails: function(){
        console.log("skjdfksruhvnsjvn");
        console.log(this);
        
    }
}

// console.log(user["username"]);
// console.log(user.username);
// console.log(user.getUserDatails());
// console.log(this);


//--------------------------------------------------------------

// const promiseOne = new Promise()
const data = new Date(0)
// console.log(data);


function User(username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    this.sampleFunction = function(){
        console.log(this.loginCount);
        
    }

    return this
}

const userOne = new User("sandeep", 45, false)
const usertwo = new User("vj", 85, true)
console.log(userOne);
console.log(usertwo);
console.log(userOne.constructor);
