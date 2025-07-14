// const tinderUser  = new Object()        // -> {}   single ton ojects
const tinderUser = {}                      // -> {}   non single ton objects


tinderUser.id = "123asd"
tinderUser.name  = "Pinter"
tinderUser.isLoggedIn = false

// console.log(tinderUser);




const regularUser = {
    email: "piter@gmail.com",
    fullname : {
        userFullName: {
            firstName: "piter",
            lastName: "kumar"

        }
        
    }
}

// console.log(regularUser.fullname)                          // -> { userFullName: { firstName: 'piter', lastName: 'kumar' } }
// console.log(regularUser.fullname.userFullName)             // -> { firstName: 'piter', lastName: 'kumar' }
// console.log(regularUser.fullname.userFullName.lastName)    // -> kumar 




// combine bojects ----------------------------------------------------------------------

const  objs1 = {1:"a", 2: "b"}
const  objs2 = {3:"a", 4: "b"}
const  objs3 = {5:"a", 6: "b"}

const obj4  = Object.assign({}, objs1, objs2, objs3)    //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj4)   


const obj3 = {...objs1, ...objs2, ...objs3}            // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj3)


// -------------------------------------------------------------------------------------------
const user = [
    {
        id: 1,
        email: "piter@gmail.com"
    },
    {
        id: 2,
        email: "piter@gmail.com"
    },
    {
        id: 3,
        email: "piter@gmail.com"
    },
    {
        id: 4,
        email: "piter@gmail.com"
    }
]
user[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser));                // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));              //  [ '123asd', 'Pinter', false ]
console.log(Object.entries(tinderUser));             // [ [ 'id', '123asd' ], [ 'name', 'Pinter' ], [ 'isLoggedIn', false ] ]


console.log(tinderUser.hasOwnProperty('isLoggedIn'));     // true