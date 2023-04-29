function create() {
    event.preventDefault();
    let user = JSON.parse(localStorage.getItem("isLoggedIn")).user_id;

    var name = $("#name").val();
    var description = $("#description").val();
    var amount = $("#amount").val();
    var date = $("#expiryDate").val();

    var formData = { name: name, description: description, amount: amount, created_by_id: user, status: "OPEN", expiry_date: date };

    console.log(formData);

    var url = server + "addrequest";
    $.post(url, formData, function (data) {
        console.log(data);
        window.location.href = "requests.html";
    });
}


function test() {

    let a = 0;

    for (let i = 0; i < 5; i++) {
        a++;
    }

    return a;

}