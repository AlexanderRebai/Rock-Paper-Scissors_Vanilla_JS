const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice
let result;

possibleChoices.forEach(choice => choice.addEventListener('click',
    (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResult();
    }
))

function generateComputerChoice() {
    const random = Math.floor(Math.random() * possibleChoices.length) + 1;
    switch (random) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "scissors"
            break;
        case 3:
            computerChoice = "paper"
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "IT'S A DRAW";
    }
    else {
        switch (computerChoice) {
            case "rock":
                switch (userChoice) {
                    case "paper":
                        result = "USER WINS";
                        break;
                    case "scissors":
                        result = "COMPUTER WINS";
                        break;
                }
                break
            case "paper":
                switch (userChoice) {
                    case "rock":
                        result = "COMPUTER WINS";
                        break;
                    case "scissors":
                        result = "USER WINS";
                        break;
                }
                break
            case "scissors":
                switch (userChoice) {
                    case "paper":
                        result = "COMPUTER WINS";
                        console.log(result)
                        break;
                    case "rock":
                        result = "USER WINS";
                        break;
                }
                break
        }
    }
    resultDisplay.innerHTML = result;
}
