//1---------------------------------------
let person = {
    fName: "sandeep",
    lName: "suthar"
};

// console.log(person.fName);
// console.log(person['fName']);

// 2-------------------------------------

let parent = {
    fname: "john",
    lname: "wick",
    hello: function(){
        // console.log('hello everyone');
    },
    getFullName: function(){ 
            return this.fname + ' ' + this.lname
    }
}

// console.log(parent.hello());
// console.log(parent.getFullName());

// ------------{ Constructor FUntion  }---------------------------

function Person(fname, lname){
    this.fname = fname,
    this.lname = lname,

    this.getFullNames = function(){
        return this.fname + ' ' +this.lname
    }
}

let human = new Person('john', 'wick')
// console.log(human.getFullNames());

let human2 = new Person('sandeep', 'suthar')
// console.log(human2.getFullNames());


//------------------ Constructor / Prototype ---------------------

function Person(Fname, Lname){
    this.Fname = Fname,
    this.Lname = Lname
}

Person.prototype.getFullNames = function(){
    return `${this.Fname}  ${this.Lname}`
}

let k1 = new Person('sandeep', 'suthar')
console.log(k1.getFullNames());

let k2 = new Person('john', 'babayaga')
console.log(k2.getFullNames());

// ===================== Classes in ES6 =========================
class Human{
    constructor(firstName, lastName){
        this.firstName = firstName,
        this.lastName = lastName
    }
    setFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

let z1 = new Human('piter', 'parker')
console.log(z1.setFullName());

//--------------------------------------------------------------
