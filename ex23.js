console.assert(getAverage([3, 4, 5]) === 4, "should return the average");

function getMarks() {
    const persons = [];
    let condition = "";
    while (condition !== "terminar") {
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
        condition = prompt("enter ´terminar´ when finished");
    }

    for (let i = 0; i < persons.length; i++) {
        alert(persons[i].name + " " + getAverage(persons[i].marks))
    }
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