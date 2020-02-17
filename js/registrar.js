function validador() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var password = document.getElementById("pass1").value;
    var password2 = document.getElementById("pass2").value;
    var imagen = document.getElementById("img").src;
    var correcto = true;

    correcto = false;
    if (correcto) {
        escribir(nombre, apellidos, email, telefono, password, imagen);
        location.href = "Iniciar.html";
    } else {
        alert("error");
    }




}
//validar por teclado el telefono
function teclatelefono(event) {
    var evento = event || window.event;
    var code = evento.charcode;
    if (((code >= 48) && (code <= 57)) || ((code >= 96) && (code <= 105)) || (code == 8) || (code == 37) || (code == 39) || (code == 46)) {
        return true;
    } else {
        return false;
    }
}

function escribir(user, apellidos, email, telefono, pass, img) {
    document.cookie = "Nombre_" + user + "=" + user;
    document.cookie = "apellidos" + user + "=" + apellidos;
    document.cookie = "email_" + user + "=" + email;
    document.cookie = "telefono" + user + "=" + telefono;
    document.cookie = "pass_" + user + "=" + pass;
    document.cookie = "img_" + user + "=" + img;
}