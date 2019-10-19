//console.assert(pintarFila(4) === 4, "should paint a table of four rows");
//console.assert(pintarFila(0) === 0, "should return unable to paint table");
//console.assert(pintarFila(-4) === -4, "should paint a table of four rows");

const numberEntered = prompt("Enter number of rows");

for (let i = 1; i <= numberEntered; i++) {
  alert("<Table>" + "\n" + "<tr><td><td></tr>");
}
