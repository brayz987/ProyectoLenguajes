import {
    addRouteHome
} from "./scriptHome.js";
import {
    validarForm,
    dinamicValidation

} from "./validations.js";

import {
    showAccessCode,
    enablePopovers,
    convertDataJson
} from "./generalFuntion.js";

import {
    _g0,
    _g1
} from './storage.js';

_g0();
addRouteHome("buttonHome"); // Adiciona la ruta al boton de home
enablePopovers(); // Activa los popovers

document.getElementById('buttonModalAction').click(); // Mostrar modal al inicio




// Elementos


const formInvite = document.getElementById("formInvite");
const formIviteButton = document.getElementById("formIviteButton");
const typeIdentification = document.getElementById("typeIdentification");
const identification = document.getElementById("identification");
const ApiURL = localStorage.getItem('ApiURL');
const formSearchIdButton = document.getElementById('formSearchIdButton');
const viewMore = document.getElementById('viewMore');

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








// Evento del boton de consulta de id

formSearchIdButton.addEventListener('click',(e) => {
    e.preventDefault();
    const id = document.getElementById('registerId').value;
    getRegister(id);
})


// Funcion para obtener la informacion del registro

const getRegister = async (id) => {
    await axios.get(ApiURL+'/ingress/guest/'+id, _g1)
    .then(res => {
        if(res.data.error){
            alertMessage.textContent = res.data.message;
            buttonModalAlert.click();
            document.getElementById('okModalButton').removeAttribute('data-bs-dismiss');
            document.getElementById('okModalButton').setAttribute('data-bs-target','#modalSearchId');
            document.getElementById('okModalButton').setAttribute('data-bs-toggle','modal');

        }else{
            fillRegisterData(res.data);
        }
    })
}


// Funcion para ubicar la informacion y ocultar la informacion personal

const fillRegisterData = (data) => {
    document.getElementById('registerInfo').removeAttribute('hidden');


    const ingress = data.dateHourIngress.split(' ');
    
    if(data.dateHourExit !== null){
        const exit = data.dateHourExit.split(' ');
        document.getElementById('exitDate').value = exit[0];
        document.getElementById('exitHour').value = exit[1];
    }else{
        document.getElementById('registerExit1').removeAttribute('hidden');
    }


    document.getElementById('idTicket').value = data.id;
    document.getElementById('ingressDate').value = ingress[0];
    document.getElementById('ingressHour').value = ingress[1];
    document.getElementById('name').value = data.person.name;
    document.getElementById('lastName').value = data.person.lastname;
    document.getElementById('typeIdentification').value = data.person.idTypeIdentification;
    document.getElementById('identification').value = data.person.identification;
    document.getElementById('motive').value = data.motivo;


    // Se deshabilitan los campos de informacion personal

    document.getElementById('name').setAttribute('disabled','');
    document.getElementById('lastName').setAttribute('disabled','');
    document.getElementById('typeIdentification').setAttribute('disabled','');
    document.getElementById('identification').setAttribute('disabled','');
    document.getElementById('motive').setAttribute('disabled','');


    // Se esconde el div de la informacion personal

    document.getElementById('personalInfoDiv').setAttribute('hidden','');
    document.getElementById('formIviteButton').setAttribute('hidden','');
}


// Evento para mostrar la informacion personal en caso de que se consulte un registro

viewMore.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('personalInfoDiv').removeAttribute('hidden');
    viewMore.setAttribute('hidden','');
    document.getElementById('registerExit1').setAttribute('hidden','');
    if(document.getElementById('exitDate').value == ""){
        document.getElementById('registerExit2').removeAttribute('hidden');
    }


})



// Evento para registrar salida del registro

document.getElementById('registerExit1').addEventListener('click',(e)=> {
    e.preventDefault();
    registerExit();
})

document.getElementById('registerExit2').addEventListener('click',(e)=> {
    e.preventDefault();
    registerExit();
})



// Funcion para registrar salida del registro


const registerExit = () => {
    const id = document.getElementById('idTicket').value;
    axios.post(ApiURL + '/ingress/registerExit', {"id": id}, _g1)
        .then(res => {
            alertMessage.textContent = res.data.message;
            buttonModalAlert.click();
            addRouteHome("okModalButton");
        })
        .catch(error => {
            console.log(error);
        })
}

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
    await axios.post(ApiURL + '/ingress/registerGuest', data, _g1)
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