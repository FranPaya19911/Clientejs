function validador() {
    alert("Hola");
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass1").value;
    //var password2 = document.getElementById("pass2").value;
    var imagen = document.getElementById("img").src;
    alert(nombre + "," + apellidos + "," + email + "," + password + "," + imagen);


    escribir(nombre, apellidos, email, password, imagen);

    location.href = "Iniciar.html";

}

function escribir(user, apellidos, email, pass, img) {
    document.cookie = "Nombre_" + user + "=" + user;
    document.cookie = "apellidos" + user + "=" + apellidos;
    document.cookie = "email_" + user + "=" + email;
    document.cookie = "pass_" + user + "=" + pass;
    document.cookie = "img_" + user + "=" + img;
}