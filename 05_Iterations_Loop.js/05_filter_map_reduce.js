// 1 
const coding = ["js", "ruby", "java", "python", "C++"]

const values =coding.forEach( (i) => {
    // console.log(i);
    return i
                                     // forEach not return any values 
})                                 
// console.log(values);








//2 -------------------------------------------------------------
const my_num = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]

const newnums = my_num.filter( (num) => num > 4 )
// console.log(newnums);



// or
const my_nums = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]

const newnum = my_num.filter( (num) => {     // in scopes return mendetry
    return num > 4
} )
// console.log(newnums);


// or 
const my_number = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]
const U = []

my_number.forEach( (x) => {
    if (x > 4 ) {
        U.push(x)      
    }
})
console.log(U);




// ---------------------------- example ----------------------------------

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const user_Books = books.filter( (J) => J.genre === "Fiction")

const user_Book = books.filter( (J) => {
    return J.edition >=  1995  && J.genre === "Science"
} )  

// console.log(user_Books);
console.log(user_Book);
