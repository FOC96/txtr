var edit = '';
window.addEventListener('load',()=>{
    document.getElementById("nameDocument").value = localStorage.getItem("nameDoc");

    $(function () {
        $("#toolbar").draggable();
    });

    DecoupledEditor
        .create(document.querySelector('.document-editor__editable'), {
            heading: {
                options: [
                    { model: 'heading1', view: 'h1', title: 'Título', class: 'ck-heading_heading1' },
                    { model: 'heading2', view: 'h2', title: 'Subtítulo', class: 'ck-heading_heading2' },
                    { model: 'paragraph', title: 'Párrafo', class: 'ck-heading_paragraph' }
                ]
            },
            removePlugins: ['imageuploader'],
        })
        .then(editor => {
            const toolbarContainer = document.querySelector('.document-editor__toolbar');
            toolbarContainer.appendChild(editor.ui.view.toolbar.element);
            edit = editor;
            document.querySelector('.ck-file-dialog-button').remove();
            bodyDoc = localStorage.getItem("bodyDoc");
            if (bodyDoc != "") {
                editor.setData(bodyDoc);
            }
        })
        .catch(error => {
            console.error(error);
        });
});

exitAndSave = (option = true)=>{
    saveOrUpdate(option);
}

saveOrUpdate =(option = false)=>{
    if (localStorage.getItem("isNew") == "true") {
        if (localStorage.getItem('ofFolder') == "true"){
            alert("guardando doc en folder")
            saveOfFolder(option);
        } else {
            alert("guardando doc")
            save(option);
        }
    } else {
        update(option);
    }
}

save = (option)=>{
    // console.log(edit.getData());
    axios.post('http://192.241.142.12:3000/user/documents/create',
    {
        name: document.getElementById("nameDocument").value,
        body: edit.getData()
    },
    {
        headers: { 'x-access-token': localStorage.getItem("token") }
    })
    .then(function (response) {
        if (response.data.success) {
            localStorage.setItem("bodyDoc", edit.getData());
            localStorage.setItem("nameDoc", document.getElementById("nameDocument").value);
            localStorage.setItem("isNew", false);
            localStorage.setItem("idDoc", response.data.document._id);
            if (option) window.location.href = config.url + "Dashboard";
        } else {
            showAlert("Atención", "Algo ha salido mal intenta más tarde", "Aceptar", "hideNotif()")
        }
    });
}


update = (option)=>{
    // alert("guardando");
    btnSave = document.getElementById('save');
    btnSave.textContent = 'Guardando...';
    let idDoc = localStorage.getItem("idDoc");
    axios.put('http://192.241.142.12:3000/user/documents/update/'+idDoc,
    {
        name: document.getElementById("nameDocument").value,
        body: edit.getData()
    },
    {
        headers: { 'x-access-token': localStorage.getItem("token") }
    })
    .then(function (response) {
        // console.log(response);
        if (response.data.success) {
            localStorage.setItem("bodyDoc", edit.getData());
            localStorage.setItem("nameDoc", document.getElementById("nameDocument").value);
            btnSave.textContent = 'Guardar y Salir';
            if (option) window.location.href = config.url + "Dashboard";
        } else {
            showAlert("Atención", "Algo ha salido mal intenta más tarde", "Aceptar", "hideNotif()")
        }
    });
}

share = ()=>{
    btnShared = document.getElementById('shared');
    exitAndSave(false);
    let idDoc = localStorage.getItem("idDoc");
    email = prompt("Introduce el correo de con quien deseas compartir");
    if(!email) return null;
    btnShared.textContent = 'Compartiendo...';
    axios.post('http://192.241.142.12:3000/user/shared/create',
    {
        email: email,
        document: idDoc
    },
    {
        headers: { 'x-access-token': localStorage.getItem("token") }
    })
    .then(function (response) {
        console.log(response);
        if (response.data.success) {
            btnShared.textContent = 'Compartir';
            showAlert("Hecho", "Se ha compartido correctamente", "Aceptar", "hideNotif()")
        } else {
            btnShared.textContent = 'Compartir';
            showAlert("Atención", "Algo ha salido mal intenta más tarde", "Aceptar", "hideNotif()")
        }
    });
}

/****OF FOLDER */
saveOfFolder = (option) => {
    // console.log(edit.getData());
    idFolder = localStorage.getItem("idFolder");
    idDoc = '';
    axios.post('http://192.241.142.12:3000/user/documents/create',
        {
            name: document.getElementById("nameDocument").value,
            body: edit.getData()
        },
        {
            headers: { 'x-access-token': localStorage.getItem("token") }
        })
        .then(function (response) {
            if (response.data.success) {
                idDoc = response.data.document._id;
                axios.put('http://192.241.142.12:3000/user/folders/on/' + idFolder + '/add/document',
                    {
                        document: idDoc
                    },
                    {
                        headers: { 'x-access-token': localStorage.getItem("token") }
                    })
                    .then(function (response) {
                        console.log(response);
                        if(response.data.update.n == 1){
                            if (option) window.location.href = config.url + "Dashboard";
                        } else {
                            showAlert("Atención", "Algo ha salido mal intenta más tarde", "Aceptar", "hideNotif()")
                        }
                    });
            } else {
                showAlert("Atención", "Algo ha salido mal intenta más tarde", "Aceptar", "hideNotif()")
            }
        });
}


updateOfFolder = (option) => {
    // alert("guardando");
    btnSave = document.getElementById('save');
    btnSave.textContent = 'Guardando...';
    let idDoc = localStorage.getItem("idDoc");
    axios.put('http://192.241.142.12:3000/user/documents/update/' + idDoc,
        {
            name: document.getElementById("nameDocument").value,
            body: edit.getData()
        },
        {
            headers: { 'x-access-token': localStorage.getItem("token") }
        })
        .then(function (response) {
            // console.log(response);
            if (response.data.success) {
                localStorage.setItem("bodyDoc", edit.getData());
                localStorage.setItem("nameDoc", document.getElementById("nameDocument").value);
                btnSave.textContent = 'Guardar y Salir';
                if (option) window.location.href = config.url + "Dashboard";
            } else {
                showAlert("Atención", "Algo ha salido mal intenta más tarde", "Aceptar", "hideNotif()")
            }
        });
}