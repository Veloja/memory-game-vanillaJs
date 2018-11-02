let combinationsArr = [
    {
        num: 1,
        clicked: false
    },
    {
        num: 1,
        clicked: false
    },
    {
        num: 2,
        clicked: false
    },
    {
        num: 2,
        clicked: false
    },
    {
        num: 3,
        clicked: false
    },
    {
        num: 3,
        clicked: false
    }
    ,{
        num: 4,
        clicked: false
    },
    {
        num: 4,
        clicked: false
    },
    {
        num: 5,
        clicked: false
    },
    {
        num: 5,
        clicked: false
    },
    {
        num: 6,
        clicked: false
    },
    {
        num: 6,
        clicked: false
    }
]

const boxesNode = document.querySelectorAll('.box')
const boxesArr = [...boxesNode]

// shuffled array
const shuffledArr = shuffle([...combinationsArr])

// populate grid with random numbers
for(let i = 0; i < boxesArr.length; i++) {
    let box = boxesArr[i]
    for(let j = 0; j < shuffledArr.length; j++) {
        let combination = shuffledArr[i].num
        box.innerHTML = combination
    } 
}

// first click
for(let i = 0; i < boxesArr.length; i++) {
    boxesArr[i].addEventListener('click', click)
}

let clicks = null
let firstClick
let secondClick

function click(e) {
    // debugger
    clicks++

    if(clicks === 1) {
        firstClick = e.target.innerHTML
        console.log(firstClick)
    } 
    if(clicks === 2) {
        secondClick = e.target.innerHTML
        console.log(secondClick)
        if(secondClick === firstClick){
            console.log('pogodili smo')
            clicks = 0
        } else {
            clicks = 0
            console.log(clicks)
        }
    }

    

 }

// shuffle algorithm
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
}