let intentos = 1;
let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);

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
}

else{
    if(numeroDeUsuario>numeroSecreto){
        asignarTextoElemento("p", "El número secreto es menor");
    }
    else{
        asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
}
return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}




asignarTextoElemento("h1","Juego del número secreto");
asignarTextoElemento(".texto__parrafo","Indica un número del 1 al 100");