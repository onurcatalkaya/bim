const firebaseConfig = {
  apiKey: "AIzaSyDzBrbD3PlrJaywJ5hk2RgkQZgoIhDEJNI",
  authDomain: "chat-app-fb86b.firebaseapp.com",
  databaseURL: "https://chat-app-fb86b-default-rtdb.firebaseio.com",
  projectId: "chat-app-fb86b",
  storageBucket: "chat-app-fb86b.appspot.com",
  messagingSenderId: "1073888610927",
  appId: "1:1073888610927:web:20ca6b8d762c8c94501b9a"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.database();
  
  
  let username = "b";
  
  document.getElementById("message-form").addEventListener("submit", sendMessage);
  
  function sendMessage(e) {
    e.preventDefault();
  
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value.trim();
  
    if (!message) {
      alert("Lütfen bir mesaj girin.");
      return;
    }
  
    const timestamp = Date.now();
  
    db.ref("messages/" + timestamp).set({
      username,
      message,
    });
  
    messageInput.value = "";
  }
  
  const fetchChat = db.ref("messages/");
  
  fetchChat.on("child_added", function(snapshot) {
    const messages = snapshot.val();
    const messageClass = (messages.username === username) ? "sent" : "received";
  
    let message = `<li class=${messageClass}><span>${messages.username}: </span>${messages.message}</li>`;
    document.getElementById("messages").innerHTML += message;
  });
  