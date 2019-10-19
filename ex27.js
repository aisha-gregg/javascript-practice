//console.assert(palindromo(text) === "text", "should return it´s a palindromo");

const text = prompt("enter some text");

function palindromo(text) {
  const newText = [];
  newText = newText.split("");
  for (let i = 0; i <= text.length; i++) {
    if (text[i] !== "") {
      newText.push[i];
    }
  }
}
function reverseCheck(newText) {
  const reverseText = [];
  reverseText = newText.reverse();
  for (i = 0; i <= reverseText.length; i++) {
    if (reverseText[i] === newText[i]) {
      alert("This is a palindrome");
    } else {
      alert("This is not a palindrome");
    }
  }
}
