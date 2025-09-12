class User {
    constructor(userName){
        this.userName = userName
    }


    sighUp(){
        console.log(`user ka name:- ${this.userName}`);
        
    }

    static createId(){   //static: not eanyone premission
        return  `123415`
    }
}


const sandeep = new User("sandeepsuthar")
console.log(sandeep.createId())  // error: sandeep.createId is not a function

//--------------------------------------------------------------

class IamStudent extends User {
    constructor (userName, email){
        super(userName),
        this.email = email
    }
}

const Iam = new IamStudent("sandeep", "sandeep@suthar.com")
console.log(Iam.createId());   // error: Iam.createId is not a function
