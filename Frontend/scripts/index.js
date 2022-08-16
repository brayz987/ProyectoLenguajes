document.getElementById("cardPortatil").addEventListener('click', ()=> {
    window.location.href = "./views/portatil.html";
})

document.getElementById("cardPersonal").addEventListener('click', ()=> {
    window.location.href = "./views/invitados.html";
})

document.getElementById("cardCarnet").addEventListener('click', ()=> {
    window.location.href = "./views/carnet.html";
})

localStorage.setItem("AppToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQXBwIFVzZXIiLCJpZCI6MSwiaWF0IjoxNjYwNDQ0NTkxLCJleHAiOjE2OTE5ODA1OTF9.I_r5jVO-viJlITG0EcenoG1hzLC7iFitJqU1VfQ6rxA");
localStorage.setItem("ApiURL", "http://localhost:3001/api");
