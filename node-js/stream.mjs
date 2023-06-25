import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Eka\n");
writer.write("Pradipa\n");
writer.write("Nata\n");
writer.end();

const reader = fs.createReadStream("target.log");
console.info(reader.read());
reader.addListener("data", (data) =>{
    console.info(data.toString());
});