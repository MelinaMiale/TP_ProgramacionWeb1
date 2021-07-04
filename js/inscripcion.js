var contador=3;
var valor=10000;
$(document).ready(function(){
   
    $(".agregar").click(function(){
        var clonar=$(this).parent(".datos1").clone(true);
        $(this).parent(".datos1").after(clonar);
        contador++;
        precio=valor*contador;
        $("#precio").text("$"+precio);
    });

    $(".borrar").click(function(){
        if (contador >3){
            $(this).parent(".datos1").remove();
            contador--;
            precio=valor*contador;
            $("#precio").text("$"+precio);
        }     
    });

    
    
});

function mensaje(){
    var precio=valor*contador;
      
      alert("Enhorabuena, Has inscripto a " +contador+ " personas, por un total de " +precio+ "!");
}