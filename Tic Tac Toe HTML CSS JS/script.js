// Initializing all the major nodes
let boxes = document.querySelectorAll(".box");
let turnO = true;
console.log("Turn of O");
let resetBtn = document.querySelector(".reset");
let newGame = document.querySelector(".newGame");
let msgContainer = document.querySelector(".msgContainer");

// Winning Patterns
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// Disable all the boxes
let disableBoxes = () =>{
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

// Enable all the boxes
let enableBoxes = () => {
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    })
}

// Main Logic for Input
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
            console.log("Turn of X");
        }
        else{
            box.innerText = "X";
            turnO = true;
            console.log("Turn of O");
        }
        box.disabled = true;
        checkWinner();
    })
})

// Checking the Winner according to the winning patterns
let checkWinner = () => {
    for(let pattern of winPatterns){
        pos1Val = boxes[pattern[0]].innerText;
        pos2Val = boxes[pattern[1]].innerText;
        pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos1Val == pos3Val){
                disableBoxes();
                let winText = pos1Val + " is the Winner!";
                displayWinner(winText);
                console.log("Winner " + winText);
            }
        }
        
    }
}

// Display Winner
let displayWinner = (winText) => {
    document.querySelector(".winMsg").innerText = winText;
    msgContainer.classList.remove("hide");
}


// Reset the game
resetBtn.addEventListener("click", () => {
    enableBoxes();
})


// Start a New Game
newGame.addEventListener("click", ()=>{
    enableBoxes();
    msgContainer.classList.add("hide");
})