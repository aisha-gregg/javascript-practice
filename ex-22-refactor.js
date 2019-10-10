function getPerson() {
    const [name, age] = prompt("enter name and age of new person separated by commma").split(",")
    return {
        name,
        age: Number(age)
    }
}

function getPeople() {
    const people = Array.from({ length: 3 }).map(function () {
        return getPerson();
    })

    const eligiblePeople = people.filter(function (person) {
        return getEligibility(person)
    });

    alert(eligiblePeople.join(" "));
}


function getEligibility(person) {
    return person.age >= 18
}

getPeople()