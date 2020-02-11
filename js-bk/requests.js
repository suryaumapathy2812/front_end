function checkRole(){
    let user = JSON.parse(localStorage.getItem("isLoggedIn"));
    //console.log(user);
    if(user.role == 'A'){
        adminReqs();
    }else{
        userReqs();
        let addReqBtn = document.getElementById("addReqBtn");
        addReqBtn.style.display = "none";
    }
}

//=====================================Admin Request==========================================//
function adminReqs(){
    let user = JSON.parse(localStorage.getItem("isLoggedIn"));
    $("#username").append(user.username);
    $("#user_id").append(user.user_id);
    $("#loadingspinner").show();
    var url = server+ "adminRequests/" + user.user_id;
    $.get(url, function(data){
        console.log(data);
        $("#loadingspinner").hide();
        //dataTable();
        displayAdminRequests(data);
        dataTable();
        tableOnClick();
      
    });
}

function closeRequest(request_id){
    console.log("Close Request" + request_id);
    var con = confirm("Do you want to cancel the request - "+ request_id);
    if(con) {
        console.log("Cancelling the request ");
    }
}

function displayAdminRequests(data){
    $("#tableData tbody").empty();
    var content = "";
    for(let d of data){
        var date = moment(d.created_on,'YYYY-MM-DDTHH:mm').fromNow();
        var expDate = moment(d.expiry_date, "YYYY-MM-DDTHH:mm").fromNow();
        //console.log(Date);
        content += "<tr>";
        content += "<td><a href='donate.html?id=" +d.request_id+ "'>#" +d.request_id+ "</td>";
        content += "<td>" +d.name+ "</td>";
        content += "<td>" +d.amount+ "</td>";
        content += "<td>" +date+ "</td>";
        content += "<td>" +(expDate != null ? expDate : "")+ "</td>";
        content+= "<td>" + d.status +"</td>";
        if ( d.expired != 0) {
          content += "<td> <button class='btn btn-primary' onclick='closeRequest(" + d.request_id + ")' >Close</button>  </td>";
        }
        content += "</tr>";
    }
    $("#tableData tbody").append(content);
}

//======================================User Request=============================================//

function userReqs(){
    let user = JSON.parse(localStorage.getItem("isLoggedIn"));
    $("#username").append(user.username);
    var url = server+ "userRequests";
    //console.log("Display Spinner 1");
    $("#loadingspinner").show();
    $.get(url, function(data){
        console.log(data);
        $("#loadingspinner").hide();
        var newData = _.where(data,{'status':"OPEN"});
        console.log(newData);
        displayUserRequests(data);
        tableOnClick();
        dataTable();
    });
}

function displayUserRequests(data){
    var content = "";
    for(let d of data){
        var date = moment(d.created_on,'YYYY-MM-DDTHH:mm').fromNow();
        var expDate = moment(d.expiry_date, "YYYY-MM-DDTHH:mm").fromNow();
        content += "<tr>";
        content += "<td><a href='donate.html?id=" +d.request_id+ "'>#" +d.request_id+ "</td>";
        content += "<td>" +d.name+ "</td>";
        content += "<td>" +d.amount+ "</td>";
        content += "<td>" +date+ "</td>";
        content += "<td>" +(expDate !=null ? expDate : "")+ "</td>";
        content += "<td>" + d.status +"</td>";
        content += "</tr>";
    }
    //console.log(content);
    $("#tableData tbody").append(content);
}


//===============================================================================================//

function tableOnClick(){
    console.log("table On Click");
    $(document).ready(function() {
        $('#tableData tr').click(function() {
            var href = $(this).find("a").attr("href");
            if(href) {
                console.log("Clicked");
                window.location = href;
            }
        });    
    });
}


function dataTable(){
    $(document).ready( function () {
        $('#tableData').DataTable();
    } );
}
