console.assert(getAverage([3, 4, 5]) === 4, "should return the average");

function getMarks() {
    const persons = [];
    let condition = "";
    do {
        condition = prompt("enter ´terminar´ when finished");
        if (condition === "terminar") {
            break;
        }
        const personInfo = prompt("Enter name and 3 marks separated by a comma").split(",");
        const name = personInfo[0];
        const mark1 = Number(personInfo[1]);
        const mark2 = Number(personInfo[2]);
        const mark3 = Number(personInfo[3]);
        const person = {
            name,
            marks: [mark1, mark2, mark3]
        }

        persons.push(person);
    } while (condition !== "terminar");



    let personsInfo = "";
    for (let i = 0; i < persons.length; i++) {
        personsInfo += persons[i].name + " " + getAverage(persons[i].marks) + "\n";
    }
    alert(personsInfo);
}
function getAverage(marks) {
    let sumMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        sumMarks += marks[i];
    }
    const averageMarks = sumMarks / marks.length;
    return averageMarks;
}

getMarks();