// EJERCICIOS HTML DOM

// NO PUEDE MODIFICAR DIRECTAMENTE EL ARCHIVO INDEX.HTML
// TODAS LAS MODIFICACIONES TIENE QUE HACERLAS MEDIANTE JAVASCRIPT

/* 1.- Implementar una función autoejecutable que vincule el archivo ejerciciosDOM.js a la página web */
let script=document.querySelector("script");
script.setAttribute("src","ejerciciosDOM.js");
console.log("Prueba");




/* 2. Poner el fondo fucsia en:
<p id = "intro"> Quiero poner el fondo fucsia</p> */
let pFucsia= document.getElementById("intro");
pFucsia.style="background:purple";


/* 3.- Cambiar el título de la página a "JS-DIM-Num Aleatorio (entre 1 y 43)".
De tal manera, que cada vez que se abra la página se genere un título diferente, variando únicamente el número aleatorio.
Para ello, implemente una expresión de función anónima e invóquela posteriormente. */
let titulo= document.querySelector("title");
let valorAleatorio=function(){
  let numAleatorio=Math.round(Math.random()*42+1);
  return numAleatorio;
  }
  console.log(valorAleatorio());
  let tituloDim="JS-DIM-Num Aleatorio "+valorAleatorio();
  titulo.innerText="";
  titulo.insertAdjacentText("afterbegin",tituloDim);

/* <header>
      <h2 class="fecha">fecha</h2>
      <nav></nav>
    </header> 
4.- Insertar al principio del header un encabezado h1 "EJERCICIO DOM - DIM XLIV -" y debajo, debe modificar 
el contenido del encabezado h2 para que ponga la fecha local, del día en el que nos encontremos, ejemplo
('Hoyo de Manzanares, 30 de marzo de 2022'). La barra de navegación debe estar compuesta 
por dos enlaces, uno al Home y otro a la página https://web.institutomilitar.com. Los dos encabezados 
tienen que estar centrados horizontalmente y los enlaces tienen que estar alineados a la izquierda. */
let enc = document.querySelector(".fecha");
enc.insertAdjacentHTML("beforebegin",'<h1>EJERCICIO DOM - DIM XLIV -</h1>');
let fechaActual= new Date();
let dia = fechaActual.getDay();
const meses = ["Enero","Febrero","Marzo","Abril","May0","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
mes = meses[fechaActual.getMonth()];
let anno = fechaActual.getFullYear();
let textoFecha = `Hoyo de manzanares ${dia} de ${mes} de ${anno}`;
enc.textContent=textoFecha;
console.log (textoFecha);
let nav =document.querySelector("nav");
nav.innerHTML="<div class='parrafo'><span id='enlace1'><a href='#'>Enlace1</a></span><span id='enlace2'><a href='https://web.institutomilitar.com'>Enlace2</a></span></div>";
let enlace1= document.getElementById("enlace1");
let enlace2= document.getElementById("enlace2");
enlace1.style="text-align:left";
enlace1.style="margin-left:20vw";
enlace2.style="text-align:left";
enlace2.style="margin-left:40vw";
/* 5.- ELIMINAR el párrafo que tiene en el texto la palabra TRES */
let pTres= document.querySelector(".lorem:nth-child(4)");
pTres.remove();




/* 6.- Cambiar el color del texto a azul al párrafo que tiene la palabra DOS */
let pDos= document.querySelector(".lorem:nth-child(3)");
pDos.style="color:blue";




/* <section class="listas">
        <h3>LISTAS</h3>
      </section>
7.- Despúes del elemento <h3>LISTAS</h3>, inserte DOS listas ordenadas que comiencen en 100 a partir del array MESES.
 Para insertar la primera lista, utilice template literals.
 Y para insertar la segunda lista, utilice una expresión de función (arrow function), los meses deben aparecer en orden descendente, en
 este caso utilice algún método insertAdjacent*()  */
const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let lista= document.querySelector(".listas>h3");
let lista1=document.createElement("ol");
for (let i=0; i<MESES.length; i++){
let m=document.createElement("li");
lista1.insertAdjacentElement("beforeend",m);
m.insertAdjacentText("beforeend",MESES[i]);
}

lista.insertAdjacentElement("beforeend",lista1);
lista1.setAttribute("start","100");

let MESES2=MESES.reverse();
let lista2=document.createElement("ol");
for (let i=0; i<MESES2.length; i++){
let n=document.createElement("li");
lista2.insertAdjacentElement("beforeend",n);
n.insertAdjacentText("beforeend",MESES2[i]);
}

lista.insertAdjacentElement("beforeend",lista2);


/* 8.- Modifique el footer para que tenga un color de fondo (el que quiera) y permanezca fijo en la pantalla, es decir, no 
se mueva al hacer scroll en la pantalla.

  */
let footer= document.querySelector("footer");
footer.style="background-color: green";
footer.style="position: fixed";

/* 9.-  <p>
            Sexo: <input type="radio" name="sexo" value="H" /> Hombre
            <input type="radio" name="sexo" value="M" /> Mujer
          </p>
Modifique el elemento para que la opción por defecto sea 'Hombre'
          */
let formSex= document.querySelector("form>p>input:first-child");
formSex.setAttribute("Checked",false);

/* 10.- <input  type="checkbox" id="fcheckbox" name="futbol" />
Modifique el elmento para que cuando el usuario pongo el puntero del ratón encima de la casilla de verificación
aparezca el mensaje emergente '¿Estás segur@?' */
el=document.getElementById("fcheckbox");
el.addEventListener("mouseenter", abrirMensajeEmergente);
function abrirMensajeEmergente() {
  confirmar=confirm("¿Estás segur@?");
  if(confirmar){
    alert("Ha aceptado la selección.");
      el.setAttribute("checked",false);
  }else{
    alert("Ha cancelado la selección.");
    el.removeAttribute("checked");
  }

}