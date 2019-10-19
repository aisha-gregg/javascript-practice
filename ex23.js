console.assert(getAverage([3, 4, 5]) === 4, "should return the average");

function getMarks() {
  const persons = [];
  let condition = "";
  do {
    condition = prompt("enter ´terminar´ when finished");
    if (condition === "terminar") {
      break;
    }
    const [name, mark1, mark2, mark3] = prompt(
      "Enter name and 3 marks separated by a comma"
    ).split(",");
    const person = {
      name,
      marks: [mark1, mark2, mark3].map(Number)
    };

    persons.push(person);
  } while (condition !== "terminar");

  const personsInfo = persons.reduce(
    (previous, current) =>
      previous + `${current.name} - ${getAverage(current.marks)}\n`,
    ""
  );
  alert(personsInfo);
}

function getAverage(marks) {
  return marks.reduce((a, b) => a + b, 0) / marks.length;
}

getMarks();
