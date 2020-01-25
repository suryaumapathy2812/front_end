function login(){
    //event.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();
    var formData = {email:email,password:password};

    console.log(formData);

    var url = "http://localhost:3000/login";
    $.post(url,formData, function(data){
        console.log(data);
        if(data.errorMessage){
            console.log(data.errorMessage);
            alert("invalid Login Credentials");
        }else{
            localStorage.setItem("LOGGED_IN_USER", JSON.stringify(data));
            window.location.href="requests.html";
        }
    });
}
