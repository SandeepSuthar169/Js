const user1 = {
    userName: "sandeep",
    loginCount: 7,
    sigedIn: true, 

    getUserDatails: function(){
        // console.log('jskdf');
        // console.log(`userName: ${this.userName}`);
        // console.log(this);    // this  ->  curent context => [ data of user1 ]
        
    }
}

// console.log(user1.userName);
// console.log(user.getUserDatails());
// console.log(this);   // --- > {} emthy

//-----------------------------------------------------------------------------

function user2(username, loginCont, isSingedIN){
    this.username = username,
    this.loginCont = loginCont,
    this.isSingedIN = isSingedIN

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }



    return this
}

const userOne = new user2('sandeep', 3, false)
const usertwo = new user2('suthar', 0, true)
console.log(userOne.constructor());    

// console.log(userOne);
// console.log(usertwo);
