//////// En esta funcion utilizamos DOM ////////
//////// Creamos etiquetas y funciones ////////
function Crear() {
    var padre = document.getElementById("tabla");

    var texto = "";
    var num = (document.cookie.split("User_").length - 1);
    var valor = ["User_", "Nombre_", "email_", "telefono_", "pass_", "img_"];


    for (i = 1; i <= num; i++) {
        var tr = document.createElement("tr");

        for (j = 0; j < valor.length; j++) {

            var usuario = document.cookie.split(valor[j])[i].split(';')[0];
            var usuario = usuario.split("=")[1];

            // J == 4. Es la contraseña a la cual he querido simular que esta incriptada, ya que para mi es un dato delicado.
            if (j == 4) {
                usuario = usuario.charAt(0) + "********";
            }

            var td = document.createElement("td");

            // J == 5. Es la imagen a la cual he querido añadir dos eventos,
            // por lo cual he creado este if. 
            if (j == 5) {
                td.id = "img" + i;
                valortd = td.id;
                td.setAttribute("onmouseout", "sacarfoto(" + "'" + valortd + "'" + ")");
                td.setAttribute("onmouseover", "ponerfoto(" + "'" + valortd + "'" + ")");
                td.value = usuario;
            }

            var texto = document.createTextNode(usuario);
            td.appendChild(texto);
            tr.appendChild(td);

        }
        padre.appendChild(tr);

    }


}

//////// Eventos ratón ////////
var textosrc = "";

//////// En esta funcion utilizamos el evento onmouseout ////////
function sacarfoto(valor) {
    document.getElementById(valor).innerHTML = textosrc;
}

//////// En esta funcion utilizamos el evento onmouseover ////////
function ponerfoto(valor) {
    textosrc = document.getElementById(valor).value;
    document.getElementById(valor).innerHTML = "<img src='" + textosrc + "'>";

}