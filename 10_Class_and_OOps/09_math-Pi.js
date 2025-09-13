const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);



const apple = {
    fName: "bada apple",
    lName: "chota apple",
    isAvailable: true, 


    appleOrder: function(){
        console.log("apples are big");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(apple, "lName"));




// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-__-_-_-_-_-_-_-_-_-__-_-_-_-_-_-_-_-_-_
Object.defineProperty(apple, "lName", {
    enumerable: false,
    writable:false,
    configurable:true
})

console.log(Object.getOwnPropertyDescriptor(apple, "lName"));


//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
for(let [key, value] of Object.entries(apple)){
    if (typeof value !== "function"){
        console.log(key, value);
        
    }
}
