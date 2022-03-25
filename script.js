var RegistrosUsuarios = [];//importante!
function back() {
    document.getElementById("tabla-cuerpo").innerHTML = "";
    document.getElementById("secundario").style = "display: none;";
}


function validar() {//validar datos del formnulario
    let existe = false;
    let id = document.getElementById("id").value;
    if (id != "" && id > 0) {
        let Nombre = document.getElementById("nombre").value;
        let Apellido = document.getElementById("apellido").value;
        let Direccion = document.getElementById("direccion").value;
        console.log(Nombre);
        if (Nombre != "") {
            if (Apellido != "") {
                if (Direccion != "") {
                    for (let i = 0; i < RegistrosUsuarios.length; i++) {
                        if (id == RegistrosUsuarios[i].ID) {
                            existe = true;
                        }

                    }
                    if (!existe) {
                        Guardar(id, Nombre, Apellido, Direccion);
                    } else {
                        alert("el id ya existe en los registros")
                    }

                } else {
                    alert("Por favor llenar el campo Direccion");
                }
            } else {
                alert("Por favor llenar el campo Apellido");
            }
        } else {
            alert("Por favor llenar el campo Nombre");
        }
    } else {
        alert("Escribe un id valido")
        document.getElementById("id").value = "";

    }

}


function Guardar(id, nombre, apellido, direccion) {
    var NuevaRegistro = {
        ID: id,
        Nombre: nombre,
        Apellido: apellido,
        Direccion: direccion

    };
    RegistrosUsuarios.push(NuevaRegistro);
    document.getElementById("id").value="";
        document.getElementById("nombre").value="";
        document.getElementById("apellido").value="";
        document.getElementById("direccion").value="";
    VerTabla();
}


function VerTabla() {

    let tbody = document.getElementById("tabla-cuerpo");
    for (let i = 0; i < RegistrosUsuarios.length; i++) {

        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = RegistrosUsuarios[i].ID;
        let td2 = document.createElement('td');
        td2.innerHTML = RegistrosUsuarios[i].Nombre;
        let td3 = document.createElement('td');
        td3.innerHTML = RegistrosUsuarios[i].Apellido;
        let td4 = document.createElement('td');
        td4.innerHTML = RegistrosUsuarios[i].Direccion;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tbody.appendChild(tr);
    }
    document.getElementById("secundario").style = "display: block;";

}
