
function guardarLocalStorage() {
    localStorage.setItem('Documento', documento.value)
    localStorage.setItem('Nombre', nombre.value)
    localStorage.setItem('Apellido', apellido.value)
    localStorage.setItem('Telefono', telefono.value)
    localStorage.setItem('Direccion', direccion.value)
    localStorage.setItem('Barrio', barrio.value)
    localStorage.setItem('Observaciones', observaciones.value)
}

let documento = document.getElementById("doc")
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let telefono = document.getElementById("telefono")
let direccion = document.getElementById("direccion")
let barrio = document.getElementById("barrio")
let observaciones = document.getElementById("observaciones")
let error = document.getElementById("Error")
error.style.color = "red" 

function enviarFormulario() {
    let mensajesError = []
    if (documento.value === null || document.value === '') {
        mensajesError.push("Ingrese documento")
    }
    else if (nombre.value === null || nombre.value === '') {
        mensajesError.push("Ingrese documento")
    }
    else if (apellido.value === null || apellido.value === '') {
        mensajesError.push("Ingrese documento")
    }
    else if (telefono.value === null || telefono.value === '') {
        mensajesError.push("Ingrese documento")
    }
    else if (direccion.value === null || direccion.value === '') {
        mensajesError.push("Ingrese documento")
    }
    else if (barrio.value === null || barrio.value === '') {
        mensajesError.push("Ingrese documento")
    }
    else if (observaciones.value === null || observaciones.value === '') {
        mensajesError.push("Ingrese documento")
    }
    error.innerHTML = mensajesError.join(", ");
    return false
}

function enviar() {
    guardarLocalStorage(); enviarFormulario();
    
}
