import util from "util";

const firstName = "Eka";
const lastName = "Nata";

console.info(util.format("Hello %s %s"), firstName, lastName);

const person = {
    firstName : "Eka",
    lastName : "Nata"
}

console.info(util.format("Person: %j", person));

