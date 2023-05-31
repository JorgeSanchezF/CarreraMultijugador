// Identifico main y coloco el flexbox

let section = document.getElementsByTagName('section')[1];
section.classList.add('container');

// Coloco el numero de filas y columnas
let nFilas = 15;
let nColumnas = 15;

let div, objetivo, pl1, pl2;

let filasWASD, columnasWASD
let filasFlechas, columnasFlechas
let filasMeta, columnasMeta
let puntuacion1=0;
let puntuacion2=0;

// Carga
document.addEventListener('load', inicio());

/**
 * Hace tablero
 */
function inicio(){
    // Bucles para crear filas y columas
    for (let i = 0; i < nFilas; i++){
        for(let j = 0;  j < nColumnas; j++){
            div = document.createElement('div'); 
            div.classList.add('card');
            div.setAttribute('id', `f${i}c${j}`);

            section.appendChild(div);
        }
    }
    colocarFichas();
}

/**
 * Pone las casillas
 */
function colocarFichas(){


    filasMeta= Math.floor(Math.random()*15);
    columnasMeta= Math.floor(Math.random()*15);

    console.log(Math.floor(Math.random()*15));
    objetivo = document.getElementById(`f${filasMeta}c${columnasMeta}`);
    objetivo.classList.add('objetivo');

    filasWASD= Math.floor(Math.random()*15);
    columnasWASD= Math.floor(Math.random()*15);

    pl1 = document.getElementById(`f${filasWASD}c${columnasWASD}`);
    pl1.classList.add('pl1');

    filasFlechas= Math.floor(Math.random()*15);
    columnasFlechas= Math.floor(Math.random()*15);

    pl2 = document.getElementById(`f${filasFlechas}c${columnasFlechas}`);
    pl2.classList.add('pl2');
}

// evento de teclado para mover
document.addEventListener('keydown', mover);
 
function mover(event){
    console.log(event);
    switch(event['key']){
        case 'w':
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.remove('pl1');
            if(filasWASD==0){
                filasWASD=14;
            }else{
                filasWASD=filasWASD-1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(filasWASD==14){
                    filasWASD=0;
                }else{
                    filasWASD=filasWASD+1;
                }
            }
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.add('pl1');
            ganar();
            break;
        case 's':
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.remove('pl1');
            if(filasWASD==14){
                filasWASD=0;
            }else{
                filasWASD=filasWASD+1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(filasWASD==0){
                    filasWASD=14;
                }else{
                    filasWASD=filasWASD-1;
                } 
            }
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.add('pl1');
            ganar();
            break;
        case 'a':
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.remove('pl1');
            if(columnasWASD==0){
                columnasWASD=14;
            }else{
                columnasWASD=columnasWASD-1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(columnasWASD==14){
                    columnasWASD=0;
                }else{
                    columnasWASD=columnasWASD+1;
                }
            }
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.add('pl1');
            ganar();
            break;
        case 'd':
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.remove('pl1');
            if(columnasWASD==14){
                columnasWASD=0;
            }else{
                columnasWASD=columnasWASD+1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(columnasWASD==0){
                    columnasWASD=14;
                }else{
                    columnasWASD=columnasWASD-1;
                }
            }
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.add('pl1');
            ganar();
            break;
        case 'ArrowUp':
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.remove('pl2');
            if(filasFlechas==0){
                filasFlechas=14;
            }else{
                filasFlechas=filasFlechas-1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(filasFlechas==14){
                    filasFlechas=0;
                }else{
                    filasFlechas=filasFlechas+1;
                } 
            }
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.add('pl2');
            ganar();
            break;
        case 'ArrowDown':
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.remove('pl2');
            if(filasFlechas==14){
                filasFlechas=0;
            }else{
                filasFlechas=filasFlechas+1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(filasFlechas==0){
                    filasFlechas=14;
                }else{
                    filasFlechas=filasFlechas-1;
                }
            }
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.add('pl2');
            ganar();
            break;
        case 'ArrowLeft':
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.remove('pl2');
            if(columnasFlechas==0){
                columnasFlechas=14;
            }else{
                columnasFlechas=columnasFlechas-1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(columnasFlechas==14){
                    columnasFlechas=0;
                }else{
                    columnasFlechas=columnasFlechas+1;
                } 
            }
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.add('pl2');
            ganar();
            break;
        case 'ArrowRight':
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.remove('pl2');
            if(columnasFlechas==14){
                columnasFlechas=0;
            }else{
                columnasFlechas=columnasFlechas+1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(columnasFlechas==0){
                    columnasFlechas=14;
                }else{
                    columnasFlechas=columnasFlechas-1;
                }
            }
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.add('pl2');
            ganar();
            break;      
        }
}
function ganar(){
    if(`f${filasWASD}c${columnasWASD}`==`f${filasMeta}c${columnasMeta}`){
        alert("Ganador: jugador 1");
        document.removeEventListener('keydown',mover);
        puntuacion1++;
    }
    if(`f${filasFlechas}c${columnasFlechas}`==`f${filasMeta}c${columnasMeta}`){
        alert("Ganador: jugador 2");
        document.removeEventListener('keydown',mover);
        puntuacion2++;
    }
}
document.getElementsByClassName('player1').textContent=`Player1: ${puntuacion1}`;
document.getElementsByClassName('player2').textContent=`Player2: ${puntuacion2}`;
function reinicio(){
    document.addEventListener('keydown',mover);
    document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.remove('pl1');
    document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.remove('pl2');
    document.getElementById(`f${filasMeta}c${columnasMeta}`).classList.remove('objetivo');
    colocarFichas();
    document.getElementById('jugador1').textContent=`Jugador 1: ${puntuacion1}`;
    document.getElementById('jugador2').textContent=`Jugador 2: ${puntuacion2}`;
}

