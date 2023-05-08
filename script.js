const botonCompra = document.getElementById("confirmar-carrito")
botonCompra.addEventListener("click", function () {
    vaciarCarrito()
    Swal.fire({
        title: 'Éxito',
        text: 'La operación se ha completado con éxito.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
})
var swiper = new Swiper(".mySwiper-1",{
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: { //funcion que permite cambiar de productos en la pantalla
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }

});

var swiper = new Swiper(".mySwiper-2",{
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        0: {
            sliderPerView: 1
        },
        520: {
            sliderPerView: 2
        },
        950: {
            sliderPerView: 3
        }
    }
    
});



//carrito

const carrito = document.getElementById("carrito");
const elementos1 = document.getElementById("lista-1");
const elementos2 = document.getElementById("lista-2");
const elementos3 = document.getElementById("lista-3");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

cargarEventListeners();

function cargarEventListeners(){ //Aqui comienza todo, donde cada click cumple una funcion
    elementos1.addEventListener("click", comprarElemento);
    elementos2.addEventListener("click", comprarElemento);
    elementos3.addEventListener("click", comprarElemento);
    carrito.addEventListener("click", eliminarElemento);

    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        const elemento =  e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
    const infoElemento = {
        imagen: elemento.querySelector("img").src,
        titulo: elemento.querySelector("h3").textContent,
        precio: elemento.querySelector(".prices").textContent,
        id: elemento.querySelector("a").getAttribute("data-id")
    }

    insertarCarrito(infoElemento)

}

function insertarCarrito(elemento){

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100 >
        </td>

        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a herf="#" class="borrar" data-id="${elemento.id}">X</a>
        </td>
    `;

    lista.appendChild(row);

}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
        
    if(e.target.classList.contains("borrar")){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector("a").getAttribute("date-id"); 
    }
}

function vaciarCarrito() {
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;

}