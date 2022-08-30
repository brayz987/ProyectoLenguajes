import {
    addRouteHome
} from "./scriptHome.js";
import {
    validarForm,
    dinamicValidation

} from "./validations.js";

import {
    optionHeader,
    showAccessCode,
    enablePopovers,
    convertDataJson
} from "./generalFuntion.js";

addRouteHome("buttonHome"); // Adiciona la ruta al boton de home
enablePopovers(); // Activa los popovers

// Elementos


const formInvite = document.getElementById("formInvite");
const formIviteButton = document.getElementById("formIviteButton");
const typeIdentification = document.getElementById("typeIdentification");
const identification = document.getElementById("identification");
const ApiURL = localStorage.getItem('ApiURL');



const formValid = { // Estado validacion Formulario
    name: false,
    lastName: false,
    typeIdentification: false,
    identification: false,
    motive: false
};



typeIdentification.addEventListener('change', (e) => {
    {
        if (e.target.value == "1" || e.target.value == "2") {
            identification.removeAttribute('disabled');
        } else {
            identification.setAttribute('disabled', "disabled");
        }
    }
})



//Validacion del Campos Formulario de Registro
formInvite.addEventListener("change", (e) => {
    dinamicValidation(e.target, formValid);
});






// Envio de datos para registro en Backend

formIviteButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (validarForm(formValid) === -1) {
        let data = new FormData(formInvite);
        sendDataBackend(data);
    } else {
        alert("Campos inválidos");
    }
})


// Envio de datos para registro en Backend

const sendDataBackend = async (data) => {
    data = convertDataJson(data);
    await axios.post(ApiURL + '/ingress/registerGuest', data, optionHeader)
        .then(res => {
            if (res.data.error) {
                alertMessage.textContent = res.data.message;
                inValidClass(code.classList);
                buttonModalAlert.click();
            } else {
                showAccessCode(res);
            }
        })
        .catch(error => {
            console.log(error);
        })
};