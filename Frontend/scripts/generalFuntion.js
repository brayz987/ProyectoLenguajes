'use strcit';

const convertDataJson = (data) => {
    const formDatajson = {};
    data.forEach((value, key) => (formDatajson[key] = value));
    return formDatajson;
}

const optionHeader = {
    headers: {
        "auth-token": localStorage.getItem("AppToken")
    }
}

const copyText = (text) => {
    navigator.clipboard.writeText(text.textContent);
}

export {
    convertDataJson,
    optionHeader,
    copyText
}