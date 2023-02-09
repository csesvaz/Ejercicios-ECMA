// EJERCICIOS ARRAYS
// CUANDO MUESTRE LOS RESULTADOS POR CONSOLA DEBE APARECER AL PRINCIPIO EL TEXTO 'EJERCICIO NUM --> '
// EN TODOS LOS EJERCICIOS DEBE MOSTRAR EL RESULTADO POR CONSOLA.

// 1. CREE UN ARRAY VACIO Y COMPRUEBE SU LONGITUD
console.log("Ejercicio 1.");
const ARRAY= [];
console.log(ARRAY.length);
// 2. CREE UN ARRAY CON UN UNICO ELEMENTO
console.log("<<--------------------------------------------------------------------->>")
console.log("Ejercicio 2.");
const ARRAY1= [1];
console.log(ARRAY1.length);
// 3. CREE UN ARRAY UN ARRAY MIXTO Y MUESTRE SU CONTENIDO COMO UNA CADENA DE CARACTERES SEPARADAS POR COMAS 
console.log("<<--------------------------------------------------------------------->>")
console.log("Ejercicio 3.");
const ARRAY2= [5,"CASA"];
console.log(ARRAY2.length);
console.log(ARRAY2.toString());
// 4. CREE UN ARRAY CUYOS ELEMENTOS SEAN LOS ARRAYS CREADOS ANTERIORMENTE Y MUESTRE SU CONTENIDO Y LONGITUD 
console.log("<<--------------------------------------------------------------------->>")
console.log("Ejercicio 4.");
const ARRAY3= ARRAY1.concat(ARRAY2);
console.log(ARRAY3.length);
console.log(ARRAY3.toString());
// 5. DADO EL SIGUIENTE ARRAY, UTILIZANDO LA PROPIEDAD LENGTH, MUESTRE EL ULTIMO ELEMENTO
const CARS = ["Saab", "Volvo", "BMW"];
console.log("<<--------------------------------------------------------------------->>")
console.log("Ejercicio 5.");
console.log(CARS[CARS.length-1]);
// 6. EN EL ARRAY ANTERIOR, AÑADA UN ELEMENTO AL FINAL, OTRO AL PRINCIO, MUESTRE EL RESULTADO Y LA LONGITUD DEL ARRAY
console.log("<<--------------------------------------------------------------------->>")
console.log("Ejercicio 6.");
CARS.push("Mercedes");
CARS.unshift("Hyundai");
console.log(CARS.length,"  ",CARS.toString());
// 7. A PARTIR DE LOS ARRAYS DE LOS EJERCICIOS 2 Y 3, CREE UN NUEVO ARRAY
console.log("<<--------------------------------------------------------------------->>")
console.log("Ejercicio 7.");
const ARRAY4= ARRAY1.concat(ARRAY2);
console.log(ARRAY4.length);
console.log(ARRAY4.toString());
// 8. EN EL ARRAY RESULTANTE DEL EJERCICIO ANTERIOR, ELIMINE EL PRIMER Y ULTIMO ELEMENTO, MUESTRE EL RESULTADO, ADEMAS DEBE APARACER SU LONGITUD
console.log("<<--------------------------------------------------------------------->>")
console.log("Ejercicio 8.");
ARRAY4.shift();
ARRAY4.pop();
console.log(ARRAY4.length);
console.log(ARRAY4.toString());
// 9. A PARTIR DE LA SIGUIENTE CADENA DE TEXTO 'CURSO XLIV' CREE UN ARRAY QUE CONTENGA SOLAMENTE COMO ELEMENTOS LOS CARACTERES DE LAS LETRAS
console.log("<<--------------------------------------------------------------------->>")
console.log("Ejercicio 9.");
const ARRAY5= "CURSO XLIV";
ARRAY6=ARRAY5.substring(0,5).concat(ARRAY5.substring(6,ARRAY5.length));
ARRAY7=Array.from(ARRAY6);
console.log(ARRAY7.toString());
// 10. EN EL ARRAY ANTERIOR, INSERTE COMO ELEMENTOS DE DICHO ARRAY LOS CARACTERES DE LA PALABRA 'DIM' (para que estén detrás del caracter O de CURSO y antes del
// caracter X de XLIV). 
console.log("<<--------------------------------------------------------------------->>")
console.log("Ejercicio 10.");
ARRAY7.splice(5,0," ","D","I","M"," ");
let union = ARRAY7.join("");
console.log(union);

// 11. CREE UN ARRAY A PARTIR DE LA SIGUIENTE CADENA DE TEXTO 'Hoyo de Manzanares, 15 de abril de 2023', DE TAL MANERA QUE LOS ELEMENTOS SEAN
// LA CIUDAD, EL DIA, EL MES Y EL AÑO
console.log("<<--------------------------------------------------------------------->>")
console.log("Ejercicio 11.");
let ciudad = "Hoyo de Manzanares";
let mes= "abril";
let anno= 2023;
let dia=15;
ARRAY8=(`${ciudad}, ${dia} de ${mes} de ${anno}`);
console.log(ARRAY8);
// LA CIUDAD, EL DIA, EL MES Y EL AÑO
// 12. UTILIZANDO UN METODO DE BUSQUEDA, EN EL ARRAY ANTERIOR, MUESTRE LA POSICION QUE OCUPA EL ELEMENTO 15
console.log("<<--------------------------------------------------------------------->>")
console.log("Ejercicio 12.");
console.log(ARRAY8.search(15));
// 13. ORDENE DE FORMA DESCENDENTE EL SIGUIENTE ARRAY
const array = ["Alberto", "Ana", "Mauricio", "Bernardo", "Zoe"];
console.log("<<--------------------------------------------------------------------->>")
console.log("Ejercicio 13.");
console.log(array.sort().reverse().toString());
// 14. ORDENE EL SIGUIENTE ARRAY
const array1 = [1, 30, 4, 21, 100000];
console.log("<<--------------------------------------------------------------------->>")
console.log("Ejercicio 14.");
console.log(array1.sort(function (a,b) {return a-b}).toString());
// UTILIZANDO FUNCIONES DE ARRAYS:
// 15. RECORRA EL ARRAY Y SUMELE 1 A CADA ELEMENTO
console.log("<<--------------------------------------------------------------------->>")
console.log("Ejercicio 15.");
const array2 = [5, 10, 15, 20, 25];
for (let i=0;i<array2.length; i++){
    array2[i]+=1;
};
console.log(array2.toString());

// 16. COMPRUEBE SI TODOS LOS ELEMENTOS DEL ARRAY ANTERIOR SON IMPARES
console.log("<<--------------------------------------------------------------------->>")
console.log("Ejercicio 16.");
const array3 = [5, 10, 15, 20, 25];
let marca= true;
for (let i=0;i<array3.length; i++){
    if(array3[i]%2==0){
        marca=false;
    }
}
if(marca==true){
    console.log("Todos los elementos son impares");
}else{
    console.log("Todos los elementos NO son impares");
}
if(array3.every(element=>element%2==0)){
    console.log("Todos los elementos NO son impares");
}else{
    console.log("Todos los elementos son impares");
}
// 17. COMPRUEBE SI AL MENOS EXISTE UN ELEMENTO DEL ARRAY DEL EJERCICIO 16 QUE SEA PAR
console.log("<<--------------------------------------------------------------------->>");
console.log("Ejercicio 17.");
let marca2= false;
for (let i=0;i<array3.length; i++){
    if(array3[i]%2==0){
        marca2=true;
    }
}
if(marca2==true){
    console.log("Hay al menos un elemento par");
}
if(array3.some(element=>element%2==0)){
    console.log("Hay al menos un elemento par");
}else{
    console.log(" No hay ningún elemento par");
}
// 18. A PARTIR DEL ARRAY DEL EJERCICIO 15, CREE UN NUEVO ARRAY QUE CONTENGA SOLO LOS NUMEROS IMPARES
console.log("<<--------------------------------------------------------------------->>");
console.log("Ejercicio 18.");
array4=array3.filter(element=>element%2!=0);
console.log(array4.toString());
// 19. A PARTIR DEL ARRAY DEL EJERCICIO 15, CREE UN NUEVO ARRAY QUE CONTENGA COMO ELEMENTOS, EL RESULTADO DE REALIZAR LA RAIZ CUADRADA A CADA ELEMENTO
console.log("<<--------------------------------------------------------------------->>");
console.log("Ejercicio 19.");
array5=array3.map(element=>Math.sqrt(element));
console.log(array5.toString());
// 20. TOMANDO COMO REFERENCIA EL ARRAY DEL EJERCICIO 15, MUESTRE POR PANTALLA LA SUMA DE TODOS SUS ELEMENTOS
console.log("<<--------------------------------------------------------------------->>");
console.log("Ejercicio 20.");
console.log(array3.reduce((p,e) =>p+e));
// 21. DADO EL SIGUIENTE ARRAY, CREE UNA COPIA SUPERFICIAL Y COMPRUEBE QUE LO HA REALIZADO CORRECTAMENTE
const EQUIPOS = ['R. MADRID', 'R. BETIS', 'ATH BILBAO', 'ATH MADRID'];
console.log("<<--------------------------------------------------------------------->>");
console.log("Ejercicio 21.");
const EQUIPOS2 = EQUIPOS;
EQUIPOS2[2]="REAL ZARAGOZA";
console.log(EQUIPOS[2]);
//Así se prueba que es una copia superficial dado que amnos EQUIPOS y EQUIPOS2 apuntan al mismo valor
