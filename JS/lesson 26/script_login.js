document.querySelector(".submit").onclick = function() {
    let inpLogin = document.querySelector(".inpLogin").value;
    let inpPassword = document.querySelector(".inpPassword").value;

    if (inpLogin == "Admin" && inpPassword == "123") {
        alert("Welcome");
    }
    if (inpLogin != "Admin" ) {
        alert("логин неправильный");
    }
    
    if (inpPassword != "123" ) {
        alert("пароль неправильный");
    }
          

};


