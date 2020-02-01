function checkRole(){
    let user = JSON.parse(localStorage.getItem("isLoggedIn"));
    //console.log(user);
    if(user.role == 'A'){
        adminReqs();
    }else{
        userReqs();
    }
}

//=====================================Admin Request==========================================//
function adminReqs(){
    let user = JSON.parse(localStorage.getItem("isLoggedIn"));
    $("#username").text(user.username);
    $("#user_id").append(user.user_id);
    var url = server+ "adminRequests/" + user.user_id;
    $.get(url, function(data){
        //console.log(data);
        displayAdminRequests(data);
        tableOnClick();
    });
}

function displayAdminRequests(data){
    var content = "";
    for(let d of data){
        content += "<tr>";
        content += "<td>" +d.request_id+ "</td>";
        content += "<td>" +d.name+ "</td>";
        content += "<td>" +d.amount+ "</td>";
        content += "<tr>";
    }
    //console.log(content);
    $("#tableBody").append(content);
}

//======================================User Request=============================================//

function userReqs(){
    var url = server+ "userRequests";
    $.get(url, function(data){
        //console.log(data);
        displayUserRequests(data);
        tableOnClick();
        dataTable();
    });
}

function displayUserRequests(data){
    var content = "";
    for(let d of data){
        content += "<tr>";
        content += "<td><a href='donate.html?id=" +d.request_id+ "'>#" +d.request_id+ "</td>";
        content += "<td>" +d.name+ "</td>";
        content += "<td>" +d.amount+ "</td>";
        content += "</tr>";
    }
    //console.log(content);
    $("#tableBody").append(content);
}


//===============================================================================================//

function tableOnClick(){
    $(document).ready(function() {
        $('#tableBody tr').click(function() {
            var href = $(this).find("a").attr("href");
            if(href) {
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
