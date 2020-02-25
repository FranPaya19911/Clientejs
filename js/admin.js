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
    alert(num)


    for (i = 1; i <= num; i++) {
        var tr = document.createElement("tr");

        for (j = 0; j < valor.length; j++) {

            var usuario = document.cookie.split(valor[j])[i].split(';')[0];
            var usuario = usuario.split("=")[1];

            if (j == 4) {
                usuario = usuario.charAt(0) + "********";
            }
            if (j == 5) {
                var td = document.createElement("td");
                td.id = "img" + i;
                valor = td.id;
                td.setAttribute("onmouseout", "sacarfoto(" + "'" + valor + "'" + ")")
            } else {
                var td = document.createElement("td");
            }

            var texto = document.createTextNode(usuario);
            td.appendChild(texto);
            tr.appendChild(td);

        }
        padre.appendChild(tr);

    }

}

function sacarfoto(valor) {
    alert(valor);
    document.getElementById("t").innerHTML = "Hola";
    document.getElementById(valor).innerHTML = "Hola";


}