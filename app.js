let intentos = 1;
let numeroSecreto = 0;
let listaNumerosSort = [];
let numerroMaximo = 2;
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
    let numeroGenerado =  Math.floor(Math.random()*numerroMaximo)+1;
console.log(numeroGenerado);
console.log(listaNumerosSort);

//Si ya sorteamos todos los números

if(listaNumerosSort.length == numerroMaximo){
    asignarTextoElemento("p",`Ya se sortearon todos los números posibles`);
}
else{
    //si el número generado está incluido en la lista
    if(listaNumerosSort.includes(numeroGenerado)){
        return generarNumeroSecreto();
     }
     else{
        listaNumerosSort.push(numeroGenerado);
        return numeroGenerado
    }
     
}
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
    asignarTextoElemento(".texto__parrafo",`Indica un número del 1 al ${numerroMaximo}`); 
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


