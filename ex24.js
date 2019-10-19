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

  const personsInfo = persons
    .map(person => {
      const average = getAverage(person.marks);
      return {
        name: person.name,
        average
      };
    })
    .sort((currentPerson, nextPerson) => {
      if (currentPerson.average < nextPerson.average) {
        return 1;
      } else {
        return -1;
      }
    })
    .reduce(
      (previousPerson, currentPerson) =>
        previousPerson + `${currentPerson.name} - ${currentPerson.average}\n`,
      ""
    );
  alert(personsInfo);
}

function getAverage(marks) {
  return marks.reduce((a, b) => a + b, 0) / marks.length;
}

getMarks();
