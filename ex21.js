console.assert(getMultiplicationTable(5) === `5x1=5
5x2=10
5x3=15
5x4=20
5x5=25
5x6=30
5x7=35
5x8=40
5x9=45
5x10=50`, "it should get the multiplication table for a given number")


// const integer = Number(prompt("Enter a natural whole number"));

function getMultiplicationTable(integer) {
    if (integer === 0) {
        throw new Error("Must be a whole number greater than 0")
    }

    let table = "";
    for (let i = 1; i <= 10; i++) {
        table += `${integer}x${i}=${integer * i}` + "\n";
    }

    return table;
}





