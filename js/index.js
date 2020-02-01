function checkUser(){
    let user = JSON.parse(localStorage.getItem("isLoggedIn"));
    console.log("heeee");
    if(user !== null) {
        var content = "";
        content += "<a class='navbar-brand' href='index.html'>CharityApp</a>";
        content += "<nav class='navbar-nav ml-auto'>";
        content += "<a class='nav-item nav-link' href='index.html'> <i class='fa fa-home'></i> Home </a>";
        content += "<a class='nav-item nav-link' href='requests.html'> Requests </a>";
        content += "<a class='nav-item nav-link' href='Donations.html'> Donations</a>";
        content += "<a class='nav-item nav-link' onclick='logout()''> <i class='fa fa-sign-out' aria-hidden='true'></i> Logout</a>";
        content += "</nav>";
        $("#navbar").html(content);
    }
}