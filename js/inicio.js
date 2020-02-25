function entrar() {
    var user = document.getElementById("user").value;
    var passwd = document.getElementById("password").value;

    if (user == "admin@admin.com" && passwd == "Admin1234") {
        location.href = "Admin.html";
    } else {
        var encontrado = false;
        var num = (document.cookie.split("User_").length - 1);
        var valuser = "User_";
        var valpass = ""


        for (i = 1; i <= num; i++) {

            var lacookie = document.cookie.split(valuser)[i].split(';')[0];
            var nombre = lacookie.split("=")[1];
            valpass = "pass_" + nombre;

            if (user == nombre) {

                lacookie = document.cookie.split(valpass)[1].split(';')[0];
                nombre = lacookie.split("=")[1];

                if (passwd == nombre) {
                    encontrado = true;
                    sessionStorage.setItem('user', user);
                }
            }
        }

        if (encontrado) {
            location.href = "Usuarios.html";
        } else {
            alert("error")
        }

    }
}