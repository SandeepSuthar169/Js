let myName = "    sandeep     "

console.log(myName.length);
console.log(myName.trim().length);

// 2 ---------------------------------------


let mylast = ['thor', 'spiderman']

let heroPower = {
    thor: "hammer",
    spiderman: "slider prower",

    powerCollection: function(){
        console.log(`all powerfull man power is ${this.thor}, ${this.spiderman} `);
        
    }
}

Object.prototype.sandeep = function(){
    console.log(`sandeep is powerfull man`);
    
}

Array.prototype.sandeepsuthar = function(){
    console.log(`sandeepsuhar is powerfull`);
    
}

// heroPower.sandeepsuthar()
mylast.sandeepsuthar()


//-3. ---------------------------------------


// prototype....