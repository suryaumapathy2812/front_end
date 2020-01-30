function login() {
  event.preventDefault();
  var email = $("#inputEmail").val();
  var password = $("#inputPassword").val();

  var formData = { email: email, password: password };

  var url = server + "Login";
  $.post(url, formData, function(data) {
    console.log(data);
    if (data.errorMessage) {
      console.log(data.errorMessage);
      alert("invalid Login Credentials");
    } else {
      localStorage.setItem("isLoggedIn", JSON.stringify(data));
      window.location.href = "requests.html";
    }
  });
}
