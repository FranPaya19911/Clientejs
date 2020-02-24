function entrar() {
    var correo = document.getElementById("email").value;
    var passwd = document.getElementById("password").value;

    if (correo == "admin@admin.com" && passwd == "Admin1234") {
        location.href = "Admin.html";
    }
}