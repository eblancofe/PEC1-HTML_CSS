import dayjs from "dayjs";
import { es }  from "dayjs/locale/es";
import localeData from "dayjs/plugin/localeData";

/* ejemplo M2.P1 para saber que está funcionando JS en el navegador Web */
const name = 'world';
console.log(`Hello ${name}`);
/*
const nuevaFecha = new Date();
// Formateo de la fecha actual con opciones
const opciones = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timezone: 'UTC',
};
let salida_fecha=nuevaFecha.toLocaleDateString('es-ES', opciones);
console.log(salida_fecha);
console.log(nuevaFecha.toLocaleTimeString('es-ES'));

//Función JS alternativa al código de implantación del complemento (DayJS)
function startTime(){
  today=new Date();
  let salida_hora=today.toLocaleTimeString('es-ES');
  document.getElementById('fecha').innerHTML=salida_fecha;
  document.getElementById('reloj').innerHTML=salida_hora;
  setInterval(startTime,1000);
}//de función no utilizada
//startTime();
*/

function empieza_Tiempo(){
  let today=new Date();
  dayjs(today);  
  dayjs.locale("es");
  dayjs.extend(localeData);
  dayjs.weekdays();
  dayjs.months();
  let salida_fecha=dayjs().format('dddd, D [de] MMMM [de] YYYY (DD/MM/YYYY)  '); //formato fecha
  let salida_hora=dayjs().format('HH:mm:ss  '); //formato hora
  //escribimos variables en elemento HTML
  document.getElementById('fecha').innerHTML=salida_fecha; 
  document.getElementById('reloj').innerHTML=salida_hora;
  setInterval(empieza_Tiempo,1000); //añadimos intervalo de 1Seg. para contador de horas
}//de función
empieza_Tiempo();