let iconos
let Nuevo = document.getElementById("Nuevo");
let mensaje = document.getElementById("cont");
let cont= 0
generarTablero()
Nuevo.addEventListener("click",generarTablero);
function  cargarIconos(params) {
    iconos = [
        '<i class="fa-brands fa-php"></i>',
        '<i class="fa-brands fa-java"></i>',
        '<i class="fa-brands fa-js"></i>',
        '<i class="fa-brands fa-css3-alt"></i> ',
        '<i class="fa-brands fa-github"></i>',
        '<i class="fa-solid fa-database"></i>',
        '<i class="fa-brands fa-python"></i>',
        '<i class="fa-brands fa-codepen"></i>',
        '<i class="fa-brands fa-linux"></i>',
        '<i class="fa-solid fa-server"></i>',
        '<i class="fa-solid fa-cookie-bite"></i>',
        '<i class="fa-brands fa-bootstrap"></i>',
    ]
}

function generarTablero() {

    function iniciarTemporizador(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                alert("Time's Up!");
                clearInterval(intervalId);
            }
        }, 1000);
    }
    var tiempoRestante = 300; 
    var display = document.querySelector('#temporizador');
    iniciarTemporizador(tiempoRestante, display);
    cont= 0
    cargarIconos()
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for (let i = 0; i < 24; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${iconos[0]}
                </div>
                <div class="cara superior">
                <i class="fa-solid fa-question" style="color:white;"></i>
                </div>
            </div>
        </div>        
        `)
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
    mensaje.textContent = cont;
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            cont=cont+1
            mensaje.textContent = cont;
            if (cont==12){
                mensaje.textContent=12 + " - GANASTE";
            }
            trasera1.style.background = "pull"
            trasera2.style.background = "pull"
        }
    }, 1000);  
  }
