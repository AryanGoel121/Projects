// Accessing all the nodes
let userScore = 0;
let computerScore = 0;
let user = document.querySelector("#userScore");
let computer = document.querySelector("#computerScore");
let msg = document.querySelector(".msg");
const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const rand = Math.floor(Math.random() * 3);
    return options[rand];
}

const showWinner = (userWin, userChoice, computerChoice) =>{
    if(userWin){
        msg.innerText = `You Won! ${userChoice} beats ${computerChoice}`;
        // console.log(`You Won! ${userChoice} beats ${computerChoice}`);
        msg.style.backgroundColor = "#1b263b"; 
        userScore++;
    }
    else{
        msg.innerText = `Computer Won! ${computerChoice} beats your ${userChoice}`;
        // console.log(`Computer Won! ${computerChoice} beats your ${userChoice}`);
        msg.style.backgroundColor = "#d90429"; 
        computerScore++;
    }
    user.innerText = userScore;
    computer.innerText = computerScore;
}

const playGame = (userChoice) =>{
    // console.log("User choice = ", userChoice);

    // Generate random computer choice -> modular
    const computerChoice = genCompChoice();
    // console.log("Computer choice = ", computerChoice);

    // Logic Board
    if(userChoice === computerChoice){
        msg.innerText = "Game was Draw";
        // console.log("Game was Draw"); 
        msg.style.backgroundColor = "#403d39"; 
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = computerChoice === "rock" ? true : false;
        }
        else{
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }   
}

choices.forEach( (choice) => {
    console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

