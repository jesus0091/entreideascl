// Funciones
const armarCard = (pProducto) => {
    const card = document.createElement('DIV');
    card.classList.add('card');
    card.innerHTML = `
    <div class="card-img">
        <img src="${pProducto.img}" alt="imagen">
    </div>
    <div class="card-text">
        <h4>${pProducto.producto}</h4>
        <p>${pProducto.descripcion}</p>
    </div>
    <input type="button" value="Cotizar" class="product-button">`;
    return card;
}

const renderizarCards = (pProductos, pIdContainer) => {
    const fragmento = document.createDocumentFragment();
    const contenedor = document.getElementById(pIdContainer);

    for(let producto of pProductos){
        fragmento.appendChild(armarCard(producto));
    }
    contenedor.appendChild(fragmento);
    const botones = document.getElementsByClassName('product-button');
    for(const boton of botones){
        boton.addEventListener('click', (e) => {
            const textoProducto = e.target.parentElement.children[1].firstElementChild.innerText;
            window.location.hash = '/contact';
            window.scrollTo(0, 0);
            const temp = setTimeout(() => {
                const form = document.getElementById('contact-form');
                console.log(form);
                form.children[3].lastElementChild.value = textoProducto;
            }, 150)
        });
    }
}

const renderizarTituloBanner = (pIdContainer, pTitulo) => {
    const contenedor = document.getElementById(pIdContainer).firstElementChild.firstElementChild;
    const titulo = document.createElement('H2');
    titulo.innerText = pTitulo;
    contenedor.appendChild(titulo);
}

