function requests(){
    var LOGGED_IN_USER = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    var url = "http://localhost:3000/view_fund_request/"+LOGGED_IN_USER.user_id;
    //console.log(url);
    $.post(url, function(datas){
        console.log(datas);
        displayrequests(datas);
        //tableOnClick();
        
    });
}

function displayrequests(datas){
    var content = "";
    for(let d of datas){
        let date  = new Date(d.created_on);

        content += "<tr>";
        content += "<td> <a href='donationDetails.html?id="+ d.request_id+"'>" +"#"+ +d.request_id+ " </a> </td>";
        //content += "<td>#" + d.request_id + "</td>";
        content += "<td>" + d.description + "</td>";
        content += "<td>" + d.requested_amount + "</td>";
        //content += "<td>" + date.toJSON().substr(0,10) + "</td>";
        //content += "<td> <a href='donationDetails.html?id="+ d.request_id+"'>" +d.created_on+ " </a> </td>";
        content += "<tr>";
    }
    console.log(content)
    $("#requests").append(content);
}

//function tableOnClick(){    }

function filter(){
    $(document).ready( function () {
        $('#tableHeader').DataTable();
    } );
}
