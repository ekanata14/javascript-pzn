const buffer = Buffer.from("Eka Pradipa Nata", "utf8") ;
console.info(buffer);
console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

buffer.reverse();
console.info(buffer);
console.info(buffer.toString());

const bufferBase64 = Buffer.from("RWthIFByYWRpcGEgTmF0YQ==", "base64");
console.info(bufferBase64.toString("utf8"));
