const firebaseConfig = {
  apiKey: "AIzaSyDl5mukPQPPaWNZYME4v4DZ9j2AVTXfZI4",
  authDomain: "chat-app-72d45.firebaseapp.com",
  databaseURL: "https://chat-app-72d45-default-rtdb.firebaseio.com",
  projectId: "chat-app-72d45",
  storageBucket: "chat-app-72d45.appspot.com",
  messagingSenderId: "1044193710773",
  appId: "1:1044193710773:web:440e31729dbb9b725be4fc"
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
  