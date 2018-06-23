window.addEventListener('load', () => {
    loadShared();
});


loadShared = () => {
    container = document.getElementById("container");
    axios.get('http://192.241.142.12:3000/user/shared/guest',
        {
            headers: { 'x-access-token': localStorage.getItem("token") }
        })
        .then(function (response) {
            
            if (!response.data.success) {
                showAlert("Atención", "Los documentos no estan disponibles por el momento", "Aceptar", "hideNotif()")
            } else if (response.data.success) {
                response.data.shared.map((item) => {
                    console.log(item);
                    let doc = createElementsDocuments(item._id, item.owner.name, item.owner.surnames, item.document);
                    container.prepend(doc);
                });
            } else {
                showAlert("Atención", "Algo ha salido mal intenta más tarde", "Aceptar", "hideNotif()")
            }
        });
}

createElementsDocuments = (idDoc, name, surname, doc) => {
    documents = document.createElement("div");
    documents.setAttribute("class", "file");
    documents.setAttribute("id", doc._id);
    // documents.onclick = () => { edit(idDoc) };
    div = document.createElement("div");
    div.setAttribute("class", "fileTools");
    btnDelete = document.createElement("button");
    btnDelete.setAttribute("class", "deleteButton");
    btnDelete.setAttribute("type", "button");
    btnDelete.onclick = () => { delDoc(doc._id) };
    btnDownload = document.createElement("button");
    btnDownload.setAttribute("class", "downloadButton");
    btnDownload.setAttribute("type", "button");
    btnDownload.onclick = () => { download(doc._id) };
    btnEdit = document.createElement("button");
    btnEdit.setAttribute("class", "editButton");
    btnEdit.setAttribute("type", "button");
    btnEdit.onclick = () => { edit(doc._id) };
    // div.appendChild(btnDelete);
    div.appendChild(btnDownload);
    // div.appendChild(btnEdit);
    pt = document.createElement("p");
    pt.textContent = doc.name+' ('+name+ " "+ surname+')';
    pd = document.createElement("p");
    pd.textContent = doc._updatedAt;
    documents.appendChild(div);
    documents.appendChild(pt);
    documents.appendChild(pd);
    return documents;
}

newDocument = () => {
    localStorage.setItem("isNew", true);
    localStorage.setItem("ofFolder", false);
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