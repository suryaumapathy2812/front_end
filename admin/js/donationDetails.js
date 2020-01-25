function viewDonations(){
    var urlParams = new URLSearchParams(window.location.search);
    var ID = urlParams.get("id");
    //console.log(urlID);
    var url = "http://localhost:3000/viewDonations/"+ID;
    $.get(url,ID, function(data){
        console.log(data);
        if(data.length == 0){
            //console.log("entered If condition");
            $("#adonations").html("No donations received yet.");
        }else{
            //console.log("entered Else condition");
        displayADonations(data);
        }
    });
}

function displayADonations(data){
    var content = "";

    for (let d of data){
        let date = new Date(d.donated_on);
        content += "<tr>";
        content += "<td>#" +d.donation_id+ "</td>";
        content += "<td>#" +d.request_id+ "</td>";
        content += "<td>" +d.username+ "</td>";
        content += "<td>" +d.donation+ "</td>";
        content += "<td>" +date.toJSON().substr(0,10)+ "</td>"; 
        content += "</tr>";
    }
    $("#adonations").html(content);
}
