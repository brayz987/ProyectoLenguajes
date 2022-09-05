# ProyectoLenguajes

<!-- El token se guarda sobre el archivo storage.js esta ofuscado
Codigo real:

'use strict';

const setStorageInfo = () => {
    if(localStorage.getItem("AppToken") === null ){
        localStorage.setItem("AppToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQXBwIFVzZXIiLCJpZCI6MSwiaWF0IjoxNjYwNDQ0NTkxLCJleHAiOjE2OTE5ODA1OTF9.I_r5jVO-viJlITG0EcenoG1hzLC7iFitJqU1VfQ6rxA");
        localStorage.setItem("ApiURL", "http://"+window.location.hostname+":3001/api");
    };
};

const optionHeader = {
    'headers': {
        'auth': window.btoa(localStorage.getItem('AppToken')),
    }
};

export {
    setStorageInfo,
    optionHeader,
}

  -->