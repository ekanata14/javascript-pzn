function samplePromise(){
    return Promise.resolve("Eka");
}

async function callSample(){
    const name = await samplePromise();
    console.info(name);
}

callSample();