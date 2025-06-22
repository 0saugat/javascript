const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");

const checkPalindrome = () => {
  const currInput = inputText.value;
  if (currInput !== "") {
    const regex = /[^a-zA-Z0-9]/g;
    const userInput = currInput.replace(regex, "").toLowerCase();
    console.log(userInput);
    const inputArr = userInput.split("");
    const palinArr = [];
    for (let i = inputArr.length - 1; i >= 0; i--) {
      let letter = inputArr.pop();
      palinArr.push(letter);
    }
    const palinText = palinArr.join("");
    if (userInput === palinText) {
      resultText.innerText = `${currInput} is a palindrome`;
    } else {
      resultText.innerText = `${currInput} is not a palindrome`;
    }
  } else {
    alert("Please input a value");
  }
};
checkButton.addEventListener("click", checkPalindrome);
