function checkLoggedIn(){
    let user = JSON.parse(localStorage.getItem("isLoggedIn"));
    console.log(user);
    if(user == null){
        window.location.href = "Login.html";
        break;
    }else{
        window.location.href = "#";
    }
}


function logout(){
    localStorage.removeItem("isLoggedIn");
    window.location.href="login.html";    
}