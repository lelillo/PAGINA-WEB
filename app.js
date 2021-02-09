document.write("buenas")

window.addEventListener('load', function() {
  console.log('el contenido a cargado');
  var imagenes = [];

  imagenes[0] = 'images/ACDC.jpg';
  imagenes[1] = 'images/Led.jpg';
  imagenes[2] = 'images/Super.jpg'
  var indicedeimagenes = 0;
  var Tiempo = 5000;
  function rotarImagenes() {

    document.slide.src= imagenes[indicedeimagenes];

    if (indicedeimagenes < 2) {
      indicedeimagenes++;
    } else {
      indicedeimagenes = 0;
    }
  }
  setInterval(rotarImagenes, Tiempo);





});

<!--

//Enlaces que quieres
var randomlinks=new Array()

randomlinks[0]="https://youtu.be/7BkxsdESz4g?list=RDMMIwBbmrwv2ks"
randomlinks[1]="https://youtu.be/_EVlNxzoefc?list=RDMMIwBbmrwv2ks"
randomlinks[2]="https://youtu.be/jKe-tiwIh0A?list=RDMMIwBbmrwv2ks"
randomlinks[3]="https://youtu.be/Uta5nE5nmXk?list=RDMMIwBbmrwv2ks"
randomlinks[4]="https://youtu.be/1OjTspCqvk8?list=RDMMIwBbmrwv2ks"
randomlinks[5]="https://youtu.be/hVtPyNHq_Jk?list=RDMMIwBbmrwv2ks"
randomlinks[6]="https://youtu.be/BYt_jC1xPJo?list=RDMMIwBbmrwv2ks"
randomlinks[7]="https://youtu.be/TbngYdFIxTc?list=RDMMIwBbmrwv2ks"
randomlinks[8]="https://youtu.be/dTM8JIooqtY?list=RDMMIwBbmrwv2ks"
randomlinks[9]="https://www.youtube.com/watch?v=-QRZpligDOs"
randomlinks[10]="https://youtu.be/xQ04WbgI9rg?list=RDMMIwBbmrwv2ks"
randomlinks[11]="https://youtu.be/hGRqnNEOpe0?list=RDMMIwBbmrwv2ks"
randomlinks[12]="https://youtu.be/eBG7P-K-r1Y?list=RDMMIwBbmrwv2ks"
randomlinks[13]="https://www.youtube.com/watch?v=QBBQvoRr9Bg&list=RDMMIwBbmrwv2ks&index=27"
randomlinks[14]="https://www.youtube.com/watch?v=zliY-MrI0mY&list=RDMMIwBbmrwv2ks&index=28"
randomlinks[15]="https://www.youtube.com/watch?v=bEgO5R2PEFA&list=RDMMIwBbmrwv2ks&index=30"
randomlinks[16]="https://youtu.be/QOUcIsvymOY?list=RDMMIwBbmrwv2ks"
randomlinks[17]="https://youtu.be/yILr8KdTPsU?list=RDMMIwBbmrwv2ks"
randomlinks[18]="https://youtu.be/Mf4rtJEX4X4?list=RDMMIwBbmrwv2ks"
randomlinks[19]="https://youtu.be/7fdAFmtq-o8?list=RDMMIwBbmrwv2ks"
randomlinks[20]="https://youtu.be/-IQ_Jo_nHrE?list=RDMMIwBbmrwv2ks"
randomlinks[21]="https://youtu.be/I_2D8Eo15wE?list=RDMMIwBbmrwv2ks"
randomlinks[22]="https://youtu.be/s6_-BGJJ1NE?list=RDMMIwBbmrwv2ks"

function randomlink(){
  window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
}
//-->
