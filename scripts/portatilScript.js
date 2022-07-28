import {
    addRouteHome
} from "./scriptHome.js";
import {
    validarForm,
    dinamicValidation

} from "./validations.js";


addRouteHome(); // Adiciona la ruta al boton de home

// Elementos

const buttonModalRegister = document.getElementById("buttonTipoRegistro");
const formSearchIdButton = document.getElementById("formSearchIdButton");
const formSearchId = document.getElementById("formSearchId");
const formPortatil = document.getElementById("formPortatil");
const formPortatilButton = document.getElementById("formPortatilButton");
const typeAccess = document.getElementById("typeAccess");
const code = document.getElementById("code");
const labelCode = document.getElementById("labelCode");
const typeIdentification = document.getElementById("typeIdentification");






const idValid = { idRegistro: false}; // Estado validacion ID
const formValid = {  // Estado validacion Formulario
    name: false,
    lastName: false,
    typeAccess: false,
    code: false,
    brand: false,
    model: false,
    serial: false
}; 


// Codigo para mostrar el primer modal


document.addEventListener('DOMContentLoaded', () => {
    buttonModalRegister.click();
})


//Validacion del Campo Id
formSearchId.addEventListener("change", (e) => {
    dinamicValidation(e.target, idValid);
});



typeAccess.addEventListener('change', (e) => {{
    if (e.target.value == "1"){
        labelCode.textContent  = "Codigo Estudiantil:";
        code.removeAttribute('disabled');
        code.id = 'code';
        typeIdentification.setAttribute('disabled',"disabled");

    } else if (e.target.value == "2"){
        labelCode.textContent  = "Numero de Identificacion:";
        code.removeAttribute('disabled');
        code.id = 'identification';
        typeIdentification.removeAttribute('disabled');

    }else{
        code.setAttribute('disabled',"disabled");
        typeIdentification.setAttribute('disabled',"disabled");

    }
}})
// Envio de Id para consulta en Backend

formSearchIdButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (validarForm(idValid) === -1) {
        alert("Enviando FOrmulario");
    } else {
        document.getElementById("buttonInvalidData").click();
    }
})




//Validacion del Campos Formulario de Registro
formPortatil.addEventListener("change", (e) => {
    dinamicValidation(e.target, formValid);
});






// Envio de datos para registro en Backend

formPortatilButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (validarForm(formValid) === -1) {
        alert("Enviando FOrmulario");
    } else {
        alert("Campos inválidos");
    }
})
