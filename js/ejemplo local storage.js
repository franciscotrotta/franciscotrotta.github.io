/*copiar este código en la consola y revisar la pestaña de almacenamiento
para corroborar que clickcount existe y añadirle 1, o para crearla **/
if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
}else{
    localStorage.clickcount = 1;
}
//funciona con cualquier variable de localStorage
if (localStorage.nombre) {
    console.log(localStorage.nombre);
}else{
    localStorage.nombre = "Tu nombre";
}