const student1 = {
    name: "sandeep",
    score: "+A",

    Introduction: function(){
        console.log(`${this.name} Student is grade ${this.score}.`);
        
    }
}

const student2 = {
    name: "peter",
    score: "+B",
}

let result = student1.Introduction.bind(student2)
result()  //peter Student is grade +B.

