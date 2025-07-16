// Immediately Invoked Function Expressions (IIFE)

(function ok() {          // ----------------Name IIFE  IMP
    console.log(`Data-Base connected`);
})();

// ---------------------------------------------- IMP

( () => {
    console.log("Data-Base connected");
} )();

// ---------------------------------------------- IMP

( (name) => {
    console.log(`Data-Base connected , ${name}`);
} )('sandeep');



