// Funciones para cambio de clases

const validClass = (idClass) => {
    idClass.add("is-valid");
    idClass.remove("is-invalid");
};


const inValidClass = (idClass) => {
    idClass.remove("is-valid");
    idClass.add("is-invalid");
};

// Funciones para validacion de campo y formulario


const validarForm = (object) => {
    const valores = Object.values(object);
    let resp = valores.findIndex(element => element === false);
    return resp;
}


// Funciones validaciones especificas


const inputValid = (value, id) => {
    let regex = "";
    switch (id) {
        case "name":
        case "lastName":
            regex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
            break;
        case "idRegistro":
            regex = /^([0-9]{3,4})$/g;
            break;
        case "code":
            regex = /^1([0]{3})([0-9]{5})$/g;
            break;
        case "identification":
            regex = /^([0-9])+$/g;
            break;
        case "model":
        case "serial":
            regex = /^([a-zA-Z0-9\s\-]{3,20})$/g;
            break;
        case "brand":
            regex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{2,15})$/g;
            break;
        case "motive":
            regex = /^([0-9a-zA-ZÀ-Ö\s\.\,\;\:]{2,150})$/g;
            break;
        case "email":
            regex = /^([a-zA-Z0-9]){3,25}\@uniempresarial\.edu\.co$/g;
            break;
        case "cellphone":
            regex = /^3([0-5])([0-9]{8}$)/g;
            break;
        case "promotion":
            regex = /^[0-9][0-2]?$/gm;
            break;
        default:
            regex = /([^a-z0-9]+)/g;
            break;
    }

    return value.match(regex) ? true : false;
}


const dinamicValidation = (element, formValid) => {
    if (element.tagName == "SELECT") {
        if (element.selectedIndex > 0) {
            formValid[element.id] = true;
        } else {
            formValid[element.id] = false;
        }
    } else {
        formValid[element.id] = inputValid(element.value, element.id);
    }
    formValid[element.id] ? validClass(element.classList) : inValidClass(element.classList);
}


export {
    validarForm,
    dinamicValidation
}