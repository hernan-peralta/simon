const $1 = document.getElementsByClassName("d1");
const $2 = document.getElementsByClassName("d2");
const $3 = document.getElementsByClassName("d3");
const $4 = document.getElementsByClassName("d4");
const $inicioJuego = document.querySelector(".inicio-juego")
const $hasPerdido = document.getElementsByTagName("p");
let turno = 0;
let arrayColores = [];


function animacionColor(item){
    let clase = "d" + [item];
    document.getElementsByClassName(clase)[0].classList.toggle("animacion-click");
    setTimeout(function(){
        document.getElementsByClassName(clase)[0].classList.toggle("animacion-click")}, 400
    );
}


function clickJugador(item){
    animacionColor(item);
    turnoJugador(item);
}


function inicioJuego() {
    arrayColores = [];
    $hasPerdido[0].classList.add("oculto");
    document.getElementsByClassName("container")[0].classList.remove("oculto");
    turnoComputadora();
}


function colorAleatorio(){
    let numeroAleatorio = Math.floor(Math.random() * Math.floor(4)) + 1; //genero un numero aleatorio entre 1 y 4
    arrayColores.push(numeroAleatorio);
}


function turnoComputadora(){
    colorAleatorio();

    //este loop lo saque de https://borgs.cybrilla.com/tils/javascript-for-loop-with-delay-in-each-iteration-using-iife/
    for(let i = 0; i < arrayColores.length; i++) {(function(i){
        setTimeout(function () {
            animacionColor(arrayColores[i]);
        }, 500*i);
    })(i);
    }
    turno = 0;
}


function turnoJugador(item){
    
    if (Number(item) === arrayColores[turno]){
        turno++;
        if (turno === arrayColores.length){
            return setTimeout(function(){
                turnoComputadora()}, 1000
            );
        }
        else{
            return '';
        }   
    }

    if (item != arrayColores[turno]){
        $hasPerdido[0].classList.remove("oculto");
        document.getElementsByClassName("container")[0].classList.add("oculto");
    }
}


$inicioJuego.onclick = inicioJuego;
