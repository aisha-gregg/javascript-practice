const year1 = Number(prompt("Enter year of first person"));
const month1 = Number(prompt("Enter month of first person"));
const year2 = Number(prompt("Enter year of second person"));
const month2 = Number(prompt("Enter month of second person"));

if (year1 === year2 && month1 === month2) {
    alert("true");
} else {
    alert("false");
}
