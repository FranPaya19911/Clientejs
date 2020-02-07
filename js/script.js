//////////////////////////////////
// Vetana Login
/////////////////////////////////

var usuarios = new Array();
var cont = 1;
usuarios[0] = new Array(new user("admin", "admin", "admin@admin.com", "admin", "img/user.png"), "5/11/2019");


function user(nom, apell, email, pass, foto) {
    this.nombre = nom;
    this.apellidos = apell;
    this.email = email;
    this.contraseña = pass;
    this.imagen = foto;
}

// Esta función consiste en añadir a los usuarios nuevos a nuestra aplicación
function anyadir() {

    var nombre = document.getElementById("nombre_hija").value;
    var apellidos = document.getElementById("apellidos_hija").value;
    var email = document.getElementById("email_hija").value;
    var pass = document.getElementById("pass_hija").value;
    var imagen = document.getElementById("imagen_hija").src;

    usario = new user(nombre, apellidos, email, pass, imagen);
    var date = new Date()

    var dia = date.getDate();
    var mes = date.getMonth() + 1;
    var anyo = date.getFullYear();
    var fecha = dia + "/" + mes + "/" + anyo;
    usuarios[cont] = new Array(usario, fecha)
    cont = cont + 1;
}

//esta función oculta y muestra parte del html y lo rellena con los datos que se le enviá tiene la parte del admin y la parte de los usuarios de la pagina principal.
function entrar() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('contrasena').value;

    if (email == "admin@admin.com") {
        if (pass === "admin") {
            document.getElementById('inicio').style.display = "none";
            document.getElementById('paqginaAdmin').style.display = "block";

            //creación de la tabla.
            var tabla = "<table><tr><th>Nombre</th><th>Apellidos</th><th>Email</th><th>Contraseña</th><th>imagen</th><th>Fecha de reguistro</th></tr>"
            for (var i = 0; i < usuarios.length; i++) {
                tabla = tabla + "<tr>";

                tabla = tabla + "<td>" + usuarios[i][0].nombre + "</td>";
                tabla = tabla + "<td>" + usuarios[i][0].apellidos + "</td>";
                tabla = tabla + "<td>" + usuarios[i][0].email + "</td>";

                var contra = usuarios[i][0].contraseña;
                tabla = tabla + "<td>" + contra.charAt(0) + "********" + "</td>";

                tabla = tabla + "<td>" + "<img class='img' src='" + usuarios[i][0].imagen + "' alt='imagen'>" + "</td>";
                tabla = tabla + "<td>" + usuarios[i][1] + "</td>";

                tabla = tabla + "</tr>";
            }
            tabla = tabla + "</table>";
            document.getElementById('tabla').innerHTML = tabla;

        } else {
            alert("Error en la contraseña");
            document.getElementById('contrasena').value = "";
        }

    } else {
        var texto = "";
        var cont = 0;
        var section = screen.colorDepth;
        for (var i = 0; i < usuarios.length; i++) {
            if (email == usuarios[i][0].email) {
                if (pass == usuarios[i][0].contraseña) {
                    cont = 1;
                    document.getElementById('inicio').style.display = "none";
                    document.getElementById('usuario').style.display = "block";

                    document.getElementById('imgUsuario').src = usuarios[i][0].imagen;
                    document.getElementById('nameUsuario').innerHTML = usuarios[i][0].nombre;
                    document.getElementById('nombreUsuario').innerHTML = (usuarios[i][0].nombre + " " + usuarios[i][0].apellidos);
                    document.getElementById('correoUsuario').innerHTML = usuarios[i][0].email;

                    if (section < 16) {
                        document.getElementById('Section').style.display = "block";
                    }

                } else {
                    texto = "La contraseña es incorrecta";
                }

            } else {
                texto = "Error. El correo es erróneo";
            }
        }
        if (cont == 0) {
            alert(texto);
        }
    }
}

// Esta función nos permite volver al “inicio”
function cerrar(opcion) {
    if (opcion == 'ad') {
        document.getElementById('paqginaAdmin').style.display = "none";


    } else if (opcion == 'usu') {
        document.getElementById('usuario').style.display = "none";
    }

    document.getElementById('inicio').style.display = "block";
    document.getElementById('email').value = "";
    document.getElementById('contrasena').value = "";

}

// Esta función nos abre la ventana secundaria 
function reguis() {
    nuevaventana = window.open('Reguistrar.html', '', '');
}

//////////////////////////////////
// Vetana Reguistrar
/////////////////////////////////

//Esta función valida los datos para que lo usuarios se registren adecuadamente.
function validador() {

    var texto = "Correcto";
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var imagen = document.getElementById("img").src;

    if (nombre == "" || apellidos == "" || email == "" || pass1 == "" || pass2 == "") {
        texto = "Error" + "\n" + "No puedes dejar ninguno vacio, excepto la foto";

    } else {

        var contravf = true;
        var emailvf = true;
        var nombrevf = true;
        var apellidosvf = true;

        var contratxt = "";
        var emailtxt = "";
        var nombretxt = "";
        var apellidostxt = "";

        if (pass1 != pass2) {
            contravf = false;
            contratxt = "Las contraseñas no coinciden";
            document.getElementById("pass2").value = "";

        } else {
            if (pass1.length < 8) {
                contravf = false;
                contratxt = "La contraseña tiene que ser de 8 caracteres como minimo";
                document.getElementById("pass2").value = "";
            }
            if (contravf) {
                var letramayus = true;
                var letraminus = true;
                var numero = true;

                for (var i = 0; i < pass1.length; i++) {
                    var val = pass1.substring(i, i + 1);
                    var num = val.charAt(0);
                    val = val.charCodeAt(0);


                    if (!isNaN(num)) {
                        numero = false;
                    }

                    if ((val >= 65) && (val <= 90)) {
                        letramayus = false;
                    } else if ((val >= 97) && (val <= 122)) {
                        letraminus = false;
                    }
                }

                if (numero || letramayus || letraminus) {
                    contravf = false;
                    contratxt = "La contraseña tiene que tener una mayúscula, una minúscula y un número";
                    document.getElementById("pass2").value = "";
                }
            }
        }

        if (emailvf) {
            var correo = email.toUpperCase();
            var num = correo.charCodeAt(0);
            var numero = correo.charAt(0);


            if ((!isNaN(numero)) || ((num >= 65) && (num <= 90))) {
                var contarroba = 0;
                var posarroba = 0;
                var pospunto = 0;
                var cont = 0;

                for (var i = 0; i < correo.length; i++) {

                    var val = correo.substring(i, i + 1);
                    val = val.charCodeAt(0);

                    if (val == 64) {
                        contarroba++;
                        posarroba = i;
                    } else if (val == 46) {
                        pospunto = i;
                    }
                    if ((val != 46) && ((val < 48) || (val > 57)) && ((val < 64) || (val > 94))) {
                        emailtxt = 'El correo solo puede tener [a-z], [0-9] y "." ' + "\n";
                        emailvf = false;
                    }
                }

                if (contarroba == 1) {

                    if (posarroba < pospunto) {
                        for (i = (pospunto + 1); i < correo.length; i++) {
                            cont++;
                        }

                        if ((cont < 2) || (cont > 4)) {
                            emailtxt = emailtxt + "El dominio tiene que tener de 2 a 4 caracteres en el correo";
                            emailvf = false;
                        }
                    } else {
                        emailtxt = emailtxt + "Tiene que haber un punto después del arroba en el correo";
                        emailvf = false;
                    }

                } else {
                    if (contarroba == 0) {
                        emailtxt = emailtxt + "Tiene que haber un arroba en el correo";
                        emailvf = false;
                    } else {
                        emailtxt = emailtxt + "Solo es valido un arroba en el correo";
                        emailvf = false;
                    }

                }

            } else {
                emailtxt = "Tiene que empezar por un numero o una letra el correo";
                emailvf = false;
            }
        }


        if (nombrevf) {
            var nombres = nombre.toUpperCase();

            for (var i = 0; i < nombres.length; i++) {
                var num = nombres.substring(i, i + 1);
                num = num.charCodeAt(0);

                if ((num < 65) || (num > 90)) {

                    nombretxt = "El Nombre solo puede tener letras y tiene que ser una palabra (No valen espacios)";
                    nombrevf = false;
                }

            }
        }

        if (apellidosvf) {
            var apellido = apellidos.toUpperCase();

            for (var i = 0; i < apellido.length; i++) {
                var num = apellido.substring(i, i + 1);
                num = num.charCodeAt(0);

                if ((num != 32) && (num < 65) || (num > 90)) {

                    apellidostxt = "Los Apellidos solo puede tener letras";
                    apellidosvf = false;
                }

            }
        }

        if (!contravf || !emailvf || !nombrevf || !apellidosvf) {
            texto = "Error" + "\n";
            if (!contravf) {
                texto = texto + contratxt + "\n";
            }
            if (!emailvf) {
                texto = texto + emailtxt + "\n";
            }
            if (!nombrevf) {
                texto = texto + nombretxt + "\n";
            }
            if (!apellidosvf) {
                texto = texto + apellidostxt + "\n";
            }
        }
    }


    if (texto == "Correcto") {

        opener.document.getElementById('nombre_hija').value = nombre;
        opener.document.getElementById('apellidos_hija').value = apellidos;
        opener.document.getElementById('email_hija').value = email;
        opener.document.getElementById('pass_hija').value = pass1;
        opener.document.getElementById('imagen_hija').src = imagen;
        opener.anyadir();
    }

    if (texto != "Correcto") {
        alert(texto);
    } else {
        alert("Te has registrardo correctamente")
        window.close();
    }

    opener.document.getElementById('email').value = "";
    opener.document.getElementById('contrasena').value = "";
}