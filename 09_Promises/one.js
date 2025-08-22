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
        let error = false  // true
        if (!error) {
            resolve({userName: 'sanker', password: '57842'})
        } else{
            reject('EROR: Something went wrong in files')
        }
    }, 1 * 1000)
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
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false // true
        if(!error){
            resolve({userName: "Javascript", userPro: "Full-Stack-Dev"})
        } else {
            reject('ERROR: Js went wrong')
        }
    }, 1 * 1000)
})

async function consumePromiseFive(){
    try{
        const response =  await promiseFive
        console.log(response);
    } catch (error){
        console.log(error);
    }
}

consumePromiseFive()







//----------------------------------------------------------------    IMP
// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error", error);   
//     }
// }

// getAllUser()

//  ++++++++++++++++++++ useing to .them(), .catch(), .finally()  ++++++++++++++    IMP

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => { return response.json() })
.then((data) => {console.log(data);})
.catch((error) => {console.log(error);})
.finally(() => {console.log('the promise is either resolved data or rejected data (through error)');})