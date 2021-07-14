const firstForm = document.querySelector(".numberRange");
const secondForm = document.querySelector(".numberGuess");
const numbers = document.querySelector(".numbers");
const result = document.querySelector(".result");

function onPlayBtnClick(event) {
    event.preventDefault();
    const rangeInput = firstForm.querySelector("input");
    const randomNumber = Math.floor(Math.random() * (parseInt(rangeInput.value) + 1));
    const guessInput = secondForm.querySelector("input");
    const guessNumber = parseInt(guessInput.value);
    numbers.innerText = `You chose: ${guessNumber}, the machine chose: ${randomNumber}.`;
    if (randomNumber === guessNumber) {
        result.innerText = "You win!";
    } else {
        result.innerText = "You lost!";
    }
}
secondForm.addEventListener("submit", onPlayBtnClick);