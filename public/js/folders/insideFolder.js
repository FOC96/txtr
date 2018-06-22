window.addEventListener('load', () => {
    loadMyDocuments();
});


loadMyDocuments = () => {
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

    axios.get('http://192.241.142.12:3000/user/documents',
        {
            headers: { 'x-access-token': localStorage.getItem("token") }
        })
        .then(function (response) {
            console.log(response);
            if (!response.data.success) {
                showAlert("Atención", "Los documentos no estan disponibles por el momento", "Aceptar", "hideNotif()")
            } else if (response.data.success) {
                response.data.documents.map((item) => {
                    console.log(item);
                    let doc = createElementsDocuments(item._id, item.name, item.createdAt);
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
    documents.onclick = () => { edit(idDoc) };
    div = document.createElement("div");
    div.setAttribute("class", "fileTools");
    btnDelete = document.createElement("button");
    btnDelete.setAttribute("class", "deleteButton");
    btnDelete.setAttribute("type", "button");
    btnDelete.onclick = () => { delete (idDoc) };
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
    window.location.href = config.url + "Dashboard/editor";
}