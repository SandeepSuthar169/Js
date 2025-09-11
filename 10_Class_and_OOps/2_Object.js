function addnum(num){
    return num + 23
}

addnum.sum = 4

console.log(addnum(5))   // 28
console.log(addnum.sum)   // 4
console.log(addnum.prototype)   // {}
;
//2 -----------------------------------------------------------

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    console.log(++this.score);
    // this.score++
}

createUser.prototype.decrement = function(){
    ++this.score
}

const oks = new createUser("asd", 89)
// console.log(oks);

oks.increment()