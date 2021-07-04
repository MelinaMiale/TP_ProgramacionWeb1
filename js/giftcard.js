function mostrarNombre(){
    var nombre=document.getElementById("nombre-destinatario").value;
    document.getElementById("nombre").innerHTML=nombre;
}

function cambiarColor(){
    var opciones = document.getElementsByName("colors");
    var seleccionado = false;
    var texto = document.getElementById("nombre-p");
    var monto = document.getElementById("p-monto");

    for (i in opciones){
        if(opciones[i].checked){
            seleccionado=true;
            if(opciones[i].value == "blue"){
                texto.style.color="blue";
                monto.style.color="blue";
            }
            if(opciones[i].value == "red"){
                texto.style.color="red";
                monto.style.color="red";
            }
            if(opciones[i].value == "green"){
                texto.style.color="green";
                monto.style.color="green";
            }
            if(opciones[i].value == "white"){
                texto.style.color="white";
                monto.style.color="white";
            }
            if(opciones[i].value == "black"){
               texto.style.color="black";
               monto.style.color="black";
            }
        }
    }
}

function cambiarTamanioFuente(){
    var opciones = document.getElementsByName("font-size");
    var seleccionado = false;

    for(i in opciones){
        if(opciones[i].checked){
            seleccionado=true;
            if(opciones[i].value=="20px"){
                document.getElementById("nombre-p").style.fontSize="1em";
            }
            if(opciones[i].value=="28px"){
                document.getElementById("nombre-p").style.fontSize="1.2em";
            }
            if(opciones[i].value=="32px"){
                document.getElementById("nombre-p").style.fontSize="1.4em";
            }
            if(opciones[i].value=="48px"){
                document.getElementById("nombre-p").style.fontSize="1.6em";
            }
            if(opciones[i].value=="60px"){
                document.getElementById("nombre-p").style.fontSize="1.8em";
            }

        }
    }
}


function mostrarMonto(){
    var monto=document.getElementById("monto-input").value;
    document.getElementById("monto-gc").innerHTML=monto;
    
    document.getElementById("p-monto").style.display="block";
}

function cambiarFondo(){
    var fondo = document.getElementById("fondo");
    var opciones = document.getElementsByName("fondo");

    for(i in opciones){
        if(opciones[i].checked){
            seleccionado=true;
            if(opciones[i].value=="black"){
                fondo.style.backgroundImage="url(img/black-p.jpg)";
                fondo.style.backgroundSize="cover";
            }
            if(opciones[i].value=="white"){
                fondo.style.backgroundImage="url(img/light-color.jpg)";
                fondo.style.backgroundSize="cover";
            }
            if(opciones[i].value=="smoke"){
                fondo.style.backgroundImage="url(img/smoke.jpg)";
                fondo.style.backgroundSize="cover";
                
            }
            if(opciones[i].value=="playa"){
                fondo.style.backgroundImage="url(img/playa.jpeg)";
                fondo.style.backgroundSize="cover";
            }
        }
    }

}

function cambiarUbicacionLogo(){
    var logo = document.getElementById("giftcard-logo");
    var opciones = document.getElementsByName("ubicacion");


    logo.style.display="block"

    for(i in opciones){
        if(opciones[i].checked){
            seleccionado=true;
            if(opciones[i].value=="arriba-izquierda"){
                logo.style.left="0%";
                logo.style.top="0%";          
            }
            if(opciones[i].value=="arriba-derecha"){    
                logo.style.left="80%";
                logo.style.top="0%";     
            }
            if(opciones[i].value=="abajo-izquierda"){
                logo.style.left="0%";
                logo.style.top="70%"; 
            }
            if(opciones[i].value=="abajo-derecha"){
                logo.style.left="80%";
                logo.style.top="70%"; 
            }
        }
    }

}

function mostrarAlerta(){
    alert("Giftcard creada con éxito")
}