document.getElementById('title');

document.getElementById('title').id

document.getElementById('title').class

document.getElementById('title').className
//------------------------------------------------------------------------------
document.getElementById('title').getAttribute

// document.getElementById('title').getAttribute()  error

document.getElementById('title').getAttribute('id')

document.getElementById('title').getAttribute('class')

document.getElementById('title').setAttribute('class', 'test')

document.getElementById('title').setAttribute('class', 'test  heading')  // override class name  IMP
//  <h1 id="title" class="test  heading">Lorem ipsum dolor, sit amet </h1> 

const title = document.getElementById('title')
title.style.borderRadius = "20px"

//------------------------------------------------------------------------------------
title
// <h1 style=​"color:​ rgb(65, 65, 65)​;​ border-radius:​ 20px;​" id=​"title" class=​"test  heading">​…​</h1>​ 

title.textContent
// 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, doloremque?'

title.innerHTML
// 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, <span style="display: none;">lorem 2 Lorem, ipsum dolor. </span> doloremque?'

title.innerText  // which text is actually visible in page
// 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, doloremque?'

//-------------------------------------------------------------------------------

ocument.querySelector('h2')
// <h2>​Lorem ipsum dolor sit amet.​</h2>​ 

document.querySelector('#title')
// <h1 id=​"title" class=​"heading-h1">​…​</h1>​ 

document.querySelector('.heading-h1')
// <h1 id=​"title" class=​"heading-h1">​…​</h1>​ 

document.querySelector('input')


document.querySelector('ul');
//<ul>​…​</ul>​

// --------------------------------------------------------------------------------

const yourUl = document.querySelector('ul');
yourUl.querySelector('li')
//<li>​…​</li>​

const tureGreen = yourUl.querySelector('li')
tureGreen.style.backgroundColor = "green"
tureGreen.style.padding = "10px"

document.querySelectorAll('li')
// [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()length: 1name: "forEach"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object

const tempLiList = document.querySelectorAll('li')
tempLiList
//  [li, li, li]
tempLiList[0].style.color = "orange"
// 'orange'

tempLiList.forEach(function (l)  {                    // IMP
    l.style.backgroundColor = 'orange'
})


//-----------------------------------------------------------------------------------


const tempClassList = document.getElementsByClassName('list-item')

Array.from(tempClassList)

//(5) [li.list-item, li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-item4: li.list-itemlength: 5[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
const MyConcertedArray = Array.from(tempClassList);
MyConcertedArray

MyConcertedArray.forEach(function (li) {
    li.style.color = "blue"
})
