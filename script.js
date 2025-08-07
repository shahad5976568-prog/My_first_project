function play(userChoice) {
  const options = ["rock", "paper", "scissors"];
  const computerChoice = options[Math.floor(Math.random() * 3)];

  let result = "";
  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win! 🎉";
  } else {
    result = "Computer wins! 💻";
  }

  document.getElementById("result").innerText =
    `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
}
