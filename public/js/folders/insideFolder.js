window.addEventListener('load', () => {
    loadMyDocuments();
});


loadMyDocuments = () => {
    idFolder = localStorage.getItem("idFolder");
    container = document.getElementById("container");
    docs = document.createElement("div");
    docs.setAttribute('class', 'newFile');
    docs.onclick = () => { newDocument() };
    img = document.createElement("img");
    img.setAttribute('src', config.url + "public/img/plus.svg");
    p = document.createElement("p");
    p.textContent = 'Crear Nuevo Documento';
    docs.appendChild(img);
    docs.appendChild(p);
    container.appendChild(docs);

    axios.get('http://192.241.142.12:3000/user/folders/show/'+idFolder,
        {
            headers: { 'x-access-token': localStorage.getItem("token") }
        })
        .then(function (response) {
            
            if (!response.data.success) {
                showAlert("Atención", "Los documentos no estan disponibles por el momento", "Aceptar", "hideNotif()")
            } else if (response.data.success) {
                localStorage.setItem("idFolder", response.data.folder._id);
                document.getElementById("nameInsideFolder").value = response.data.folder.name;
                response.data.folder.documents.map((item) => {
                    console.log(item);
                    let doc = createElementsDocuments(item._id, item.name, item._createdAt);
                    container.appendChild(doc);
                });
            } else {
                showAlert("Atención", "Algo ha salido mal intenta más tarde", "Aceptar", "hideNotif()")
            }
        });
}

createElementsDocuments = (idDoc, name, date) => {
    documents = document.createElement("div");
    documents.setAttribute("class", "file");
    documents.setAttribute("id", idDoc);
    // documents.onclick = () => { edit(idDoc) };
    div = document.createElement("div");
    div.setAttribute("class", "fileTools");
    btnDelete = document.createElement("button");
    btnDelete.setAttribute("class", "deleteButton");
    btnDelete.setAttribute("type", "button");
    btnDelete.onclick = () => { delDoc (idDoc) };
    btnDownload = document.createElement("button");
    btnDownload.setAttribute("class", "downloadButton");
    btnDownload.setAttribute("type", "button");
    btnDownload.onclick = () => { download(idDoc) };
    btnEdit = document.createElement("button");
    btnEdit.setAttribute("class", "editButton");
    btnEdit.setAttribute("type", "button");
    btnEdit.onclick = () => { edit(idDoc) };
    div.appendChild(btnDelete);
    div.appendChild(btnDownload);
    div.appendChild(btnEdit);
    pt = document.createElement("p");
    pt.textContent = name;
    pd = document.createElement("p");
    pd.textContent = date;
    documents.appendChild(div);
    documents.appendChild(pt);
    documents.appendChild(pd);
    return documents;
}

newDocument = () => {
    localStorage.setItem("isNew", true);
    localStorage.setItem("ofFolder", true);
    localStorage.setItem("nameDoc", "Nuevo Documento");
    localStorage.setItem("bodyDoc", "");
    window.location.href = config.url + "Dashboard/editor";
}

edit = (idDocument) => {
    axios.get('http://192.241.142.12:3000/user/documents/show/' + idDocument,
        {
            headers: { 'x-access-token': localStorage.getItem("token") }
        })
        .then(function (response) {
            
            if (!response.data.success) {
                showAlert("Atención", "El documento no esta disponible por el momento", "Aceptar", "hideNotif()")
            } else if (response.data.success) {
                localStorage.setItem("idDoc", response.data.document._id);
                localStorage.setItem("bodyDoc", response.data.document.body);
                localStorage.setItem("nameDoc", response.data.document.name);
                localStorage.setItem("isNew", false);
                recientes = localStorage.getItem("recientes");
                recientes = JSON.parse(recientes);
                let doc = {
                    name: response.data.document.name,
                    updatedAt: response.data.document.updatedAt,
                    _id: response.data.document._id
                };
                recientes.push(doc);
                recientes = JSON.stringify(recientes);
                localStorage.setItem("recientes", recientes);
                window.location.href = config.url + "Dashboard/editor";
            } else {
                showAlert("Atención", "Algo ha salido mal intenta más tarde", "Aceptar", "hideNotif()")
            }
        });
}

delDoc = (idDoc) => {
    showAlert("Atención", "Deseas Eliminar este archivo? No se podra recuperar", "Aceptar", "deleteDoc('" + idDoc + "')", true)
}

deleteDoc = (idDoc) => {
    axios.delete('http://192.241.142.12:3000/user/documents/delete/' + idDoc,
    {
        headers: { 'x-access-token': localStorage.getItem("token") }
    })
    .then(function (response) {
        
        document.getElementById(idDoc).remove();
        hideNotif();
    });
}

atras = ()=>{
    
    idFolder = localStorage.getItem("idFolder");
    axios.put('http://192.241.142.12:3000/user/folders/update/' + idFolder,
        {
            name: document.getElementById("nameInsideFolder").value
        },
        {
            headers: { 'x-access-token': localStorage.getItem("token") }
        })
        .then(function (response) {
            
            window.location.href = config.url + "Dashboard/myFolders";
        });
}


confirmDel = ()=>{
    showAlert("Atención", "Todos Los Documentos serán eliminados", "Aceptar", "deleteFolder()",true)
}


deleteFolder = ()=>{
    hideNotif();
    setTimeout(()=>{
    },1000);
    idFolder = localStorage.getItem("idFolder");
    axios.delete('http://192.241.142.12:3000/user/folders/delete/' + idFolder,
        {
            headers: { 'x-access-token': localStorage.getItem("token") }
        })
        .then(function (response) {
            
            if (!response.data.success) {
                showAlert("Atención", "Los documentos no estan disponibles por el momento", "Aceptar", "hideNotif()")
            } else if (response.data.success) {
                window.location.href = config.url + "Dashboard/myFolders";
            } else {
                showAlert("Atención", "Algo ha salido mal intenta más tarde", "Aceptar", "hideNotif()")
            }
        });
}