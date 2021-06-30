var cursosEnCarrito = 0;
cursosEnCarrito = localStorage.getItem('cursosEnCarrito');

function agregarAlCarrito(){
    cursosEnCarrito ++;
    document.getElementById("shopping-cart-number").innerHTML = cursosEnCarrito;
    localStorage.setItem('cursosEnCarrito', cursosEnCarrito);
    alert("¡Has agregado el curso al carrito de compras!")    
}

function vaciar(){
    cursosEnCarrito = 0;
    localStorage.setItem('cursosEnCarrito', cursosEnCarrito);
    location.reload();
}
