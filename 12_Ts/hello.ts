let  a: number = 10


let firstName: string | null = "sandeep"

firstName = "saneep"
firstName = null


//--------------------------------------------

function add(x: number, y: number){
   return x + y

}

console.log(add(2, 5))


//--------------------------------------------

function createUser(user: {fistName: string; lastName?: string}){

    
    const trimUserName: string = user.lastName?.trim() || "" 

 
}

createUser({
    fistName: "sandeep",
    lastName: "suthar"
})


//--------------------------------------------

interface User {
    First: string;
    Last?: string;
    Email: string
    Profile?: string
}

function updateUser(user: User){
    user.Profile
}

const payload: User = {
    First: "",
    Email: "",
    Last: ""
}

//--------------------------------------------