function samplePromise(){
    return Promise.resolve("Eka MJS");
}

    const name = await samplePromise();
    console.info(name);
