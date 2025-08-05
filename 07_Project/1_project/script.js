const btn = document.querySelectorAll('.button')
// console.log(btn);
const body = document.querySelector('body')

btn.forEach(function(btn){
    console.log(btn);
    btn.addEventListener('click', function(i){    //i == event 
        console.log(i);
        console.log(i.target);
        if(i.target.id === 'grey'){
            body.style.background = i.target.id
        } 
        if(i.target.id === 'white'){
            body.style.background = i.target.id
        } 
        if(i.target.id === 'blue'){
            body.style.background = i.target.id
        } 
        if(i.target.id === 'yellow'){
            body.style.background = i.target.id
        } 
        if(i.target.id === '#CC6CE7'){
            body.style.background = i.target.id
        } 
        
    })

})