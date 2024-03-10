let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset-button");
let newGameButton = document.querySelector(".new-game-button");
let messageContainer = document.querySelector(".message-container");
let message = document.querySelector("#message");

let turnO = true;

const winningPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    messageContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",function() {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true

        checkWinner();
    })
})

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    message.innerText = `congratulations, Winner is ${winner}`;
    messageContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winningPatterns) {
        let positionOneValue = boxes[pattern[0]].innerText;
        let positionTwoValue = boxes[pattern[1]].innerText;
        let positionThreeValue = boxes[pattern[2]].innerText;

        if(positionOneValue != "" && positionTwoValue != "" && positionThreeValue != "") {
            if(positionOneValue === positionTwoValue && positionTwoValue === positionThreeValue){
                console.log("winner", positionOneValue);
                showWinner(positionOneValue);
            }
        }
    }
}

newGameButton.addEventListener("click", () => {
    resetGame();
})

resetButton.addEventListener("click", () => {
    resetGame();
})