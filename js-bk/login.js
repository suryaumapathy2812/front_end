function login() {
  event.preventDefault();
  var email = $("#inputEmail").val();
  var password = $("#inputPassword").val();

  var formData = { email: email, password: password };

  var url = server + "Login";
  $.post(url, formData, function (data) {
    console.log(data);
    if (data.errorMessage) {
      console.log(data.errorMessage);
      alert("invalid Login Credentials");
    } else {

      if (data.STATUS == 0) {
        alert("User ID is not Activated");

      } else {

        if (data.role == 'SA') {
          window.location.href = "superAdmin.html";
        } else {
          localStorage.setItem("isLoggedIn", JSON.stringify(data));
          window.location.href = "requests.html";
        }
      }

    }
  });
}
