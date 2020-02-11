
function check(){
    //event.preventDefault();

    let password1 = $("#inputPassword").val();
    let password2 = $("#confirmPassword").val();

    console.log(password1,password2);
    if(password1 !== password2){
        alert("Please Enter Password Again")
    }else{
        console.log("match");
        adduser();
    }
}

function adduser(){
    var username = $("#inputUsername").val();
    var email = $("#inputEmail").val();
    var password = $("#inputPassword").val();
    var role = $("#role:checked").val();

    var user = {username:username,email:email,password:password,role:role};
    console.log(user);
    var url = server+ "adduser";
    $.post(url,user, function(data){
        console.log(data);
        alert("Registered Successfully");
        //window.location.href = "Login.html";
    });
}


