function checkUser() {
    let user = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (user.role == 'A') {
        adminRequest();
    } else {
        userRequest();
    }
}

//=============================================================================================================================

function adminRequest() {
    let user = JSON.parse(localStorage.getItem("isLoggedIn"));
    $("#username").append(user.username);

    var urlParams = new URLSearchParams(window.location.search);
    var urlID = urlParams.get("id");
    console.log(urlID);

    var url = server + "request/" + urlID;
    $.get(url, function (data) {
        console.log(data);

        var tbody = "<tr><th>Funds Received</th>";
        tbody += "<td> <p id='reqRec'></p></td> </tr>";
        tbody += "<tr><th> STATUS </th>";
        tbody += "<td> <p id='reqStatus'></p> </td> </tr>";

        var url = server + "receivedDonations?id=" + urlID;
        $.get(url, function (DATA) {
            //console.log(DATA);
            $("#reqRec").text(DATA[0].Donation);
        });


        $("#tableBody").append(tbody);
        $("#reqID").text(data[0].request_id);
        $("#reqName").text(data[0].name);
        $("#reqDes").text(data[0].description);
        $("#reqFund").text(data[0].amount);

        if(data[0].status == '1'){
            $("#reqStatus").text("OPEN");
        }else if(data[0].status == '0'){
            $("#reqStatus").text("CLOSED");
        }else{
            $("#reqStatus").text("EXPIRED");
        }
        
        var option = "<select class='btn' id='status' onchange='changeStatus()'>";
        option += "<option value=''>--Please choose an option--</option>";
        option += "<option value='1'>OPEN</option>";
        option += "<option value='0'>CLOSED</option>";
        option += "<option value='2'>EXPIRED</option>";
        option += "</select>";


        var content = "";
        content += "<tr align='center'>";
        content += "<td> " + option + " </td>";
        content += "<td colspan='2'> <a class='btn btn-secondary' href='requests.html'>Back";
        content += "<tr>";

        $("title").html("Request");
        $("#tableBody").append(content);

    });
}




//=============================================================================================================================

function userRequest() {
    let user = JSON.parse(localStorage.getItem("isLoggedIn"));
    $("#username").append(user.username);

    var urlParams = new URLSearchParams(window.location.search);
    var urlID = urlParams.get("id");
    console.log(urlID);

    var url = server + "request/" + urlID;
    $.get(url, function (data) {
        console.log(data);
        $("#reqID").text(data[0].request_id);
        $("#reqName").text(data[0].name);
        $("#reqDes").text(data[0].description);
        $("#reqFund").text(data[0].amount);

        var content = "<tr>";
        content += "<th>Donation</th>";
        content += "<td> <input class='form-control' id='donation' type='number'> </td>";
        content += "</tr><tr>";
        content += "<td></td>";
        content += "<td> <button class='btn btn-primary' type='submit'>Donate</button> </td>";
        content += "</tr>";

        $("#tableBody").append(content);

    });
}

function donate() {
    let user = JSON.parse(localStorage.getItem("isLoggedIn"));
    var urlParams = new URLSearchParams(window.location.search);
    var urlID = urlParams.get("id");

    var reqID = urlID;
    var donorID = user.user_id;
    var donation = $("#donation").val();

    var formdata = { reqID: reqID, donorID: donorID, donation: donation };

    var url = server + "donate";
    $.post(url, formdata, function (data) {
        console.log(data);
        window.location.href = "donations.html";
    });
}

//===============================================================================================================================


// 0 - CLOSED
// 1 - OPEN
// 2 - EXPIRED



function changeStatus() {
    console.log("changeStatus");
    var urlParams = new URLSearchParams(window.location.search);
    var urlID = urlParams.get("id");
    var url = server + "request/" + urlID;
    $.get(url, function (data) {
        console.log(data);
        var newStatus = $("#status").val();
        console.log(newStatus);
        var url = server + "updateRequestStatus";
        var formdata = {status:newStatus,request_id:urlID}
        $.post(url,formdata, function(data){
            console.log(data);
            window.location.reload();
        });
    });
}