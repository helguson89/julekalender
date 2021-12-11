function verifyPassword() {  
    var pw = document.getElementById("password").value;  
    //check empty password field  
    if(pw === "reidun" ){
        alert("Gratulerer, du får presang!")
        window.open("https://helguson89.github.io/julekalenderen/");
    } else if (pw === "reidun"){
        alert("Gratulerer, du får presang!")
        window.open("https://helguson89.github.io/julekalenderen/");
    } else {
        alert("Det var feil")
        window.open("https://helguson89.github.io/julekalenderen/");
    }
}