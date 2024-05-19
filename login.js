document.getElementById("signInButton").addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");
    
    if (username === "bahcelievler" && password === "bahcelievler") {
        window.location.href = "main1.html";
    }
    else if (username === "suphan" && password === "suphan"){
        window.location.href = "main1.html";
    }
    else if (username === "kemalsunal" && password === "kemalsunal"){
        window.location.href = "main1.html";
    }
    else if (username === "bahcelievler" && password === "bahcelievler"){
        window.location.href = "main1.html";
    }
    else if (username === "stadyum" && password === "stadyum"){
        window.location.href = "main1.html";
    }
    else if (username === "ahmetyesevi" && password === "ahmetyesevi"){
        window.location.href = "main1.html";
    }
    else if (username === "önder" && password === "önder"){
        window.location.href = "main1.html";
    }
    else if (username === "onur" && password === "onur"){
        window.location.href = "main1.html";
    }
    else {
        // Başarısız giriş bildirimi
        errorMessage.style.display = "block";
    }
});
