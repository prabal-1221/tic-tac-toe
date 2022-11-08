let audioTurn = new Audio("ting.mp3")
let playerTurn = "X"
let isgameover = false;

const changeTurn = () => {
    return playerTurn === "X"?"O":"X";
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext")
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText !== '') && (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText)) {
            document.querySelector(".info").innerText = "Player " + boxtext[e[0]].innerText + " Won"
            isgameover = true;

            setTimeout( ()=> {
                Array.from(boxes).forEach(e => {
                    let boxtext = e.querySelector('.boxtext')
                    boxtext.innerText = ''
                })
                playerTurn = "X"
                isgameover = false
                if (!isgameover){
                    document.getElementsByClassName("info")[0].innerText  = "Turn for " + playerTurn;
                }
            },2000)
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = playerTurn;
            playerTurn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + playerTurn;
            } 
        }
    })
})


reset = document.getElementById("restart")
reset.addEventListener("click",() => {
    Array.from(boxes).forEach(e => {
        let boxtext = e.querySelector('.boxtext')
        boxtext.innerText = ''
    })
    playerTurn = "X"
    isgameover = false
    if (!isgameover){
        document.getElementsByClassName("info")[0].innerText  = "Turn for " + playerTurn;
    }
})
