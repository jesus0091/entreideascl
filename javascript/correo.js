const validarForm = (pNombre, pEmail, pCel, pProducto, pMsg) => {
    
    if(pNombre.length < 3){
        alert('Ingrese un nombre valido');
        return false;
    }

    if(pEmail){
        expReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!expReg.test(pEmail)){
            alert('Ingrese un email valido');
            return false;
        }
    }

    if(pCel.length < 6 || isNaN(pCel)){
        alert('Ingrese un numero de telefono valido');
        return false;
    }
    
    if(pProducto == ''){
        alert('Ingrese un producto para su consulta');
        return false;
    }

    if(pMsg == '' || pMsg.length > 200){
        alert('Debe ingresar un mensaje de hasta 200 caracteres');
        return false;
    }
    console.log('Se ejecuto validacion');
    return true;
}

const mailer = () => {
    const $form = document.getElementById('contact-form');

    $form.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const nombre = form.get('nombre');
        const email = form.get('email');
        const cel = form.get('telefono');
        const producto = form.get('producto');
        const msg = form.get('consulta');

        if(validarForm(nombre, email, cel, producto, msg)){
            $.ajax({
                method: 'POST',
                url: 'https://formsubmit.co/ajax/Entreideascl@gmail.com',
                dataType: 'json',
                accepts: 'application/json',
                data: {
                    Cliente: nombre,
                    Correo: email,
                    Telefono: cel,
                    Producto: producto,
                    Mensage: msg
                },
                success: (data) => {
                    console.log(data);
                    const contenedoresInput = e.target.children;
                    for (const contenedor of contenedoresInput) {
                        if(contenedor.lastElementChild.type != 'submit'){
                            contenedor.lastElementChild.value = '';
                        }
                    }
                    const divExito = document.createElement('DIV');
                    divExito.innerHTML = 'Su consulta ha sido enviada con exito!';
                    divExito.classList.add('form-msg');
                    e.target.parentElement.appendChild(divExito);
                },
                error: (err) => console.log(err)
            });
        }

    });
}
