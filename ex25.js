function fakeGetGuessedNumber() {
  return 8;
}

function fakeGetRandomNumber() {
  return 8;
}

function fakeGetAnotherRandomNumber() {
  return 3;
}

function fakeGetAnotherGuessedNumber() {
  return 99;
}

console.assert(
  guessNumber(fakeGetRandomNumber, fakeGetGuessedNumber) ===
    "Congratulations you guessed it!",
  "should alert congratulations, you guessed it"
);
console.assert(
  guessNumber(fakeGetAnotherRandomNumber, fakeGetAnotherGuessedNumber) !==
    "Oups, try another time",
  "should alert try again"
);

function guessNumber(getRandomNumber, getGuessedNumber) {
  const givenNumber = getRandomNumber();
  for (let i = 1; i <= 5; i++) {
    const guessedNumber = getGuessedNumber();
    if (guessedNumber === givenNumber) {
      return "Congratulations you guessed it!";
    } else if (guessedNumber < givenNumber) {
      alert("try a higher number");
    } else {
      alert("Try a lower number");
    }
  }
  return "Oups, try another time";
}

function getRealRandomNumber() {
  return Math.random();
}

function getRealGuessedNumber() {
  return Number(prompt("Please guess a number"));
}

alert(guessNumber(getRealRandomNumber, getRealGuessedNumber));
