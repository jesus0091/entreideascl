const validarForm = () => {
    const nombre = document.getElementById('cliente').value;
    const email = document.getElementById('email').value;
    const cel = document.getElementById('telefono').value;
    const producto = document.getElementById('productos').value;
    const msg = document.getElementById('detalles').value;

    if(nombre.length < 3){
        alert('Ingrese un nombre valido');
        return false;
    }

    if(email){
        expReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!expReg.test(email)){
            alert('Ingrese un email valido');
            return false;
        }
    }

    if(cel.length < 7){
        alert('Ingrese un numero de telefono valido');
        return false;
    }
    
    if(producto == ''){
        alert('Ingrese un producto para su consulta');
        return false;
    }

    if(msg == '' || msg.length > 200){
        alert('Debe ingresar un mensaje de hasta 200 caracteres');
        return false;
    }
    console.log('Se ejecuto validacion');
    return true;
}

const mailer = () => {
    const $form = document.getElementById('contact-form');
    const $buttonMailto = document.getElementById('mail-button');

    $form.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        let msg = `Datos de cliente:
            Nombre: ${form.get('nombre')}
            Correo: ${form.get('email')}
            Telefono: ${form.get('telefono')}
            
            Producto: ${form.get('producto')}
            
            Consulta:
            ${form.get('consulta')}`;
        $buttonMailto.setAttribute('href', `mailto:uki.greco@gmail.com?subject=Consulta de cliente por producto ${form.get('producto')} - ${form.get('email')}&body=${msg}`);
        $buttonMailto.click();
    });
}
