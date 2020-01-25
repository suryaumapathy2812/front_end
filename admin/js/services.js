function getLsValues() {
    var LOGGED_IN_USER =  JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    return LOGGED_IN_USER;
}


function checkuser(){
    var LOGGED_IN_USER =  JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    if(LOGGED_IN_USER !== null){
        window.location.href= "requests.html";
    }
}



function header(){
  var LOGGED_IN_USER = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
  //console.log("heeee");
  var headerContent = "";
  if(LOGGED_IN_USER == null){
    headerContent += "<a class='btn' href='Login.html'>Login</a>";
    headerContent += "<a class='btn' href='register.html'>Register</a>";
  }else{
    headerContent += "<a class='btn' href='requests.html'>Requests</a>";
    headerContent += "<a class='btn' href='addrequest.html'>Add Request</a>";
    //headerContent += "<a class='btn' href='donationDetails.html?id="+d.request_id+"'>Donations</a>";
    headerContent += "<a class='btn' onclick='logOut()'>Logout</a>";
  }
  $("#_header").html(headerContent);
}

function logOut() {
  getLsValues();
  localStorage.removeItem("LOGGED_IN_USER");
  window.location.href ="Login.html";
}