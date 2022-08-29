const outputScreens = document.querySelectorAll('.output-screen');
const controlBtns = document.querySelectorAll(".control");
const resultH1 = document.querySelector("#conclusion-txt-h1")
const resultContainer = document.querySelector("#conclusion-txt-container");
resultContainer.style.display = "none"

var computerChoice,
	playerChoice;

controlBtns.forEach(btn => {
	btn.addEventListener('click', eventHandler);
});

function computerTurn() {
	let rand = Math.round(Math.random() * 2);

	switch (rand) {
		case 0:
			computerChoice = "Rock";
			break;
		case 1:
			computerChoice = "Paper";
			break;
		case 2:
			computerChoice = "Scissor";
			break;
	}

	outputScreens[1].innerHTML = computerChoice;
}

function checkStatus() {
	var result;

	if (playerChoice === "Rock" && computerChoice === "Scissors" ||
		playerChoice === "Paper" && computerChoice === "Rock" ||
		playerChoice === "Scissors" && computerChoice === "Paper") {
		result = true;
	}

	if (playerChoice === "Scissors" && computerChoice === "Rock" ||
		playerChoice === "Rock" && computerChoice === "Paper" ||
		playerChoice === "Paper" && computerChoice === "Scissors") {
		resultContainer.style.display = "block";
		result = false;
	}

	if (playerChoice === computerChoice) {
		resultContainer.style.display = "block";
		result = null;
	}

	changeText(result);
}

function changeText(result) {
	if (result) {
		resultH1.innerHTML = "You won!";
	} else if (result === null) {
		resultH1.innerHTML = "Draw!";
	} else {
		resultH1.innerHTML = "You lose!";
	}
}

function eventHandler({ target }) {
	playerChoice = target.innerHTML;
	outputScreens[0].innerHTML = playerChoice;
	computerTurn();

	checkStatus();
}