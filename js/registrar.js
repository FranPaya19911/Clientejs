//////// Validacion de campos con EXPRESIONES REGULARES ////////
function validador() {
    var user = document.getElementById("nombre").value;
    var nombre_completo = document.getElementById("completo").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var password = document.getElementById("pass1").value;
    var password2 = document.getElementById("pass2").value;
    var imagen = document.getElementById("img").src;
    var correcto = true;

    var usuario = true;
    var nombre = true;
    var valemail = true;
    var pass = true;

    var num = (document.cookie.split("User_").length - 1);

    if (num > 0) {
        var valuser = "User_";

        for (i = 1; i <= num; i++) {
            var lacookie = document.cookie.split(valuser)[i].split(';')[0];
            var nombre = lacookie.split("=")[1];

            if (user == nombre) {
                usuario = false;
            }
        }

        if (!usuario) {
            document.getElementById("lblusuario").style.display = "block";
        } else {
            document.getElementById("lblusuario").style.display = "none";
        }

    }

    var expnombre = new RegExp(/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?$/);
    if (!expnombre.test(nombre_completo)) {
        nombre = false;
        document.getElementById("lblnombre").style.display = "block";
    } else {
        document.getElementById("lblnombre").style.display = "none";
    }

    var expemail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    if (!expemail.test(email)) {
        valemail = false;
        document.getElementById("lblemail").style.display = "block";
    } else {
        document.getElementById("lblemail").style.display = "none";
    }

    if (valemail) {
        var correo = "email_";
        for (i = 1; i <= num; i++) {
            var lacookie = document.cookie.split(correo)[i].split(';')[0];
            var nombre = lacookie.split("=")[1];
            if (email == nombre) {
                valemail = false;
            }
        }

        if (!valemail) {
            document.getElementById("lblemalnew").style.display = "block";
        } else {
            document.getElementById("lblemalnew").style.display = "none";
        }
    }

    var expasswd = new RegExp(/(?=\w*[A-Z])(?=\w*[a-z])(?=\w*[0-9]){8}(?=\w*[A-Z])(?=\w*[a-z])(?=\w*[0-9])/)
    if (!expasswd.test(password)) {
        pass = false;
        document.getElementById("lblpass").style.display = "block";
    } else {
        document.getElementById("lblpass").style.display = "none";
    }

    if (pass) {
        if (password != password2) {
            pass = false;
            document.getElementById("lblpass2").style.display = "block";
        } else {
            document.getElementById("lblpass2").style.display = "none";
        }
    }


    if (!nombre || !valemail || !pass || !usuario) {
        correcto = false;
    }

    if (correcto) {
        if (user == "" || nombre_completo == "" || email == "" || telefono == "" || password == "") {
            alert("Todos los campos son obligatorios")
        } else {
            escribir(user, nombre_completo, email, telefono, password, imagen);
            location.href = "Iniciar.html";
        }

    }
}

//////// Validacion de campos por TECLADO ////////

//////// validar por teclado el telefono ////////
function teclatelefono(event) {
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

    if (numero == true || especial == true) {
        return true;
    } else {
        return false;
    }
}

//////// validar por teclado el nombre y apellidos ////////
function usuario(event) {
    var evento = event || window.event;
    var code = evento.keyCode;
    if (((code >= 65) && (code <= 90)) || (code == 8) || (code == 37) || (code == 39) || (code == 46) || (code == 32)) {
        return true;
    } else {
        return false;
    }
}

//////// CREACIÓN DE LAS COOKIES ////////
function escribir(user, nombre, email, telefono, pass, img) {
    document.cookie = "User_" + user + "=" + user;
    document.cookie = "Nombre_" + user + "=" + nombre;
    document.cookie = "email_" + user + "=" + email;
    document.cookie = "telefono_" + user + "=" + telefono;
    document.cookie = "pass_" + user + "=" + pass;
    document.cookie = "img_" + user + "=" + img;
}