let intentos = 1;
let numeroSecreto = 0;
// console.log(numeroSecreto);

// Asignación de funciones





function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}


function verificarIntento() {

console.log(intentos);
let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

if(numeroDeUsuario===numeroSecreto){
asignarTextoElemento("p", `Acertaste en ${intentos}  ${intentos===1 ? "intento" : "intentos"}`);
document.getElementById("reiniciar").removeAttribute("disabled");
}

else{

    // El usuario no acertó

    if(numeroDeUsuario>numeroSecreto){
        asignarTextoElemento("p", "El número secreto es menor");
    }
    else{
        asignarTextoElemento("p", "El número secreto es mayor");
    }
    limpiarCajaTexto();
    intentos++;
}


return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function limpiarCajaTexto(){
  document.querySelector("#valorUsuario").value = "";

  
}

// function habilitarBoton(){
//     document.getElementById("reiniciar").setAttribute("enabled");
// }

 function deshabilitarBoton(){
     document.getElementById("reiniciar").setAttribute("disabled", true);
 }

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento(".texto__parrafo","Indica un número del 1 al 100"); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
// Limpiar la caja
limpiarCajaTexto();
// Cargar los mensajes iniciales
condicionesIniciales();
//  Deshabilitar el boton
deshabilitarBoton();
}

condicionesIniciales();


