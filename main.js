const $inicioJuego = document.querySelector(".inicio-juego");
const $hasPerdido = document.querySelector('.perdiste');
let turno = 0;
let arraySecuenciaMaquina = [];


function animacionColor(item){
    let clase = "d" + [item];
    document.querySelector(`.${clase}`).classList.toggle("animacion-click")
    setTimeout(function(){
        document.querySelector(`.${clase}`).classList.toggle("animacion-click")}, 400
    );
}


function clickJugador(item){
    animacionColor(item);
    turnoJugador(item);
}


function inicioJuego() {
    arraySecuenciaMaquina = [];
    $hasPerdido.classList.add("oculto");
    document.querySelector(".container").classList.remove("oculto");
    turnoComputadora();
}


function colorAleatorio(){
    let numeroAleatorio = Math.floor(Math.random() * 4) + 1; //genero un numero aleatorio entre 1 y 4
    arraySecuenciaMaquina.push(numeroAleatorio);
}


function turnoComputadora(){
    bloqueaInputUsuario();
    colorAleatorio();

    arraySecuenciaMaquina.forEach((elemento, index) => {
        setTimeout(() => animacionColor(elemento), 500 * index)
    });

    turno = 0;
    setTimeout(() => desbloqueaInputUsuario(), 500 * arraySecuenciaMaquina.length)    ;
}


function turnoJugador(item){
    
    if (Number(item) === arraySecuenciaMaquina[turno]){
        turno++;
        if (turno === arraySecuenciaMaquina.length){
            return setTimeout(function(){
                turnoComputadora()
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

function desbloqueaInputUsuario(){
    document.querySelectorAll('.cuadro').forEach(cuadro => {
        cuadro.onclick = () => {clickJugador(cuadro.dataset.numero)}
    })
}

function bloqueaInputUsuario(){
    document.querySelectorAll('.cuadro').forEach(cuadro => {
        cuadro.onclick = () => {}
    })
}


$inicioJuego.onclick = inicioJuego;
