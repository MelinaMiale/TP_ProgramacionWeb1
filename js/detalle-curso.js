var detalleDesplegado = false;

function mostrarDetalle(id){
    debugger;
    const idModulo = id;
    if(detalleDesplegado == false){
        let detalle = document.getElementById(idModulo);
        detalle.style.display = "block";
        detalleDesplegado = true;
    }
}

function ocultarDetalle(id){
    debugger;
    const idModulo = id;
    if(detalleDesplegado == true){
        let detalle = document.getElementById(idModulo);
        detalle.style.display = "none";
        detalleDesplegado = false;
    }
}