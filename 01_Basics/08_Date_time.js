// Dates
let myDate = new Date()
console.log(myDate);        // 2025-07-12T14:16:26.751Z

// console.log(myDate.toString());        // Sat Jul 12 2025 19:47:25 GMT+0530 (India Standard Time)
// console.log(myDate.toJSON());        
// console.log(myDate.toDateString());        
// console.log(myDate.toLocaleString());        
// console.log(myDate.toTimeString());    


// let myCreateDate = new Date(2025, 1, 23)     // month start = 1 Jan , 11 = Dec
// let  myCreateDate = new Date(2025, 7, 1, 5, 3)


let  myCreateDate = new Date("02-13-2025")  //MM/DD/YY
// console.log(myCreateDate.toLocaleString());

let myTimeNow = Date.now()
// console.log(myTimeNow);


// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday:"long"
})