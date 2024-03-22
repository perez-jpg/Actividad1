let iconos
generarTablero()
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
  cargarIconos()
  let tablero = document.getElementById("tablero")
  let tarjetas = []
  for (let i = 0; i < 24; i++) {
    tarjetas.push(`
        <div class="area-tarjeta" onclicl="seleccionarTarjeta${i}>
            <div class="tarjeta" id="tarjetas${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${iconos[0]}
                </div>
                <div class="cara superior">
                    <i class="fa-solid fa-laptop-code" style="color:white;"></i>
                </div>
            </div>
        </div> 
    `)
    if(i%2==1){
        iconos.splice(0,1)
    }
  }
  tarjetas.sort(() => Math.random()-0.5)
  tablero.innerHTML = tarjetas.join(" ")
}
 
 let selecciones

 function seleccionarTarjeta(i) {
  let tarjeta = document.getElementById("tarjeta"+i)
  if(tarjeta.style.transform != "rotateY(180deg"){
    tarjeta.style.transform != "rotateY(180deg"
    selecciones.push(i)
  }
  if(selecciones.length == 2){
    deseleccionar(selecciones)
    selecciones = []
  }
  function deseleccionar(selecciones) {
    setTimeout(() => {
        let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
        let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
        if(trasera1.innerHTML != trasera2.innerHTML){
            let trasera1 = document.getElementById("tarjeta" + selecciones[0])
            let trasera2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            trasera.style.background = "plum"
            trasera
        }
    }, 1000);
  }
 }
