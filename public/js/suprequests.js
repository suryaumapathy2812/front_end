function requests(){
    var url = server + "getrequests";
    $.get(url, function(data){
        console.log(data);
        displayInTable(data);
        dataTable();
    })
}

function displayInTable(data){
    var content = "";
    for(let d of data){
        var date = moment(d.created_on,"YYYY-MM-DDTHH:mm").fromNow();    
        content += "<tr>";
        content += "<td>"+d.request_id+"</td>";
        content += "<td>" +d.NAME+ "</td>";
        content += "<td>" +d.amount+ "</td>";
        content += "<td>" +d.username+ "</td>";
        content += "<td>" +date+ "</td>";
        content += "<td>" +d.status+ "</td>";
        content += "</tr>";
    }
    $("#tableBody").append(content);
}


function dataTable(){
    $(document).ready( function () {
        $('#tableData').DataTable();
    } );
}
