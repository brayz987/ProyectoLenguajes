
const addRouteHome = (button) => {
    document.getElementById(button).addEventListener('click', () =>  window.location.href = "/")
}

export {
    addRouteHome
}