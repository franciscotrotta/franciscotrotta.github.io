//función vinculada al formulario
function confirmarEnvio(){
    alert("¡Gracias! Tu consulta será respondida lo antes posible");
}
function mostrarAyuda(){
    alert("Tecla Inicio para volver al principio de la página\n" + "Tecla Fin para ir al final del documento.\n" + "Sitio desarrollado por Francisco Trotta para Front end Academy - 2022")
}
const form = document.getElementById("formulario-contacto");
form.addEventListener('submit', confirmarEnvio);

//cambios de color en función del tema elegido
let list = document.getElementsByTagName("ol");
document.getElementById('temaclaro').addEventListener('click', function(){
   document.body.style.backgroundColor = "var(--light-bg-color)";
   document.body.style.color = "var(--light-color)";
   document.getElementById("columnalateral").style.backgroundColor = "var(--col-light-color)";
   list[0].style.backgroundColor =  "rgb(222, 203, 133)";
   list[0].style.color = "var(--light-color)";
})
document.getElementById('temaoscuro').addEventListener('click', function(){
    document.body.style.backgroundColor = "var(--dark-bg-color)";
    document.body.style.color = "var(--dark-color)";
    document.getElementById("columnalateral").style.backgroundColor = "var(--col-dark-color)";
    list[0].style.backgroundColor = "rgb(49, 49, 49)";
    list[0].style.color = "var(--dark-color)";
})

//funciones relacionadas al mensaje de ayuda

window.addEventListener('keydown', function(event){
    if(event.key == "h"||event.key == "H"){
        mostrarAyuda();
    }
})

document.getElementById('ayuda').addEventListener('click', mostrarAyuda);