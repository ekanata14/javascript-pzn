// Data Variables
const KEY_CHATS = "chats";
const KEY_USER = "users";
let userDatas = [];

// ------- User Section Start -------
// Element 
const register = document.getElementById("register");
const usersDataContainer = document.getElementById("usersDataContainer");

function makeUser(username, password){
    return {
        id : +new Date(),
        username : username,
        password : password
    }    
}

function saveUser(){
    const parsed = JSON.stringify(userDatas)
    sessionStorage.setItem(KEY_USER, parsed);
}

function addUser(){
    const username = document.getElementById("usernameField").value;
    const password = document.getElementById("passwordField").value;

    const user = makeUser(username, password);
    if(sessionStorage.getItem(KEY_USER) !== null){    
        userDatas = JSON.parse(sessionStorage.getItem(KEY_USER));
    } else{
        userDatas = [];
    }
    userDatas.push(user);
    saveUser();
}

function loadUser(){
    const usersData = JSON.parse(sessionStorage.getItem(KEY_USER));
    for (const user of usersData) {
        const userUsername = document.createElement("p");
        userUsername.textContent = user.username
        usersDataContainer.appendChild(userUsername);
    }
}

register.addEventListener("click", () => {
    addUser();
    console.log("user berhasil ditambahkan");
});

loadUser();

// ------- User Section End -------

// ------- Chat Section Start -------
// Element 
const sendButton = document.getElementById("sendButton");
const chatsDataContainer = document.getElementById("chatDataContainer");
let userChats = [];

function makeChat(chat){
    return {
        id : +new Date(),
        date : new Date(),
        chat : chat,
    }    
}

function saveChat(){
    const parsed = JSON.stringify(userChats)
    sessionStorage.setItem(KEY_CHATS, parsed);
}

function addChat(){
    const chatField = document.getElementById("chatField").value;
    const generatedChat = makeChat(chatField);
    if(sessionStorage.getItem(KEY_CHATS) !== null){
        userChats = JSON.parse(sessionStorage.getItem(KEY_CHATS));
    } else{
        userChats = [];
    }

    userChats.push(generatedChat);
    console.info(userChats);

    saveChat();
}

function loadChat(){
    const chatsData = JSON.parse(sessionStorage.getItem(KEY_CHATS));
    for (const chat of chatsData) {
        const chatText = document.createElement("p");
        chatText.textContent = chat.chat
        chatsDataContainer.appendChild(chatText);
    }
}

sendButton.addEventListener("click", () => {
    addChat();
    console.log("Chat Terkirim");
});

loadChat();

// ------- Chat Section End -------