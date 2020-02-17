function validador() {
    var nombre = document.getElementById("nombre").value;
    var nombre_completo = document.getElementById("completo").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var password = document.getElementById("pass1").value;
    var password2 = document.getElementById("pass2").value;
    var imagen = document.getElementById("img").src;
    var correcto = true;

    correcto = false;
    if (correcto) {
        escribir(nombre, nombre_completo, email, telefono, password, imagen);
        location.href = "Iniciar.html";
    } else {
        alert("error");
    }




}
//validar por teclado el telefono
function teclatelefono(event) {
    alert("hey");
    var evento = event || window.event;
    var codenum = evento.charCode;
    var codeespe = evento.keyCode;
    var numero = false;
    var especial = false;
    if ((codeespe == 8) || (codeespe == 37) || (codeespe == 39) || (codeespe == 46)) {
        especial = true;
    } else {
        especial = false;
    }
    debugger;
    if (codenum >= 48 && codenum <= 57) {
        numero = true;
    } else {
        numero = false;
    }
    alert("num" + numero)

    if (numero == true || especial == true) {
        return true;
    } else {
        return false;
    }
}
//validar por teclado el nombre y apellidos
function usuario(event) {
    var evento = event || window.event;
    var code = evento.keyCode;

    if (((code >= 65) && (code <= 90)) || (code == 8) || (code == 37) || (code == 39) || (code == 46) || (code == 32)) {
        return true;
    } else {
        return false;
    }
}

function escribir(user, nombre, email, telefono, pass, img) {
    document.cookie = "User_" + user + "=" + user;
    document.cookie = "Nombre_" + user + "=" + nombre;
    document.cookie = "email_" + user + "=" + email;
    document.cookie = "telefono_" + user + "=" + telefono;
    document.cookie = "pass_" + user + "=" + pass;
    document.cookie = "img_" + user + "=" + img;
}