const euros = Number(prompt("Enter cantidad en euros"));
const answer = prompt("would you like to convert to us (Y/N)");
if (answer === "Y") {
    const result = euros * 1.10
    alert(result.toFixed(2));
} else {
    const result = euros / 1.10
}
