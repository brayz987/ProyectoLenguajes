import { addRouteHome } from "./scriptHome.js";
import {
    validarForm,
    dinamicValidation

} from "./validations.js";


addRouteHome(); // Adiciona la ruta al boton de home






const buttonModalRegister = document.getElementById("buttonTipoRegistro");
const formSearchIdButton = document.getElementById("formSearchIdButton");
const formSearchId = document.getElementById("formSearchId");


const formCarnet = document.getElementById("formCarnet");
const formCarnetButton = document.getElementById("formCarnetButton");

const formSearchStudent = document.getElementById("formSearchStudent");
const formSearchStudentButton = document.getElementById("formSearchStudentButton");


// Codigo para mostrar el primer modal


document.addEventListener('DOMContentLoaded', () => {
    buttonModalRegister.click();
})









const idValid = { idRegistro: false}; // Estado validacion ID
const idStudenValid = { code: false}; // Estado validacion ID
const formValid = {  // Estado validacion Formulario
    name: false,
    lastName: false,
    code: false,
    email: false,
    cellphone: false,
    career: false,
    promotion: false
}; 



//Validacion del Campo Id
formSearchId.addEventListener("change", (e) => {
    dinamicValidation(e.target, idValid);
});


// Envio de Id para consulta en Backend

formSearchIdButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (validarForm(idValid) === -1) {
        alert("Enviando FOrmulario");
    } else {
        document.getElementById("buttonInvalidDataId").click();
    }
})



//Validacion del Campo id Student Search
formSearchStudent.addEventListener("change", (e) => {
    dinamicValidation(e.target, idStudenValid);
});


// Envio de Id de Estudiante para consulta en Backend

formSearchStudentButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (validarForm(idStudenValid) === -1) {
        alert("Enviando FOrmulario");
    } else {
        document.getElementById("buttonInvalidDataStudent").click();
    }
})





//Validacion del Campos Formulario de Registro
formCarnet.addEventListener("change", (e) => {
    dinamicValidation(e.target, formValid);
});






// Envio de datos para registro en Backend

formCarnetButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (validarForm(formValid) === -1) {
        alert("Enviando FOrmulario");
    } else {
        alert("Campos inválidos");
    }
})
