class User {
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`Name:- ${this.userName}`);   
    }
}

class Teacher extends User{
    constructor(userName, email, password){
        super(userName)
        this.password = password,
        this.email = email
    }

    aboutTeacher(){
        console.log(`${this.userName} is grate teacher`);
        
    }
}

const Hii = new Teacher("jaimen:", "jaimen@teacher.com","859q59q")

// Hii.aboutTeacher()
Hii.logMe()


//------------------------------------------------

const hello = new User("karan")
hello.logMe()

//------------------------------------------------
console.log(Hii === hello);  // false
console.log(Hii === Teacher);  // false
console.log(Hii instanceof Teacher);  // true
console.log(Hii instanceof User);  // true
