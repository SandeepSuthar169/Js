class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase().split("")
    }

    set email(value){
        this._email = value
    }
}

const sandeep = new User("sandeep@suthar.com", "4238742387r")
console.log(sandeep.email);
