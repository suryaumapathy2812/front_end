function users() {
    var filter = $("#filter").val();
    console.log(filter);

    var url = server + "getusers";

    if (filter == "All") {
        url = server + "getusers";
    } else {
        url = server + "getusers?role=" + filter;
    }

    console.log(url);
    $.get(url, function (data) {
        console.log(data);
        displayInTable(data);
        dataTable();
    });

}





function displayInTable(data) {
    var content = "";
    for (let d of data) {

        var date = moment(d.created_on,"YYYY-MM-DDTHH:mm").fromNow();

        console.log(d);
        content += "<tr>";
        content += "<td>" + d.user_id + "</td>";
        content += "<td>" + d.username + "</td>";
        content += "<td>" + d.email + "</td>";
        let role = "";
        if (d.role == 'A') {
            role = "Admin";
        } else {
            role = "Donor";
        }
        content += "<td>" + role + "</td>";
        let disabled = "";
        let btnColor = "";
        if (d.STATUS == 0) {
            disabled = "Non-Active";
            btnColor = "secondary";
        } else {
            disabled = "Active";
            btnColor = "primary";
        }
        content += "<td>" +date+ "</td>";
        content += "<td> <button class='btn btn-" + btnColor + "' type='button' onclick='btnClick(" + d.user_id + "," + d.STATUS + ")'>" + disabled + "</button> </td>";
        content += "</tr>";
    }
    $("#tableBody").html(content);
}



function btnClick(user_id, data) {
    console.log(user_id);
    console.log(data);
    var url = server + "getusers?user_id=" + user_id;
    console.log(url);
    $.get(url, function (data) {
        console.log(data[0]);
        let newStatus = "";
        if (data[0].STATUS == 0) {
            newStatus = '1';
            console.log("if newSTATUS = " + newStatus);
        } else if (data[0].STATUS == 1) {
            newStatus = '0';
            console.log("else newSTATUS = " + newStatus);
        }
        console.log(newStatus);
        var URL = server + "updateUserStatus";
        let formdata = { status: newStatus, user_id: data[0].user_id };
        console.log(formdata);
        $.post(URL, formdata, function (data) {
            console.log(data);
            window.location.reload();
        });
    });
}

function dataTable(){
    $(document).ready( function () {
        $('#tableData').DataTable();
    } );
}
