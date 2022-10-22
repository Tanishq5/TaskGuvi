function submitData() {
  var username = $("input[name=username]").val();
  var email = $("input[name=email]").val();
  var password = $("input[name=password]").val();

  if (username != "" && email != "" && password != "") {
    var formData = { username: username, email: email, password: password };
    $("#message").html(
      '<span style="color: red;">Processing form...please wait...</span>'
    );
    $.ajax({
      url: "http://localhost/taskguvi/php/register.php",
      method: "POST",
      data: formData,
      success: function (response) {
        var res = JSON.parse(response);
        console.log(res);

        if (res.success == true) {
          $("#message").html(
            '<span style="color: green;">Form submitted successfully</span>'
          );
          window.location = "login.html"
        } else {
          $("#message").html(
            '<span style="color: red;">Form not submitted. Some error in running in the database query</span>'
          );
        }
      },
    });
  } else {
    $("#message").html(
      '<span style="color: red;">Please fill all the fields</span>'
    );
  }
}
