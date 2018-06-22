window.addEventListener('load', ()=>{
    document.getElementById("nameProfile").value = localStorage.getItem("name");
    document.getElementById("surnameProfile").value = localStorage.getItem("surname");
    document.getElementById("emailProfile").value = localStorage.getItem("email");
});