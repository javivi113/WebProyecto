function addBaliza() {
    var asBalizas = new Set();
    let bal = this.value;
    console.log(bal);
    cambioSit();
    document.getElementById("MiLista").innerHTML += "<li>" + bal + "</li>";
    let valGuardados = localStorage.getItem("balizasGuardadas");
    if (valGuardados == undefined) {
        asBalizas.add(bal);
        localStorage.setItem("balizasGuardadas", JSON.stringify([...asBalizas]));
    } else {
        document.getElementById("dGuardadoError").innerHTML="";
        asBalizas = new Set();
        console.log('x: ', JSON.parse(valGuardados));
        let getsVal = JSON.parse(valGuardados);
        getsVal.forEach(a => {
            asBalizas.add(a);
        })
        asBalizas.add(bal);
        localStorage.setItem("balizasGuardadas", JSON.stringify([...asBalizas]));
    }
}   