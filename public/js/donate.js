function request(){
    let user = JSON.parse(localStorage.getItem("isLoggedIn"));
    $("#username").append(user.username);

    var urlParams = new URLSearchParams(window.location.search);
    var urlID = urlParams.get("id");
    console.log(urlID);

    var url = server + "request/" +urlID;
    $.get(url, function(data){
        console.log(data);
        $("#reqID").text(data[0].request_id);
        $("#reqName").text(data[0].name);
        $("#reqDes").text(data[0].description);
        $("#reqFund").text(data[0].amount);

    });
}

function donate(){
    let user = JSON.parse(localStorage.getItem("isLoggedIn"));
    var urlParams = new URLSearchParams(window.location.search);
    var urlID = urlParams.get("id");

    var reqID = urlID;
    var donorID = user.user_id;
    var donation = $("#donation").val();

    var formdata = {reqID:reqID,donorID:donorID,donation:donation};

    var url = server +"donate";
    $.post(url,formdata, function(data){
        console.log(data);
        window.location.href = "donations.html";
    });
}