function donation(){

    var urlParams = new URLSearchParams(window.location.search);
    var urlID = urlParams.get("id");
    var url = "http://localhost:3000/getrequest/" + urlID;
    $.post(url, function(data){
        console.log(data);
        //if(data.length == 1){
        displayRequest(data[0]);
        //}else{
        //    $("#donation").html("You have NOT donated Yet.")
        //}
    });
}

function displayRequest(data){
    var content = "<tr>";
    content += "<td>#" +data.request_id + "</td>";
    content += "<td>" +data.description + "</td>";
    content += "<td>" +data.requested_amount + "</td>";
    content += "</tr>";


    $("#donation").html(content);
}

function donate(request_id){
    //event.preventDefault();

    var LOGGED_IN_USER = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));

    //var urlParams = new URLSearchParams(window.location.search);
    //var request_id = urlParams.get("id");

    var user_id = LOGGED_IN_USER.user_id;
    var requestid = request_id;
    var donated_amount = $("#donated_amount").val();

    //console.log("user_ID is "+user_id);
    //console.log("donated_amount is "+donated_amount);
    //console.log(requestid);

    var formData = {user_id:user_id,request_id:requestid,donated_amount:donated_amount}

    var url = "http://localhost:3000/donate";
    $.post(url,formData, function(data){
        console.log(data);
        window.location.href= "userDonation.html?id=" +user_id;
    });

}