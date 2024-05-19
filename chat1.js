const firebaseConfig = {
    apiKey: "AIzaSyC0LpEeFuE6flyVgJbv9qJZwrULqIcg4U8",
    authDomain: "chat-app-2597c.firebaseapp.com",
    databaseURL: "https://chat-app-2597c-default-rtdb.firebaseio.com",
    projectId: "chat-app-2597c",
    storageBucket: "chat-app-2597c.appspot.com",
    messagingSenderId: "789706964599",
    appId: "1:789706964599:web:fab5aa7c0691de18e2d072"
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
  