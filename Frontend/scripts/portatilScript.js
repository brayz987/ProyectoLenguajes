import {
    addRouteHome
} from "./scriptHome.js";
import {
    validarForm,
    dinamicValidation,
    inValidClass

} from "./validations.js";

import {
    optionHeader,
    showAccessCode,
    enablePopovers,
    convertDataJson,
    disabledForm
} from "./generalFuntion.js"


addRouteHome("buttonHome"); // Adiciona la ruta al boton de home
enablePopovers(); // Activa los popovers

// Elementos

const buttonModalRegister = document.getElementById("buttonTipoRegistro");
const formSearchIdButton = document.getElementById("formSearchIdButton");
const formSearchId = document.getElementById("formSearchId");
const formPortatil = document.getElementById("formPortatil");
const formPortatilButton = document.getElementById("formPortatilButton");
const registerExit = document.getElementById("registerExit");
const labelCode = document.getElementById("labelCode");
const buttonModalAlert = document.getElementById("buttonModalAlert");
const alertMessage = document.getElementById("alertMessage");
const ApiURL = localStorage.getItem('ApiURL');

// Elementos del Formulario

const name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const idTypePerson = document.getElementById("idTypePerson");
const idTypeIdentification = document.getElementById("idTypeIdentification");
const code = document.getElementById("code");
const brand = document.getElementById("brand");
const model = document.getElementById("model");
const serial = document.getElementById("serial");





const idValid = {
    registerCode: false
}; // Estado validacion ID
const formValid = { // Estado validacion Formulario
    name: false,
    lastName: false,
    idTypePerson: false,
    code: false,
    brand: false,
    model: false,
    serial: false
};



/// EVENTOS ///


// Codigo para mostrar el primer modal


document.addEventListener('DOMContentLoaded', () => {
    buttonModalRegister.click();
})


//Validacion del Campo Id
formSearchId.addEventListener("change", (e) => {
    dinamicValidation(e.target, idValid);
});



idTypePerson.addEventListener('change', (e) => {
    {
        if (e.target.value == "2") {
            labelCode.textContent = "Codigo Estudiantil:";
            code.removeAttribute('disabled');
            code.id = 'code';
            code.name = 'studentCode';
            code.setAttribute('placeholder', 'Codigo Estudiantil');
            formValid.code = false;
            delete formValid.identification;
            idTypeIdentification.setAttribute('disabled', "disabled");

        } else if (e.target.value == "1") {
            labelCode.textContent = "Numero de Identificacion:";
            code.removeAttribute('disabled');
            code.id = 'identification';
            code.name = 'identification';
            code.setAttribute('placeholder', 'Identificacion');
            formValid.identification = false;
            delete formValid.code;
            idTypeIdentification.removeAttribute('disabled');

        } else {
            code.setAttribute('disabled', "disabled");
            idTypeIdentification.setAttribute('disabled', "disabled");

        }
    }
})



// Envio de Id para consulta en Backend

formSearchIdButton.addEventListener('click', (e) => {
    e.preventDefault();
    let data = new FormData(formSearchId);
    if (validarForm(idValid) === -1) {
            getIngressData(data);
    } else {
        document.getElementById("buttonInvalidData").click();
    }
})








// Solicitud de datos a nivel de Backend de un registro

const getIngressData = async (data) => {
    data = convertDataJson(data);
    await axios.post(ApiURL+'/ingress/getComputerRegister',data, optionHeader)
        .then(res => {
            if(res.data.error){
                document.getElementById("buttonInvalidData").click();
            }else{
                document.getElementById('SearchButtonDismiss').click();
                fillData(res.data);
                addTickedInfo(res.data);
                addButtonRegisterExit(res.data);
            }
        })
        .catch(error => {
            console.log(error);
        })
};


// Se llenan los campos de los datos 

const fillData = (data) => {
    console.log(data);
    
    name.value = data.ingressData.person.name;
    lastName.value = data.ingressData.person.lastname;
    idTypePerson.value = data.ingressData.person.idTypePerson;
    if(data.ingressData.person.idTypePerson === 1){
        idTypeIdentification.value = data.ingressData.person.idTypeIdentification;
        code.value = data.ingressData.person.identification;
        idTypePerson.dispatchEvent(new Event('change'));
    }else{
        code.value = data.studentCode;
    }
    brand.value = data.ingressData.computer.brand;
    model.value = data.ingressData.computer.model;
    serial.value = data.ingressData.computer.serial;
    disabledForm();
}



const addTickedInfo = (data) => {
    const template = document.createElement('template');
    const ingressData = data.ingressData;
    const ingress = ingressData.dateHourIngress.split(' ');
    const ingressday = ingress[0];
    const ingresshour = ingress[1];

    let exit = ingressData.dateHourExit;
    let exitday = "";
    let exithour = "";
    if( exit !== null){
        exit = exit.split(' ');
        exitday = exit[0];
        exithour = exit[1];
    }

    template.innerHTML = `
        <fieldset class="mb-3 row ">
            <legend class="col-form-legend col-xs-4">Informacion del Ticket</legend>
            <div class="col-xs-8">
                <div class="mb-3 row">
                    <div class="col-md-12 col-sm-12">
                        <label for="inputName" class="col-xs-4 col-form-label">ID:</label>
                        <div class="col-xs-8">
                            <input type="text" class="form-control" name="idTicket" id="idTicket" placeholder="idTicket" disabled value="${data.ingressData.id}" >
                        </div>
                    </div>
                </div>


                <div class="mb-3 row">
                    <div class="col-md-6 col-sm-12">
                        <label for="inputName" class="col-xs-4 col-form-label" id="labelCode">Fecha de Ingreso:</label>
                        <div class="col-xs-8">
                            <input type="date" class="form-control"  disabled value="${ingressday}" >
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <label for="inputName" class="col-xs-4 col-form-label" id="labelCode">Hora de Ingreso:</label>
                        <div class="col-xs-8">
                            <input type="time" class="form-control"  disabled value="${ingresshour}" >
                        </div>
                    </div>
                </div>

                <div class="mb-3 row">
                    <div class="col-md-6 col-sm-12">
                        <label for="inputName" class="col-xs-4 col-form-label" id="labelCode">Fecha de Salida:</label>
                        <div class="col-xs-8">
                            <input type="date" class="form-control"  disabled value="${exitday}" >
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <label for="inputName" class="col-xs-4 col-form-label" id="labelCode">Hora de Salida:</label>
                        <div class="col-xs-8">
                            <input type="time" class="form-control"  disabled value="${exithour}" >
                        </div>
                    </div>
                </div>
            </div>
        </fieldset>
    `;
    formPortatil.prepend(template.content);
}


// Funcion remplazar los botones de enviar
const addButtonRegisterExit = (data) => {
    if(data.ingressData.dateHourExit !== null){
        formPortatilButton.setAttribute('hidden','hidden');
    }

    if(data.ingressData.dateHourExit === null){
        registerExit.removeAttribute('hidden');
        formPortatilButton.setAttribute('hidden','hidden');

    }
}

registerExit.addEventListener('click', (e)=>{
    e.preventDefault();
    const id = document.getElementById('idTicket').value;
    const jsonData = {
        id: id
    };
    
    axios.post(ApiURL+'/ingress/registerExit',jsonData, optionHeader)
        .then(res => {
            alertMessage.textContent = res.data.message;
            buttonModalAlert.click();
            addRouteHome("okModalButton");
        })

})


//Validacion del Campos Formulario de Registro
formPortatil.addEventListener("change", (e) => {
    dinamicValidation(e.target, formValid);
});






// Envio de datos para registro en Backend

formPortatilButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (validarForm(formValid) === -1) {
        let data = new FormData(formPortatil);
        if (data.get('idTypePerson') == 2) {
            sendRegisterPortatilStudent(data);
        }
        if (data.get('idTypePerson') == 1) {
            sendRegisterPortatilGuest(data);
        }
        // axios.post(localStorage.getItem('ApiURL')+'')
    } else {
        alert("Campos inválidos");
    }
})


// Envio de datos para registro en Backend en caso de que sea un estudiante

const sendRegisterPortatilStudent = async (data) => {
    await axios.post(ApiURL+'/computers/registerComputerStudent', {
        "model": data.get('model'),
        "serial": data.get('serial'),
        "studentCode": data.get('studentCode'),
        "brand": data.get('brand')
    },optionHeader)
        .then(res => {
            if(res.data.error){
                alertMessage.textContent = res.data.message;
                inValidClass(code.classList);
                buttonModalAlert.click();
            }else{
                showAccessCode(res);
            }
        })
        .catch(error => {
            console.log(error);
        })
};



// Envio de datos para registro en Backend en caso de que sea un invitado

const sendRegisterPortatilGuest = async (data) => {
    data = convertDataJson(data)
    await axios.post(ApiURL+'/computers/registerComputerGuest', data, optionHeader)
        .then(res => {
            if(res.data.error){
                alertMessage.textContent = res.data.message;
                inValidClass(code.classList);
                buttonModalAlert.click();
            }else{
                showAccessCode(res);
            }
        })
        .catch(error => {
            console.log(error);
        })
}

