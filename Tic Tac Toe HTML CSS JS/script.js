let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

console.log("Turn of Player = O");
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
            console.log("Turn of Player = X");
        }
        else{
            box.innerText = "X";
            turnO = true;
            console.log("Turn of Player = O");
        }
        box.disabled = true;

        checkWinner();
    })
})

const checkWinner = () =>{
    for(let pattern of winPatterns){        
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos1Val == pos3Val){
                for(let box of boxes){
                    box.disabled = true;
                }
                const winText = "Congratulations! Winner is: " + pos1Val;
                printWinner(winText);
            }
        }
    }
}

const msgContainer = document.querySelector(".msgContainer");
const printWinner = (winText) =>{
    msg.innerText = winText;
    msgContainer.style.visibility = "visible";
}

resetBtn.addEventListener("click", () => {
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled = false;
    })
});

let newGame = document.querySelector(".newGame");
newGame.addEventListener("click", () => {
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled = false;
    })
    msg.innerText = "";
    msgContainer.style.visibility = "hidden";
})
