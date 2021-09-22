// Funciones
const armarCard = (pProducto) => {
    const card = document.createElement('DIV');
    card.classList.add('card');
    card.innerHTML = `
    <div class="card-img">
        <img src="${pProducto.img}" alt="">
    </div>
    <div class="card-text">
        <h4>${pProducto.producto}</h4>
        <p>${pProducto.descripcion}</p>
    </div>
    <input type="button" value="Cotizar">`;
    return card;
}

const renderizarCards = (pProductos, pIdContainer) => {
    const fragmento = document.createDocumentFragment();
    const contenedor = document.getElementById(pIdContainer);

    for(let producto of pProductos){
        fragmento.appendChild(armarCard(producto));
    }
    contenedor.appendChild(fragmento);
}

const renderizarTituloBanner = (pIdContainer, pTitulo) => {
    const contenedor = document.getElementById(pIdContainer).firstElementChild;
    const titulo = document.createElement('H2');
    titulo.innerText = pTitulo;
    contenedor.appendChild(titulo);
}

