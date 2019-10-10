import { equals } from "./utils.js";

console.assert(equals(getEligibility("william", 17), { william: 17 }), "should return an object with the name and age");

function getPerson() {
    const personArray = prompt("enter name and age of new person separated by commma").split(",")
    const name = personArray[0];
    const age = personArray[1];
    return {
        name: name,
        age: age
    }
}

function getPeople() {
    const people = []
    for (let i = 0; i < 3; i++) {
        const person = getPerson();
        people.push(person);
    }

    const eligiblePeople = [];
    for (let i = 0; i < people.length; i++) {
        const person = people[i];
        if (getEligibility(person)) {
            eligiblePeople.push(person.name)
        }
    }

    alert(eligiblePeople.join(" "));
}


function getEligibility(person) {
    if (person.age >= 18) {
        return true;
    } else {
        return false;
    }

}

getPeople()