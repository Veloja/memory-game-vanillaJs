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
// const boxesArr = [...boxesNode]

// shuffled array
const shuffledArr = shuffle(combinationsArr)

// populate grid with random numbers
for(let i = 0; i < boxesNode.length; i++) {
    let box = boxesNode[i]
    for(let j = 0; j < shuffledArr.length; j++) {
        let combination = shuffledArr[i].num
        box.innerHTML = combination
    } 
}

// first click
for(let i = 0; i < boxesNode.length; i++) {
    boxesNode[i].addEventListener('click', click)
}

let clicks = null
let firstClick
let secondClick

let firstObjectIndex
let secondObjectIndex

function click(e) {
    // debugger
    clicks++

    if(clicks === 1) {
        firstClick = e.target.innerHTML
        e.target.classList.add('clicked')
        firstClickCLass = e.target

        // find index of ELEMENT
        let firstElIndex;
        console.log(shuffledArr)
        for(let i = 0; i < boxesNode.length; i++){
            if(boxesNode[i] === firstClickCLass) {
                firstElIndex = i;
                console.log('prvi index',firstElIndex)
            }
        }

        //find OBJECT by element index
        firstObjectIndex = shuffledArr[firstElIndex]
        firstObjectIndex.clicked = true;
        console.log(firstObjectIndex)
        
    } 

    if(clicks === 2) {
        secondClick = e.target.innerHTML
        e.target.classList.add('clicked')
        secondClickCLass = e.target

        // find index of ELEMENT
        let secondElIndex;
        console.log(shuffledArr)
        for(let i = 0; i < boxesNode.length; i++){
            if(boxesNode[i] === secondClickCLass) {
                secondElIndex = i;
                console.log('drugi index', secondElIndex)
            }
        }

        //find OBJECT by element index
        secondObjectIndex = shuffledArr[secondElIndex]
        secondObjectIndex.clicked = true;
        console.log(secondObjectIndex)

        //check if they match
        if(secondClick === firstClick){
            firstObjectIndex.solved = true
            secondObjectIndex.solved = true
            clicks = 0
            console.log('Pogodili smo')
        } else {
            firstObjectIndex.clicked = true
            secondObjectIndex.clicked = true
            console.log('Promasili smo')
            clicks = 0

            //close boxes because they dont match
            //return clicked property to false
            for(let i = 0; i < shuffledArr.length; i++) {
                if(shuffledArr[i].solved) {
                    boxesNode[i].classList.add('win')
                }
                if(shuffledArr[i].clicked && boxesNode[i].classList.contains('clicked')) {
                    const timer = setTimeout(() => {
                        boxesNode[i].classList.remove('clicked')
                        shuffledArr[i].clicked = false
                        console.log(shuffledArr[i])
                    }, 2000)
                    

                }
            }
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