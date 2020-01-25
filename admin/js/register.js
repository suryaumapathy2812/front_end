function adduser(){
    event.preventDefault();
    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var user = {username:username,email:email,password:password};

    var url = "http://localhost:3000/register";
    $.post(url,user, function(data){
        console.log(data);
        alert("Registered Successfully");
        window.location.href = "Login.html";
    });
}