function capturarDatos() {
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('last-name').value;
    console.log(nombre)

    if (nombre === '' || apellido === '') {
        alert('Campos requeridos')
    } else {
        alert(nombre +  " " + apellido);  
    }
}







