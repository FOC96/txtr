var edit = '';

window.addEventListener('load',()=>{
    $(function () {
        $("#toolbar").draggable();
    });

    DecoupledEditor
        .create(document.querySelector('.document-editor__editable'), {
            alignment: {
                options: ['left', 'right', 'center']
            },
            heading: {
                options: [
                    { model: 'heading1', view: 'h1', title: 'Título', class: 'ck-heading_heading1' },
                    { model: 'heading2', view: 'h2', title: 'Subtítulo', class: 'ck-heading_heading2' },
                    { model: 'paragraph', title: 'Párrafo', class: 'ck-heading_paragraph' }
                ]
            },
            toolbar: [
                'heading', 'bold', 'italic', 'underline', 'code', 'alignment', 'undo', 'redo'
            ]
        })

        .then(editor => {
            const toolbarContainer = document.querySelector('.document-editor__toolbar');
            toolbarContainer.appendChild(editor.ui.view.toolbar.element);
            edit = editor;
            bodyDoc = localStorage.getItem("bodyDoc");
            if (bodyDoc != "") {
                document.getElementById("nameDocument").value = localStorage.getItem("nameDoc");
                editor.setData(bodyDoc);
            }
        })
        .catch(error => {
            console.error(error);
        });
});


save = ()=>{
    btnSave = document.getElementById('save');
    btnSave.textContent = 'Guardando...';
    console.log(edit.getData());
    axios.post('http://192.241.142.12:3000/user/documents/create',
    {
        name: document.getElementById("nameDocument").value,
        body: edit.getData()
    },
    {
        headers: { 'x-access-token': localStorage.getItem("token") }
    })
    .then(function (response) {
        console.log(response);
        // if (!response.data.success) {
        //     showAlert("Atención", "Error en la verificación del Token", "Aceptar", "hideNotif()")
        // } else if (response.data.success) {
        //     localStorage.setItem("email", response.data.data.user.name);
        //     localStorage.setItem("name", response.data.data.user.name);
        //     localStorage.setItem("surname", response.data.data.user.surnames);
        //     window.location.href = (config.url + "Dashboard");
        // } else {
        //     showAlert("Atención", "Algo ha salido mal intenta más tarde", "Aceptar", "hideNotif()")
        // }
    });
    btnSave.textContent = 'Guardar y Salir';
}
