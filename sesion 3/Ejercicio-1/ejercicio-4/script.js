let listar = document.getElementById("listar")

boton = document.getElementById("submit");

boton.addEventListener("click",capturaDatos)

function capturaDatos(){
    let nombre = document.querySelector('#name').value;
    let apellido = document.querySelector("#last-name").value;
    let telefono = document.querySelector("#phone-number").value;
    guardarLocalStorage(nombre,apellido,telefono)
}
function guardarLocalStorage(nombre,apellido,telefono){
    localStorage.setItem('Nombre',nombre)
    localStorage.setItem('Apellido',apellido)
    localStorage.setItem('Telefono',telefono)
    listarData();
}

function listarData(){
    let nombre = localStorage.getItem('Nombre')
    let apellido = localStorage.getItem('Apellido')
    let telefono = localStorage.getItem('Telefono')
    listar.innerHTML=`
    <table> 
    <tr>
    <th>Nombre</th>
    <th>Apellido</th>
    <th>Telefono</th>
    </tr>
    <tr>
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${telefono}</td>
    </tr>
    </table>
    `
}