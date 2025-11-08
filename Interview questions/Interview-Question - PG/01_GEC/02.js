console.log("Gloabal Execution context starts");   //1

let globalVariable = "I am a globle variable"   //2
globalFunction()


function globalFunction(){
    console.log("inside globle function");     //3 
}

console.log(globalVariable);


console.log("Gloabal Execution Context ends");  //4
