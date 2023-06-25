import https from "httpsl";

// const endpoint = the link;

const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Receive data :  ${data.toString()}`);
    });
});

const body = JSON.stringify({
    firstName : "Eka",
    lastName : "Nata",
});

request.write(body);
request.end();
