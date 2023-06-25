import zlib from "zlib";
import fs from "fs";

const source = fs.readFileSync("compress.mjs");
const result = zlib.gzipSync(source);
console.log(result);

fs.writeFileSync("compress.mjs.txt", result);