function create(){
    let user = JSON.parse(localStorage.getItem("isLoggedIn")).user_id;

    var name = $("#name").val();
    var description = $("#description").val();
    var amount = $("#amount").val();

    var formData = {name:name,description:description,amount:amount,created_by_id:user};

    console.log(formData);

    var url = server+ "addrequest";
    $.post(url,formData, function(data){
        console.log(data);
        window.location.href = "requests.html";
    });
}