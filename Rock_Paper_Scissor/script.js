let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const getComputerChoice = () => {
    const options = ["rock","paper","scissor"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
};

const drawGame = () => {
    console.log("the chance is drawen");
    msg.innerText = "The game was drawen";
    msg.style.backgroundColor = "yellow";
};

const showWinner = (userwin, userChoice, computerChoice) => {
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you won");
        msg.innerText = `You Won! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        console.log("you lost");
        msg.innerText = `You Lost! Your ${userChoice} defeated by ${computerChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice){
        drawGame();
    }
    else{
        let userwin = true;
        if(userChoice==="rock"){
            //scissor, paper
            userwin = computerChoice === "paper" ? false :true;
        }
        else if(userChoice==="paper"){
            //scissor, paper
            userwin = computerChoice === "scissor" ? false :true;
        }
        else{
            userwin = computerChoice === "rock" ? false : true;
        }
        showWinner(userwin,userChoice,computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});