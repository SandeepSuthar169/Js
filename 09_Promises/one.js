//--------------------------------------------------------------
const promisOne = new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log('hello world');
        resolve()
    } , 1 * 1000)

})


promisOne.then(function(){
    console.log('Promise consumed');
    
})



//-------------------------------------------------------------
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("hello world 2");
        resolve()
        
    }, 1 * 1000)
}).then(function(){
    console.log('async 2 resolve');
})




//-----------------------------------------------------------------
const promisThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(
            {userNameFirst: "sandeep",userLastname: "suthar"})
    }, 1 * 1000)
})

promisThree.then(function(user){
    console.log(user);
    
})



//-------------------------------------------------------------
const promisFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({userName: 'sanker', password: '57842'})
        } else{
            reject('EROR: Something went wrong in files')
        }
    }, 2 * 1000)
})

promisFour
.then((user) => {console.log(user);
    return user.userName    

})
.then((userName) => {console.log(userName);
    
})
.catch((error) => {console.log(error);

})
.finally(() => {
    console.log('the promise is either resolved or rejected');
    
})





// -------------------------------------------------------------