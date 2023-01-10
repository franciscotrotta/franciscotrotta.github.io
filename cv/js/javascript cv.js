
function confirmarEnvio(){
    alert("¡Gracias! Tu consulta será respondida lo antes posible");
}

const form = document.getElementById("formulario-contacto");
form.addEventListener('submit', confirmarEnvio);

let list = document.getElementsByTagName("ol");
document.getElementById('temaclaro').addEventListener('click', function(){
   document.body.style.backgroundColor = "var(--light-bg-color)";
   document.body.style.color = "var(--light-color)";
   document.getElementById("columnalateral").style.backgroundColor = "var(--col-light-color)";
   list[0].style.backgroundColor =  "rgb(230, 230, 230)";
   list[0].style.color = "var(--light-color)";
})
document.getElementById('temaoscuro').addEventListener('click', function(){
    document.body.style.backgroundColor = "var(--dark-bg-color)";
    document.body.style.color = "var(--dark-color)";
    document.getElementById("columnalateral").style.backgroundColor = "var(--col-dark-color)";
    list[0].style.backgroundColor = "rgb(49, 49, 49)";
    list[0].style.color = "var(--dark-color)";
})