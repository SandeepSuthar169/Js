function test(){
    let obj = { value: 10}
    return function(){
        console.log(obj);
        
    }
}

const innerFunction = test()
innerFunction()