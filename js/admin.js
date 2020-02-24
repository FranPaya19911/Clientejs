function Crear() {
    var padre = document.getElementById("tabla");

    var texto = "";
    var num = (document.cookie.split("User_").length - 1);
    var valor = ["User_", "Nombre_", "email_", "telefono_", "pass_", "img_"];


    var user = "User_";
    var nombre = "Nombre_";
    var email = "email_";
    var telefono = "telefono_";
    var pass = "pass_";
    var img = "img_";

    for (i = 0; i <= num; i++) {
        var tr = document.createElement("tr");

        for (j = 1; j <= valor.length; j++) {
            var usuario = document.cookie.split(valor[i])[j].split(';')[0];
            alert(usuario);
            var usuario = usuario.split("=")[1];
            texto = usuario

            var elemento = document.createElement("td");
            var contenido = document.createTextNode(texto);
            tr.appendChild(elemento);
            elemento.appendChild(contenido);

        }
        padre.appendChild(tr);

    }

    alert(texto)

}