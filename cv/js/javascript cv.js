
function confirmarEnvio(){
    alert("¡Gracias! Tu consulta será respondida lo antes posible");
}

const form = document.getElementById("formulario-contacto");
form.addEventListener('submit', confirmarEnvio);

document.getElementById('temaclaro').addEventListener('click', function(){
   document.body.style.backgroundColor = "var(--light-bg-color)";
   document.body.style.color = "var(--light-color)";
   document.getElementById("columnalateral").style.backgroundColor = "var(--col-light-color)";
   
})
document.getElementById('temaoscuro').addEventListener('click', function(){
    document.body.style.backgroundColor = "var(--dark-bg-color)";
    document.body.style.color = "var(--dark-color)";
    document.getElementById("columnalateral").style.backgroundColor = "var(--col-dark-color)";
})