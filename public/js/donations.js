function checkRole(){
    let user = JSON.parse(localStorage.getItem("isLoggedIn"));
    //console.log(user);
    if(user.role == 'A'){
        adminDonations();
    }else{
        userDonations();
    }
}

//==========================================User donations=========================================================//

function userDonations(){
    let user = JSON.parse(localStorage.getItem("isLoggedIn"));
    var id = JSON.parse(localStorage.getItem("isLoggedIn")).user_id;
    $("#username").append(user.username);
    var url =server + "usrDonations";
    var formdata = {ID:id};   
    usrTblHead();
    //console.log(formdata);
    $.post(url,formdata, function(data){
        //console.log(data);
        usrdisplay(data);
        dataTable();
    });
}

function usrdisplay(data){
    var content ="";
    for (let d of data){
        content += "<tr>";
        content += "<td>" + d.request_id + "</td>";
        content += "<td>" + d.name + "</td>";
        content += "<td>" + d.donation_amount + "</td>";
        content += "</tr>";
    }
    $("#tableBody").append(content);
}

//===========================================Admin Donations=======================================================//


function adminDonations(){
    let user = JSON.parse(localStorage.getItem("isLoggedIn"));
    var id = JSON.parse(localStorage.getItem("isLoggedIn")).user_id;
    $("#username").append(user.username);
    var url =server+ "admDonations";
    var formdata = {ID:id};
    admTblHead();
    console.log(formdata);
    $.post(url,formdata, function(data){
        console.log(data);
        admdisplay(data);
        dataTable();
    });
}

function admdisplay(data){
    var content ="";
    for (let d of data){
        content += "<tr>";
        content += "<td>" + d.request_id + "</td>";
        content += "<td>" + d.name + "</td>";
        content += "<td>" + d.amount + "</td>";
        content += "<td>" + d.donor_id + "</td>";
        content += "<td>" + d.donation_amount + "</td>";
        content += "</tr>";
    }
    $("#tableBody").append(content);
}


//=================================================================================================================//

function admTblHead(){
    var tHead = "";
    tHead += "<tr>";
    tHead += "<th>Request ID</th>";
    tHead += "<th>Name</th>";
    tHead += "<th>Amount</th>";
    tHead += "<th>Donor ID</th>";
    tHead += "<th>Donation</th>";
    tHead += "</tr>";
    $("#thead").html(tHead);
}


function usrTblHead(){
    var tHead = "";
    tHead += "<tr>";
    tHead += "<th>Request ID</th>";
    tHead += "<th>Name</th>";
    tHead += "<th>Funds Donated</th>";
    tHead += "</tr>";
    $("#thead").html(tHead);
}

//=====================================================================================================================//


function dataTable(){
    $(document).ready( function () {
        $('#tableData').DataTable();
    } );
}
