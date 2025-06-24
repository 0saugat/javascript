const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");

const checkPalindrome = () => {
  const currInput = inputText.value;
  if (currInput !== "") {
    const regex = /[^a-zA-Z0-9]/g;
    const userInput = currInput.replace(regex, "").toLowerCase();
    const palinText = userInput.split("").reverse().join("");
    if (userInput === palinText) {
      resultText.innerText = `${currInput} is a palindrome`;
    } else {
      resultText.innerText = `${currInput} is not a palindrome`;
    }
    inputText.value = "";
  } else {
    alert("Please input a value");
  }
};
checkButton.addEventListener("click", checkPalindrome);
