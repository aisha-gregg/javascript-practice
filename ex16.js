console.assert(getIndexValue(["pedro pica", "pablo pico", "velma pica"], 2) === "velma pica", "should return the index value of the passed list");
console.assert(getIndexValue(["pedro pica", "pablo pico", "velma pica"], 0) === "pedro pica", "should return the index value of the passed list");
console.assert(getIndexValue(["pedro pica", "pablo pico", "velma pica"], 3) === undefined, "should return undefined if the index is out of bounds");

const index = Number(prompt("enter index value"));
const list = ["pedro pica", "pablo pico", "velma pica"]

function getIndexValue(list, index) {
    return list[index];
}

alert(getIndexValue(list, index));