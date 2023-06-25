import timers from "timers/promises";

const time = await timers.setTimeout(5000, "Sudah 5 detik");
console.info(new Date());
console.info(time);

for await(const startTime of timers.setInterval(1000, "ingnored")){
    console.info(`Start time at ${new Date()}`);
};