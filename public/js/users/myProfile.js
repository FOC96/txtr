window.addEventListener('load', ()=>{
    document.getElementById("nameProfile").value = localStorage.getItem("name");
    document.getElementById("surnameProfile").value = localStorage.getItem("surname");
    document.getElementById("emailProfile").value = localStorage.getItem("email");
});

idUser = localStorage.id;
cambio = false;
param = {};
document.getElementById("pass").addEventListener('change', ()=>{
    cambio = true;
});

saveProfile = () => {
    var params = {};
    name = document.getElementById("nameProfile").value;
    surname = document.getElementById("surnameProfile").value;
    email = document.getElementById("emailProfile").value;
    pass = document.getElementById("pass").value;
    passConf = document.getElementById("passConf").value;

    if(pass !== passConf){
        showAlert("Atención", "Las contraseñas no coinciden", "Aceptar", "hideNotif()");
        return null;
    }

    if (cambio){
        param = {
            name: name,
            surnames: surname,
            email: email,
            password: pass
        }
        showAlert("Atención", "Tu Contraseña se vera modificada", "Continuar", "hideNotif()", true)
    } else {
        param = {
            name: name,
            surnames: surname,
            email: email,
        }
    }

    container = document.getElementById("container");
    axios.put('http://192.241.142.12:3000/users/update',
        params,
        {
            headers: { 'x-access-token': localStorage.getItem("token") }
        })
        .then(function (response) {
            console.log(response);
            if (!response.data.success) {
                showAlert("Atención", "Los documentos no estan disponibles por el momento", "Aceptar", "hideNotif()")
            } else if (response.data.success) {
                localStorage.email = email;
                localStorage.name = name;
                localStorage.surname = surname;
                showAlert("Correcto", "Cambios Realizados Correctamente", "Aceptar", "hideNotif()");
            } else {
                showAlert("Atención", "Algo ha salido mal intenta más tarde", "Aceptar", "hideNotif()")
            }
        });
}
