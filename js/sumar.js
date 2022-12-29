

document.getElementById('sumar').addEventListener('click', function(){
    let primerValor = document.getElementById('numero1').value;
    console.log("El primer valor de la suma es: " + primerValor);
    let segundoValor = document.getElementById('numero2').value;
    console.log("El segundo valor es:" + segundoValor);
    let resultado = sumar(parseInt(primerValor), parseInt(segundoValor));
    console.log("El resultado de la suma es: " + resultado);
    
    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contenedorResultado').style.display = 'block';

});

function sumar(a, b){
    return a + b;
}