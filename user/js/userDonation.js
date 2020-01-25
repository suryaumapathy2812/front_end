function myDonations(){
    var urlParams = new URLSearchParams(window.location.search);
    var user_id = urlParams.get("id");
    var sql = "http://localhost:3000/myDonations/"+user_id;
    $.post(sql, function(data){
        console.log(data);
        if(data.length >= 1){
        displayDonations(data);
        }else{
            $("#mydonation").html("<tr align='center'><td colspan='4'> You have NOT donated yet...</td></tr>")
        }
    });
}

function displayDonations(data){
    var content = "";
    for(let donation of data){
    content += "<tr>";
    content += "<td>#" + donation.donation_id +"</td>";
    content += "<td>#" + donation.request_id +"</td>";
    content += "<td>" + donation.donated_amount + "</td>";
    content += "<td>" + donation.donated_on +"</td>";
    content += "</tr>";
    }
    console.log(content);
    $("#mydonation").append(content);
}
