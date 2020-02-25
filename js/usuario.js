//////// En esta funcion buscamos los datos del usuario registrado y los colocamos en el html ////////
function datos() {
    //recoger el dato de la sesion creada en iniciar.js
    var data = sessionStorage.getItem('user');

    var user = "User_" + data;
    var nombre = "Nombre_" + data;
    var email = "email_" + data;
    var telefono = "telefono_" + data;
    var imagen = "img_" + data;

    var valor = [user, nombre, email, telefono];
    var ids = ["nameUsuario", "nombreUsuario", "correoUsuario", "Telefono"];

    for (i = 0; i <= 3.; i++) {
        valor[i] = document.cookie.split(valor[i])[1].split(';')[0];
        valor[i] = valor[i].split("=")[1];

        document.getElementById(ids[i]).innerHTML = valor[i];
    }

    imagen = document.cookie.split(imagen)[1].split(';')[0];
    imagen = imagen.split("=")[1];

    document.getElementById("imgUsuario").src = imagen;
}