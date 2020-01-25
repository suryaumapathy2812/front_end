function request_id(){
    //event.preventDefault();
    var sql = "http://localhost:3000/newRequest_id";
    $.post(sql,function(data){
        console.log(data);
        let i = data.length - 1;
        //console.log(i);
        let request_id = parseInt(data[i].request_id)+1;
        console.log(request_id);
        $("#Request_ID").text("#"+request_id);
    });
}


function addrequest(){
    event.preventDefault();
    var description = $("#Description").val();
    var amount = $("#Amount").val();
    var created_by_id = JSON.parse(localStorage.getItem("LOGGED_IN_USER")).user_id;
    var request = {description:description,requested_amount:amount,created_by_id:created_by_id};

console.log(request);
    var sql = "http://localhost:3000/setrequest";
    $.post(sql,request, function(data){
        console.log(data);
    })
}