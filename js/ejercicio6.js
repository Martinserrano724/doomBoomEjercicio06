
const formulario = document.forms.tiempoForm;


let segundosTiempo = 0;
let minutosTiempo = 0;
let horasTiempo = 0;
let temporizador;

let segundosIngresado=0;
let minutosIngresada = 0
let horaIngresada = 0

function obtenerValor() {
  segundosIngresado= document.getElementById("formSegundo").value;
  minutosIngresada= document.getElementById("formMinuto").value;
  horaIngresada= document.getElementById("formHora").value;
}

function iniciar() {
  
  cargarValores();
  
    temporizador = setInterval(actualizarTemporizador, 1000);
    
   console.log(`los segundos son: ${segundosIngresado} los minutos ${minutosIngresada} la hora ${horaIngresada}`)

  }
  
function actualizarTemporizador() {
  
  
  if (segundosTiempo === 0 && minutosTiempo !=0) {
      segundosTiempo = 60;
      minutosTiempo--;
  }
  if (minutosTiempo == 1 && segundosTiempo ==0){
      segundosTiempo=60;
      minutosTiempo=0;
  }
  if(horasTiempo!=0){
    horasTiempo--;
    minutosTiempo=59;
    segundosTiempo=60;

  }
  if((segundosTiempo!=0 || minutosTiempo!=0 || horaIngresada!=0 )){
    console.log(segundosTiempo);
    segundosTiempo--;
  }
  
  
    
    const tiempoActual = pad(horasTiempo) + ":" + pad(minutosTiempo) + ":" + pad(segundosTiempo);
    document.getElementById("temporizador").innerHTML = tiempoActual;
}
function cargarValores(){
  obtenerValor();

if(segundosIngresado!=0 || minutosTiempo !=0 || horaIngresada!=0){
  if(segundosIngresado == 0 && minutosIngresada == 1 && horaIngresada >= 0){
  segundosTiempo=60;
  minutosTiempo=0;
  horasTiempo=horaIngresada
  }
  else if(minutosIngresada == 0 && horaIngresada ==1  ){
    
    (segundosIngresado>0)?segundosTiempo=segundosIngresado:segundosTiempo=60
    minutosTiempo=59;
  horaIngresada=0;
  }
  else if(segundosIngresado==0 && minutosIngresada >=0 ){
    minutosIngresada--;
    segundosIngresado=60;
  }
  
  else{
    segundosTiempo=segundosIngresado;
    minutosTiempo=minutosIngresada;
    horasTiempo=horaIngresada
  }


}
  
  
  
}


function pausar() {
    clearInterval(temporizador);
     document.getElementById("formSegundo").value=segundosTiempo;
     document.getElementById("formMinuto").value=minutosTiempo;
     document.getElementById("formHora").value=horasTiempo;
    

}

function reiniciar() {
    clearInterval(temporizador);
    segundosTiempo = 1;
    minutosTiempo = 0;
    horasTiempo = 0;
    document.getElementById("temporizador").innerHTML = `00:00:00`;
    clearInterval(temporizador);
}




function pad(valor) {
    return valor < 10 ? "0" + valor : valor;
}