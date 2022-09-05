'use strcit';


// Esta funciona ayuda a convertir todos los datos de un FORM en Json

const convertDataJson = (data) => {
    const formDatajson = {};
    data.forEach((value, key) => (formDatajson[key] = value));
    return formDatajson;
}


// Funcion para copiar un texto en especifico
const copyText = (text) => {
    navigator.clipboard.writeText(text.textContent);
}


// Funcion para mostar el codigo de acceso


const showAccessCode = (res) => {
    document.getElementById("alertMessage").textContent = "Su codigo de registro es: ";
    document.getElementById("accessCode").textContent = res.data.ingress.id;
    document.getElementById("copyButton").classList.remove('d-none');
    document.getElementById("copyButton").addEventListener('click', () => {
        copyText(document.getElementById("accessCode"));
    })
    document.getElementById("okModalButton").addEventListener('click', () => {
        window.location.href = "/";
    })
    document.getElementById("buttonModalAlert").click();

}

// Funcion para inicializar los popovers

const enablePopovers = () => {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

}


// Funcion para deshabilitar todos los campos de un formulario

const disabledForm = () => {
    const inputs = document.getElementsByTagName('input');
    for( let i = 0; i < inputs.length; i++){
        inputs[i].setAttribute('disabled','disabled') ;
    };

    const selects = document.getElementsByTagName('select');
    for( let i = 0; i < selects.length; i++){
        selects[i].setAttribute('disabled','disabled') ;
    };

}



export {
    convertDataJson,
    copyText,
    showAccessCode,
    enablePopovers,
    disabledForm
}