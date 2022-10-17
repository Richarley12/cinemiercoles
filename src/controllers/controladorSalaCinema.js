import {
    pintarSillas
}
from "../helper/pintarSillas.js"

let asientos=[
    [{id:"a1",estado:0},{id:"b1",estado:0},{id:"c1",estado:0},{id:"d1",estado:0}],
    [{id:"a2",estado:0},{id:"b2",estado:0},{id:"c2",estado:0},{id:"d2",estado:0}],
    [{id:"a3",estado:0},{id:"b3",estado:0},{id:"c3",estado:0},{id:"d3",estado:0}],
    [{id:"a4",estado:0},{id:"b5",estado:0},{id:"c4",estado:0},{id:"d4",estado:0}]
]



var sillas=[]
let asientoFactura=document.getElementById("sillas")
//PINTAR DESDE JS MI SALA DE CINE
let cinema=document.getElementById("salacinema")
//recorrer los asientos y aplicar traversig
pintarSillas(asientos,cinema)

//evento de clic en la sala de cine
let reservar= document.getElementById("boton")

const prueba = (Array)=>{
    //console.log (Array)
}

 cinema.addEventListener("click",function (e) {
    
    if(e.target.tagName=="IMG"){
        let idAsientoSeleccionado= e.target.id
         asientos.forEach(function (hilera) {
            hilera.forEach(function (asiento) {
                if(asiento.id==idAsientoSeleccionado)
                {
                    //encontré el asiento donde el usuario se quiere sentar
                    if (asiento.estado==0) {
                        asiento.estado=1
                        e.target.src="../../assets/img/cinema-chair (2).jpeg"
                        
                    } else if(asiento.estado==1) {
                        asiento.estado=0
                        e.target.src="../../assets/img/cinema-chair.jpeg"
                        }

                        
                }
            })
        })
    }
    //asientoFactura.forEach(function () {
    
    prueba(sillas)
})

reservar.addEventListener("click", function (e) {
    console.log (e)

    asientos.forEach(function (hilera) {
        hilera.forEach(function (asiento) {
            if(asiento.estado==1) {
                asiento.estado=2
                e.fotoSilla.src="../../assets/img/cinema-red.jpeg"}
        })
    })



    })

