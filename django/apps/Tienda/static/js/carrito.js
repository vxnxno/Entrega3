let btnCarrito = document.getElementById("btnCarrito");

btnCarrito.addEventListener('click', function(){

        const productos = [
            {
            id: 1,
            nombre: "Arnes Perro Pequeño",
            precio: 13000,
            img: "https://dojiw2m9tvv09.cloudfront.net/42482/product/arnesdoble7984.jpg",
            cantidad: 1
            }, 
        
            {
            id: 2,
            nombre: "Identificación Perro",
            precio: 8990,
            img: "https://www.pethome.cl/imagenes/productos/2064_1.jpg",
            cantidad: 1
            }, 
        
            {
            id: 3,
            nombre: "Collar Gato",
            precio: 7990,
            img: "https://http2.mlstatic.com/D_NQ_NP_754970-MLC47806581850_102021-O.jpg",
            cantidad: 1
            },
        
            {
            id: 4,
            nombre: "Pedigree Cachorro",
            precio: 13000,
            img: "https://jumbo.vtexassets.com/arquivos/ids/511659/Alimento-Seco-Para-Perros-Cachorros-3-kg.jpg?v=637993705129070000",
            cantidad: 1
            },
        
            {
            id: 5,
            nombre: "Pedigree Adulto",
            precio: 13000,
            img: "https://jumbo.vtexassets.com/arquivos/ids/511672/Alimento-Perros-Adultos-Carne-Pollo-Cereal-3-kg.jpg?v=637993705400570000",
            cantidad: 1
            },
        ];

    localStorage.setItem("carrito",JSON.stringify(arrayProducto));  

    let storage = localStorage.getItem("carrito");

    let token = document.getElementsByName("csrfmiddlewaretoken")[0].value;

    console.log("111111111111111",token);

    fetch('/carrito',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':token
        },
        body:storage
    })

})
const pintarCarrito = () =>{
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
     <h1 class="modal-header-title">Carrito</h1>
    `;

    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () =>{
        modalContainer.style.display = "none";
    });


    modalHeader.append(modalButton);


    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p> $ ${product.precio}</p>
        <span class="restar"> - </span>
        <p>Cantidad: ${product.cantidad} </p>
        <span class="sumar"> + </span>
        <p>Total: ${product.cantidad * product.precio}</p>
    `;

    modalContainer.append(carritoContent);
    let eliminar = document.createElement("span");

    eliminar.innerText = "❌";
    eliminar.className = "delete-product";
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarProducto);
    });


    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a pagar : $ ${total}`;
    modalContainer.append(totalBuying);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    })
    carritoCountent();
    saveLocal();
    pintarCarrito();
};

const carritoCountent = () => {
cantidadCarrito.style.display = "block";

const carritoLength = carrito.length;

localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));

};

carritoCountent();