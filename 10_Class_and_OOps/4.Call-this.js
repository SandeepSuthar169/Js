function fullName(myname){
    this.myname = myname,
    console.log("hi everyone");
}

function crateName(myname, email, password){
    fullName.call(this, myname),

    this.email = email,
    this.password = password
}

const user = new crateName("sandeep", "suthar@sandeep.com", 28492482948)

console.log(user);
