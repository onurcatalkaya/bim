document.getElementById("signInButton").addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");
    
    if (username === "bahcelievler" && password === "bahcelievler") {
        // Kullanıcıyı istediğiniz sayfaya yönlendirme
        window.location.href = "main.html";
    }
    else if (username === "suphan" && password === "suphan"){
        window.location.href = "main.html";
    }
    else if (username === "kemalsunal" && password === "kemalsunal"){
        window.location.href = "main.html";
    }
    else if (username === "1" && password === "1"){
        window.location.href = "main.html";
    }
    else {
        // Başarısız giriş bildirimi
        errorMessage.style.display = "block";
    }
});
