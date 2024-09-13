document.getElementById('btnEmpezar').addEventListener('click', function () {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('juego').style.display = 'block';
});

//Definimos la logica del juego
const pista = document.getElementById("pista");
const numeroIntentos = document.getElementById("numerosIntentados");
const resultado = document.getElementById("resultado");
const numeroInput = document.getElementById('numeroInput');
const mensajeError= document.getElementById('mensajeError');
let randomNumber = Math.floor(Math.random() * 100) + 1; 
let intentos = 0;
let maxIntentos = 10;
var intentosFallidos = [];
console.log(randomNumber);

document.getElementById('adivinarBtn').addEventListener('click', function () {  //Cada vez que se le de click al boton de adivinar va a pasar alguna de las cosas que estan definidas abajo

    let numeroUsuario = parseInt(numeroInput.value);

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {      //Si no se ingresa ningun numero, o un numero entre 1 y 100 va a lanzar ese error
        mensajeError.textContent= "Por favor ingrese un numero entre 1 y 100";
        return;
    }else{

        mensajeError.textContent= "";
    }

    if (intentos >= maxIntentos) {     //Si se pasa del numero numero maximo de intentos que esta definido a 10, va a lanzar este error y a deshabilitar el espacio para escribir
        resultado.textContent = "Lastima, perdiste el numero era " + randomNumber + ":,,C";
        numeroInput.disabled = true;
        return;
    }

    intentos++;
    document.getElementById('intentos').textContent = intentos;

    if (numeroUsuario < randomNumber) {       //Dependiendo de si el numero generado es mayor o menor al numero que ingresa el jugador va a lanzar unas pistas o mensajes diciendole si su numero es mayor o menor que el numero generado 
        pista.textContent = "El número es mayor a " + numeroUsuario;
        intentosFallidos.push(numeroUsuario);
    } else if (numeroUsuario > randomNumber) {
        pista.textContent = "El numero es menor a  " + numeroUsuario;
        intentosFallidos.push(numeroUsuario);
    } else {
        resultado.textContent = "Felicidades!! Has adivinado el número :D";    
        numeroIntentos.textContent = '';
        numeroInput.disabled = true;
        pista.textContent = '';
        return;
    }

    numeroIntentos.textContent = 'Números intentados:' + intentosFallidos;

});

document.getElementById('reset').addEventListener('click', function () {  //Si se le click al boton reset, coloca todos las variables por defecto y empieza el juego de nuevo
    intentos = 0;
    maxIntentos = 10;
    resultado.textContent = '';
    pista.textContent = '';
    numeroIntentos.textContent = '';
    numeroInput.disabled = false;
    numeroInput.value = '';
    intentosFallidos = [];
    mensajeError.textContent= "";
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
});



