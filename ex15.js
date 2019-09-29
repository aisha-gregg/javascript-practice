console.assert(equals(getGrades("william", 5), { william: 5 }), "should return an object with the name and grade");
console.assert(equals(getGrades("guillermo", 10), { guillermo: 10 }), "should return an object with another name and grade");

const person1 = prompt("enter person 1 ");
const person1Grades = prompt("enter grade ");
const person2 = prompt("enter person 2 ");
const person2Grades = prompt("enter grade ");
const person3 = prompt("enter person 3 ");
const person3Grades = prompt("enter grade ");


const person1Info = getGrades(person1, person1Grades);
const person2Info = getGrades(person2, person2Grades);
const person3Info = getGrades(person3, person3Grades);

function getGrades(name, grade) {
    return {
        [name]: grade
    }
}

alert(JSON.stringify(person1Info) + "\n" + JSON.stringify(person2Info) + "\n" + JSON.stringify(person3Info)); 