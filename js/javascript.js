
document.getElementById('botonCambio').onclick = function(){
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "El texto de este párrafo cambió. ¡Excelente!";
}

document.getElementById('botonCambio2').addEventListener('click', function(){
    console.log("El texto cambió desde el EventListener del segundo botón.");
    document.getElementById("demo").innerHTML = "El texto de este párrafo cambió. ¿Qué mirá bobo? Anda pa'llá";

})

document.getElementById('boton_color').addEventListener('click', function(){
    console.log("El color de fondo cambió.")
    document.body.style.backgroundColor = ' #b0ff6f'
}
)
document.getElementById('boton_default').addEventListener('click', function(){
    console.log("Se reestablecieron el párrafo y color de fondo originales.");
    document.body.style.backgroundColor = 'var(--main-bg-color)';
    document.getElementById("demo").innerHTML = "Hola mundo!";
}
)
