document.getElementById("btnInicioSesion").addEventListener("click", IniciarSes);
// document.getElementById("btnRegistrarse").addEventListener("click", registrarse);
function IniciarSes() {
    let usu = $("#inpUsuario").val();
    let cont = $("#inpContraseña").val();

    let lsSesion = localStorage.getItem("Sesion")
    if (lsSesion == undefined) {
        if (usu == "admin" && cont == "1234") {
            let aSesion = new Array();
            aSesion[0] = usu;
            aSesion[1] = cont;
            localStorage.setItem("Sesion", JSON.stringify([...aSesion]))
            $(".dLogin").hide();
            $("#SesionIniciada").show();
            $(".inicioPanel").hide();
            $("body").css({
                "background-image": "",
                "background-position": "center",
                "background-repeat": "no-repeat",
                "background-size": "cover"
            });
        } else {
            alert("Usuario y/o contraseña incorrectos")
        }
    }
}
// function registrarse() {
//     $(".dLogin").hide();
//     $(".Registrarse").show();

//     let lsSesion = localStorage.getItem("Sesion")
//     if (lsSesion == undefined) {
//         if (usu == "admin" && cont == "1234") {
//             window.location = `${url}/api/Tiempo`;
//             let aSesion = new Array();
//             aSesion[0] = usu;
//             aSesion[1] = cont;
//             localStorage.setItem("Sesion", JSON.stringify([...aSesion]))
//         } else {
//             alert("Usuario y/o contraseña incorrectos")
//         }
//     }

// }
