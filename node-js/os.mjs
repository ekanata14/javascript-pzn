import os from "os";

console.info(os.arch());
console.info(os.platform());
console.table(os.cpus());
console.info(os.uptime());
console.info(os.totalmem());
console.info(os.freemem());
console.info(os.homedir());
console.info(os.hostname());
console.table(os.networkInterfaces());