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

var saving = setInterval(()=>{
    saveOrUpdate();
},15000);

window.addEventListener('keypress',()=>{
    clearInterval(saving)
});

window.addEventListener('keyup', () => {
    saving = setInterval(() => {
        saveOrUpdate();
    }, 15000);
});

exitAndSave = ()=>{
    saveOrUpdate(true);
}

saveOrUpdate =(option = false)=>{
    if (localStorage.getItem("isNew")) {
        save(option);
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