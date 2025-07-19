// for 
//1
for (let x = 0; x <= 10; x++) {
    const element = x;
    // console.log(element);   
}


//2 -------------------------------------------------
for (let i = 1; i <= 11; i++) {
    const y = i;
    if (y == 6) {
        // console.log("6 is a number");
        // console.log("hello");
        
    }
    // console.log(y);    
}


//3 ------------------------------------------------
for (let i = 0; i< 10; i++) {
    // console.log(`outer loop value i = ${i}`);
    
    for (let j = 0; j < 10; j++ ) {
        // console.log(`Inter loop value j = ${j} i = ${i}`);
        // console.log(i + " * " + j + " = " + i*j );
        
    }
}


//4 -----------------------------------------------
let myArray = ["flash", "batman", "superman"]

for (let i = 0; i < myArray.length; i++) {
    const T = myArray[i]
    // console.log(T);
    

}


// 5 --------------------------------------------
// bral and continue

for (let i = 1; i < 10; i++) {
    if (i == 5) {
     break   
    }
    // console.log(i);
    
}

for (let i = 1; i < 20; i++) {
    if (i == 5) {
        continue
    }
    console.log(i);
    
}