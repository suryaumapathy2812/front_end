function listRequests(){
    var url = "http://localhost:3000/getrequests";
    $.post(url, function(data){
        console.log(data);
        displayRequests(data);
    });
}

function displayRequests(data){
    var content = "";
    for(let req of data){
        content += "<tr>";
        content += "<td>#" + req.request_id + "</td>";
        content += "<td>" + req.description +"</td>";
        content += "<td>Rs." +req.requested_amount + "</td>";
        content += "<td> <a href='donation.html?id=" + req.request_id + "'> donate </a>";
        content += "</tr>";
    }
    console.log(content);
    $("#requests").append(content);
}

function filter(){
    $(document).ready( function () {
        $('#tableHeader').DataTable();
    } );
}