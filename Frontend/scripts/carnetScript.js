import {
    addRouteHome
} from "./scriptHome.js";
import {
    validarForm,
    dinamicValidation

} from "./validations.js";

import {
    optionHeader,
    enablePopovers,
    convertDataJson,
    disabledForm,
    showAccessCode,
    copyText
} from "./generalFuntion.js"

addRouteHome("buttonHome"); // Adiciona la ruta al boton de home
enablePopovers();





const buttonModalRegister = document.getElementById("buttonTipoRegistro");
const formSearchIdButton = document.getElementById("formSearchIdButton");
const formSearchId = document.getElementById("formSearchId");


const formCarnet = document.getElementById("formCarnet");
const formCarnetButton = document.getElementById("formCarnetButton");

const formSearchStudent = document.getElementById("formSearchStudent");
const formSearchStudentButton = document.getElementById("formSearchStudentButton");
const ApiURL = localStorage.getItem('ApiURL');


// Codigo para mostrar el primer modal


document.addEventListener('DOMContentLoaded', () => {
    buttonModalRegister.click();
})









const idValid = {
    registerCodeCarnet: false
}; // Estado validacion ID
const idStudentValid = {
    modalSudentCode: false
}; // Estado validacion ID




//Validacion del Campo Id
formSearchId.addEventListener("change", (e) => {
    dinamicValidation(e.target, idValid);
});


// Envio de Id para consulta en Backend

formSearchIdButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const id = document.getElementById('registerCodeCarnet').value;
    if (validarForm(idValid) === -1) {
        await axios.get(ApiURL + '/carnet/' + id, optionHeader)
            .then(res => {
                if (res.data.error) {
                    alertMessage.textContent = res.data.message;
                    buttonModalAlert.click();
                    homeButtonOk();
                } else {
                    fillCarnetRequestData(res.data);
                    document.getElementById('formCarnetButton').setAttribute('hidden', '') ;
                }
            })
            .catch(error => {
                console.log(error);
            })
    } else {
        document.getElementById("buttonInvalidDataId").click();
    }
})

// Funcion para llenar los datos del ticket

const fillCarnetRequestData = (data) => {
    document.getElementById('registerInfo').removeAttribute('hidden');
    document.getElementById('idRegister').value = data.id;
    document.getElementById('state').value = data.state;
    document.getElementById('requestDate').value = data.requestDate.split(' ')[0];
    document.getElementById('closeDate').value = (data.closeDate == null) ? "" : data.closeDate.split(' ')[0] ;
    document.getElementById('name').value = data.student.person.name;
    document.getElementById('lastName').value = data.student.person.lastname;
    document.getElementById('code').value = data.student.studentCode;
    document.getElementById('email').value = data.student.email;
    document.getElementById('cellphone').value = data.student.cellphone;
    document.getElementById('career').value = data.student.idCareer;
    document.getElementById('promotion').value = data.student.promotion;
}

//Validacion del Campo id Student Search
formSearchStudent.addEventListener("change", (e) => {
    dinamicValidation(e.target, idStudentValid);
});


// Envio de Id de Estudiante para consulta en Backend

formSearchStudentButton.addEventListener('click', (e) => {
    e.preventDefault();
    let data = new FormData(formSearchStudent);
    if (validarForm(idStudentValid) === -1) {
        getStudentData();
    } else {
        document.getElementById("buttonInvalidDataStudent").click();
    }
})


// Se obtiene la informacion del estudiante desde el backend
const getStudentData = async () => {
    const modalSudentCode = document.getElementById("modalSudentCode").value
    await axios.post(ApiURL + '/students/getStudent', {
        "studentCode" : modalSudentCode
    }, optionHeader)
        .then(res => {
            if (res.data.error) {
                document.getElementById("buttonInvalidDataStudent").click();
            } else {
                fillStudentData(res.data[0]);
            }
        })
        .catch(error => {
            console.log(error);
        })
}

// Funcion para llenar y deshabilitar los campos del estudiante

const fillStudentData = (data) => {
    document.getElementById("name").value = data.person.name;
    document.getElementById("lastName").value = data.person.lastname;
    document.getElementById("code").value = data.studentCode;
    document.getElementById("email").value = data.email;
    document.getElementById("cellphone").value = data.cellphone;
    document.getElementById("career").value = data.idCareer;
    document.getElementById("promotion").value = data.promotion;
}















// //Validacion del Campos Formulario de Registro
// formCarnet.addEventListener("change", (e) => {
//     dinamicValidation(e.target, formValid);
// });


// Envio de datos para registro en Backend

formCarnetButton.addEventListener('click', async (e) => {
    e.preventDefault();
    await axios.post(ApiURL + '/carnet/register', {
        "studentCode" : document.getElementById('code').value
    }, optionHeader)
        .then(res => {
            if (res.data.error) {
                alertMessage.textContent = res.data.message;
                buttonModalAlert.click();
                homeButtonOk();
            } else {
                showCarnetCode(res.data)
            }
        })
        .catch(error => {
            console.log(error);
        })
})


// Funcion para que el boton ok de la alerta lo envie hacia el inicio

const homeButtonOk = () => {
    document.getElementById('okModalButton').addEventListener('click', ()=> {
        window.location.href = ".."
    })
}

// Funcion para mostar el codigo de peticion de carnet


const showCarnetCode = (res) => {
    document.getElementById("alertMessage").textContent = "Su codigo de registro es: ";
    document.getElementById("accessCode").textContent = res.id;
    document.getElementById("copyButton").classList.remove('d-none');
    document.getElementById("copyButton").addEventListener('click', () => {
        copyText(document.getElementById("accessCode"));
    })
    document.getElementById("okModalButton").addEventListener('click', () => {
        window.location.href = "/";
    })
    document.getElementById("buttonModalAlert").click();

}