import { addRouteHome } from "./scriptHome.js";
import {
    validarForm,
    dinamicValidation

} from "./validations.js";


addRouteHome("buttonHome"); // Adiciona la ruta al boton de home

// Elementos


const formInvite = document.getElementById("formInvite");
const formIviteButton = document.getElementById("formIviteButton");
const typeIdentification = document.getElementById("typeIdentification");
const identification = document.getElementById("identification");



const formValid = {  // Estado validacion Formulario
    name: false,
    lastName: false,
    typeIdentification: false,
    identification: false,
    motive: false
}; 



typeIdentification.addEventListener('change', (e) => {{
    if (e.target.value == "1" || e.target.value == "2" ){
        identification.removeAttribute('disabled');
    }else{
        identification.setAttribute('disabled',"disabled");
    }
}})



//Validacion del Campos Formulario de Registro
formInvite.addEventListener("change", (e) => {
    dinamicValidation(e.target, formValid);
});






// Envio de datos para registro en Backend

formIviteButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (validarForm(formValid) === -1) {
        alert("Enviando FOrmulario");
    } else {
        alert("Campos inválidos");
    }
})


