// genrerate a random color

const body = document.querySelector('body')

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i =0; i < 6; i++ ){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let IntervalId;

const startChangingColor = function(){
    if(!IntervalId){
        IntervalId = setInterval(changeBgColor, 1000)
    }

    function changeBgColor(){
        body.style.backgroundColor = randomColor()
    }
    
}
const stoptChangingColor = function(){
    clearInterval(IntervalId)
    IntervalId = null;
}

document.getElementById('start').addEventListener('click', startChangingColor)
document.getElementById('stop').addEventListener('click', stoptChangingColor)