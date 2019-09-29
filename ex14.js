console.assert(stringLength("foo") === 3, "should return the length of a given string");
console.assert(stringLength("foo bar baz") === 11, "should return the length of a string with spaces");
console.assert(stringLength("") === 0, "should return 0 if it is an empty string");

function stringLength(string) {
    return string.length;
}

const text = prompt("Enter text");
const longitud = "Longitud: ";
alert(longitud + stringLength(text));
