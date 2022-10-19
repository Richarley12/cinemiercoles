//Declarando arreglos en JS: es una variable especial que me permite almacenar multiples datos, en una sola variable.
//el nomre de los arreglos va en plural. cada arreglo tendrá un indice o indicador y para saber qué se fuarga se usará un valor.
/*let numeros=[5,8,12,10]
console.log(numeros[0])
let nombres=Array("juan","sara",5,"laura")
console.log(nombres[2])
//un objeto es una variable especial que me permite almacenar múltiples datos en una sola variable
//un objeto no tiene elementos, tiene ATRIBUTOS y valores
let persona={
    nombre:"juan",
    profesion:"ingeniero",
    edad:"33",
    hinchada:true,
    materiasDictadas:["webDos","avanzadas"],
    equiposFavoritos:["nacional","liverpool"],
    comida:{
        nombre:"bandejaPaisa",
        precio:25000
    }
}
console.log(persona.comida.precio)*/

import {peliculas} from '../helper/basededatos.js'

import{estrenos} from '../helper/basededatos2.js'

import{pintarPeliculas} from '../helper/pintaPeliculas.js'

//recorriendo un arreglo en JS
let fila=document.getElementById("fila")

//llamo a la funcion pintaPeliculas
pintarPeliculas(peliculas)

//detectando selección de una película
let peliculaSeleccionada={
}
fila.addEventListener("click",function(e){

 peliculaSeleccionada.poster=(e.target.parentElement.querySelector('img').src)
 peliculaSeleccionada.nombre=(e.target.parentElement.querySelector('h3').textContent)           //nombre
 peliculaSeleccionada.genero=(e.target.parentElement.querySelector('h4').textContent)           //genero
 peliculaSeleccionada.idioma=(e.target.parentElement.querySelector('h5').textContent)           //idioma
 peliculaSeleccionada.duración=(e.target.parentElement.querySelector('h6').textContent)         //duracion
 peliculaSeleccionada.clasificacion=(e.target.parentElement.querySelector('.ffff').textContent)    //clasificacion
 peliculaSeleccionada.director=(e.target.parentElement.querySelector('.f').textContent)         //director
 peliculaSeleccionada.actores=(e.target.parentElement.querySelector('.w').textContent)          //reparto
 peliculaSeleccionada.sinopsis=(e.target.parentElement.querySelector('p').textContent)          //sinopsis
 
console.log (peliculaSeleccionada)

//Llamando a la memoria del navegador

localStorage.setItem("peliculaSeleccionada",JSON.stringify(peliculaSeleccionada))

//redirecciona a otra vista
window.location.href="./src/views/ampliarInfoPelicula.html"

})

//let fila2=document.getElementById("fila2")
/* estrenos.forEach(function(estrenos){
    console.log(estrenos.nombre)
console.log(estrenos.genero)
console.log(estrenos.duración)
console.log(estrenos.sinopsis)
console.log(estrenos.poster)
console.log(estrenos.clasificacion)
console.log(estrenos.idioma)
console.log(estrenos.director)
console.log(estrenos.actores)

let columna=document.createElement("div")
    columna.classList.add("col")
let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100")

let poster=document.createElement("img")
    poster.classList.add("card-img-top")
    poster.src=estrenos.poster

let nombre=document.createElement("h5")
    nombre.classList.add("card-title","text-center")
    nombre.textContent=estrenos.nombre

let genero=document.createElement("h6")
    genero.classList.add("card-text")
    genero.textContent="Genero: "+ estrenos.genero 

let idioma=document.createElement("h7")
    idioma.classList.add("fw-bold")
    idioma.textContent="Idioma: "+ estrenos.idioma

let sinopsis=document.createElement("p")
    sinopsis.classList.add("fw-blod")
    sinopsis.textContent= "Sinopsis: "+ estrenos.sinopsis

    let duración=document.createElement("h6")
    duración.classList.add("fw-blod")
    duración.textContent= "Duración: "+ estrenos.duración+ " m"

    let clasificacion=document.createElement("h6")
    clasificacion.classList.add("fw-blod")
    clasificacion.textContent="Clasificación: "+ estrenos.clasificacion

//10.creamos director
let director=document.createElement("h6")
    director.classList.add()
    director.textContent="Director: " +estrenos.director

//11. creamos actores

let actores=document.createElement("h7")
    actores.classList.add("fw-blod")
    actores.textContent="Reparto: "+ estrenos.actores

//12. salto de linea

let salto=document.createElement("br")
    salto.classList.add()
    salto.textContent=""
 
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(genero)
    tarjeta.appendChild(idioma)
    tarjeta.appendChild(duración)
    tarjeta.appendChild(clasificacion)
    tarjeta.appendChild(director)
    tarjeta.appendChild(actores)
    tarjeta.appendChild(salto)
    tarjeta.appendChild(sinopsis)
    columna.appendChild(tarjeta)
    fila2.appendChild(columna)

})*/
