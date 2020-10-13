const $inicioJuego = document.querySelector(".inicio-juego");
const $hasPerdido = document.querySelector('.perdiste');
let turno = 0;
let arraySecuenciaMaquina = [];


function animarColor(item){
    let clase = "d" + [item];
    document.querySelector(`.${clase}`).classList.toggle("animacion-click")
    setTimeout(function(){
        document.querySelector(`.${clase}`).classList.toggle("animacion-click")}, 400
    );
}


function manejarClickJugador(item){
    animarColor(item);
    gestionarTurnoJugador(item);
}


function iniciarJuego() {
    arraySecuenciaMaquina = [];
    $hasPerdido.classList.add("oculto");
    document.querySelector(".container").classList.remove("oculto");
    gestionarTurnoComputadora();
}


function generarColorAleatorio(){
    let numeroAleatorio = Math.floor(Math.random() * 4) + 1; //genero un numero aleatorio entre 1 y 4
    arraySecuenciaMaquina.push(numeroAleatorio);
}


function gestionarTurnoComputadora(){
    bloquearInputUsuario();
    generarColorAleatorio();

    arraySecuenciaMaquina.forEach((elemento, index) => {
        setTimeout(() => animarColor(elemento), 500 * index)
    });

    turno = 0;
    setTimeout(() => desbloquearInputUsuario(), 500 * arraySecuenciaMaquina.length)    ;
}


function gestionarTurnoJugador(item){
    
    if (Number(item) === arraySecuenciaMaquina[turno]){
        turno++;
        if (turno === arraySecuenciaMaquina.length){
            return setTimeout(function(){
                gestionarTurnoComputadora()
            }, 1000);
        }
        else{
            return '';
        }   
    }

    if (item != arraySecuenciaMaquina[turno]){
        $hasPerdido.classList.remove("oculto");
        document.querySelector(".container").classList.add("oculto");
    }
}

function desbloquearInputUsuario(){
    document.querySelectorAll('.cuadro').forEach(cuadro => {
        cuadro.onclick = () => {manejarClickJugador(cuadro.dataset.numero)}
    })
}

function bloquearInputUsuario(){
    document.querySelectorAll('.cuadro').forEach(cuadro => {
        cuadro.onclick = () => {}
    })
}


$inicioJuego.onclick = iniciarJuego;
