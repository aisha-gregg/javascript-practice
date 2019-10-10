console.assert(getEmail("pedro") === "pedro.picapiedra@gmail.com", "should return the email of corresponding name");
console.assert(getEmail("pepe") === undefined, "should return undefined when the email of corresponding name is");

function getEmail(name) {
    const personalInformation = {
        pedro: "pedro.picapiedra@gmail.com",
        pablo: "pmarmol123@gmail.com",
        bob: "bob@gmail.com"
    }

    return personalInformation[name];
}


const getName = prompt("Enter name");
alert(getEmail(getName));
