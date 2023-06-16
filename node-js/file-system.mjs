import fs from "fs/promises";

const buffer = await fs.readFile("file-system.mjs");

console.info(buffer.toString());

await fs.writeFile("temp.txt", "Hello Node Js");

const result = await fs.readFile("temp.txt");

console.info(result.toString());
