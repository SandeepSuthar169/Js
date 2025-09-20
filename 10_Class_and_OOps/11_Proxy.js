// const user = {
//     name: "sandeep",
//     age: 21,
//     password: "8192324"
// }

// const proxyUser = new Proxy(user, {
//     get(target, prop){
//         console.log(target);
//         console.log(prop);

//         if(prop === "password"){
//             throw new Error("Access Denied")
//         }
//         return target[prop]
//     },
//---------------------------------------------
//     set(target, prop, user){

//     }

// })

// console.log(proxyUser.name);
// console.log(proxyUser.password);



//----------------------------------------------------------------
function negativeIndex(array){
    return new Proxy(array, {

        get(target, prop){
            const index = Number(prop)
            if(index < 0){
                return target[target.length + index ]
            }
            return target[index]
        },

        set(target, prop, value){
            const index = Number(prop)
            if(index < 0){
                return target[target.length + index] = value
            } else {
                target[index] = value
            }
            return true
        }
    })
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArray = negativeIndex(array)

// console.log(array[-1]);
// console.log(newArray[-4]);


//----------------------------------------------------------------
function userdefine(user){
    return new Proxy(user, {

        get(target, prop){
            console.log(target);   // { name: 'sandeep', class: '5sem' }
            console.log(prop);     // name, sandeep  or  class, 5sem
            return target[prop]
        },

        set(target, prop, value){
            console.log(target);     // sandeep or 5sem
            console.log(prop);       // sandeep or 5sem
            console.log(value);         // sandeep or 5sem
            
            target[prop] = value            
            return true
        }
    })
}

let user = { name: "sandeep", class: "5sem"}
let newUser = userdefine(user)


console.log(newUser.name);
console.log(newUser.class);


