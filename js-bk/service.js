function checkLoggedIn(){
    let user = JSON.parse(localStorage.getItem("isLoggedIn"));
    console.log(user);
    if(user !== null){
        window.location.href = "requests.html";
    }
}


function logout(){
    localStorage.removeItem("isLoggedIn");
    window.location.href="index.html";    
}