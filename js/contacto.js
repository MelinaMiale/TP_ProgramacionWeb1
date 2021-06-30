const CANTIDAD_MAXIMA_CARACTERES = 1000;
var consulta = document.getElementById("query");

window.onload=function(){
    document.getElementById("info-consulta").innerHTML = "Caracteres: 0/"+CANTIDAD_MAXIMA_CARACTERES;
}

function mostrarCantidadCaracteres(){
    let cantidadDeCaracteresUsados = consulta.value.length;
    let cantidadCaracteresDisponibles = CANTIDAD_MAXIMA_CARACTERES - cantidadDeCaracteresUsados;
    let infoCaracteres = "Caracteres " + cantidadDeCaracteresUsados + "/" + cantidadCaracteresDisponibles;
    document.getElementById("info-consulta").innerHTML = infoCaracteres;
}

function validarFormularioContacto(){
    consulta = document.getElementById("query");
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("last-name").value;
    var mail = document.getElementById("email").value;
    var regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    var telefono = document.getElementById("phone-number").value;
    var regexTelefono = /^([0-9]{4})-([0-9]{4})$/;
    let error=false; 
    let mensajesError="";

    if(nombre.length==0){
        error=true;
        mensajesError+="<p>El campo 'Nombre' es obligatorio y solo permite letras y espacios</p>";
    }

    if(apellido.length==0){
        error=true;
        mensajesError+="<p>El campo 'Apellido' es obligatorio y solo permite letras y espacios</p>";
    }

    if(!regexEmail.test(mail)){
        error = true;
        mensajesError +="<p>El mail debe corresponder al formato xxx@xxxx.xxx</p>"
    }

    if(!regexTelefono.test(telefono)){
        error = true;
        mensajesError +="<p>El telefono debe corresponder al formato 4234-5678</p>"
    }
    
    if(consulta.value.length > 1000){
        error = true;
        mensajesError +="<p>Has excedido el maximo de 1000 caracteres</p>"
    }

    if(error){
        document.getElementById("mensaje").innerHTML=mensajesError;
        alert("Hay errores en el formulario");
        return false;
    } else{
        alert("Se ha enviado tu consulta con exito!");
        return true;
    }
}