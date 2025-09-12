// ES6 

class User {
    constructor(username, email, password){
        this.username = username,
        this.emai = email,
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    usercapitalize(){
        return `${this.username.toUpperCase()}`
    }

}

const me = new User("sandeep", "sandeep@suthar.com", "jks9384jnjrfr")


console.log(me.encryptPassword());
console.log(me.usercapitalize());


//-------------------------------

