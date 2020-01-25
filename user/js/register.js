function adduser(){
    event.preventDefault();
    var username  = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var formData = {username:username,email:email,password:password};

    var url = "http://localhost:3000/setuser";
    $.post(url,formData,function(data){
        console.log(data);
        window.location.href= 'login.html';
    });
}