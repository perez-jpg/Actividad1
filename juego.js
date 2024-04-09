let img;
let arena = document.getElementById("arena")
let reiniciar = document.getElementById("reiniciar");
let mensaje = document.getElementById("cont");
let cont= 0;
var cronometro;
creararena()
reiniciar.addEventListener("click",creararena);
function creararena() {
    if (cronometro) {
        cronometro.detener();
    }
    var elementoCronometroAnterior = document.getElementById("temporizadorAnterior");
    if (elementoCronometroAnterior) {
        elementoCronometroAnterior.parentNode.removeChild(elementoCronometroAnterior);
    }
      var tiempoRestante = 300;
      var display = document.querySelector('#temporizador');
      cronometro = iniciarTemporizador(tiempoRestante, display);
    
      function iniciarTemporizador(duration, display) {
        var timer = duration, minutes, seconds;
        var intervalId;
        var avisado = false; 
        function detenerCronometro() {
          clearInterval(intervalId);
        }
        function reiniciarTemporizador(nuevaDuracion) {
          detenerCronometro();
          timer = nuevaDuracion;
          iniciarTemporizador(timer, display);
        }
        intervalId = setInterval(function () {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);
    
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
    
          display.textContent = minutes + ":" + seconds;

          if (cont == 12) {
            detenerCronometro();
          } 
          if (--timer < 0) {
            if (!avisado) {
              alert("¡Se acabó el tiempo!😣🙁");
              alert("Puedes vulver a intentarlo para mejorar tu tiempo😉⌚");
              avisado = true;
              detenerCronometro();
            }
            detenerCronometro();
          }
        }, 1000);
        return {
          detener: detenerCronometro,
          reiniciar: reiniciarTemporizador,
        };
      }
    cont= 0
    img = ['<img src="img/github.png" alt="github">','<img src="img/java.png" alt="java">','<img src="img/linux.png" alt="linux">','<img src="img/microsoft.png" alt="microsoft">','<img src="img/mysql.png" alt="mysql">','<img src="img/php.png" alt="php">','<img src="img/python.png" alt="python">','<img src="img/visual.png" alt="visual">']
    selecciones = []
    let cartas = []
    for (let i = 0; i < 16; i++) {
        cartas.push(`
        <div class="area-carta" onclick="seleccionarcarta(${i})">
            <div class="carta" id="carta${i}">
                <div class="lado reverso" id="reverso${i}">
                    ${img[0]}
                </div>
                <div class="lado superior">
                <i class="fa-solid fa-question" style="color:white;"></i>
                </div>
            </div>
        </div>        
        `)
        if (i % 2 == 1) {
            img.splice(0, 1)
        }
    }
    cartas.sort(() => Math.random() - 0.5)
    arena.innerHTML = cartas.join(" ")
    mensaje.textContent = cont;
}

function seleccionarcarta(i) {
    let carta = document.getElementById("carta" + i)
    if (carta.style.transform != "rotateY(180deg)") {
        carta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let reverso1 = document.getElementById("reverso" + selecciones[0])
        let reverso2 = document.getElementById("reverso" + selecciones[1])
        if (reverso1.innerHTML != reverso2.innerHTML) {
            let carta1 = document.getElementById("carta" + selecciones[0])
            let carta2 = document.getElementById("carta" + selecciones[1])
            carta1.style.transform = "rotateY(0deg)"
            carta2.style.transform = "rotateY(0deg)"
            document.body.style.backgroundColor = "#ff3c00";
            setTimeout(function() {
              document.body.style.backgroundColor = "#3c0653";  
            },600)
        }else{
          document.body.style.backgroundColor = "green";
            setTimeout(function() {
              document.body.style.backgroundColor = "#3c0653";  
            },600)
            cont=cont+1
            mensaje.textContent = cont;
            if (cont == 12) {
                mensaje.textContent ="¡GANASTE!"+12;
                alert("¡Felicidades! Has encontrado todas las parejas.");
                detenerCronometro();
              } 
        }
    }, 1000);  
  }