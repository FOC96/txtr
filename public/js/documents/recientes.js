window.addEventListener('load', () => {
    loadMyDocuments();
});


loadMyDocuments = () => {
    container = document.getElementById("container");
    documents = localStorage.getItem("recientes");
    documents = JSON.parse(documents);
    if (documents.length > 0){
        document.getElementById("title").textContent = "Mis Documentos Recientes";
    } else {
        document.getElementById("title").textContent = "Sin Documentos Recientes";
    }
    documents.map((item) => {
        console.log(item);
        let doc = createElementsDocuments(item._id, item.name, item.createdAt);
        container.appendChild(doc);
    });
}

createElementsDocuments = (idDoc, name, date) => {
    documents = document.createElement("div");
    documents.setAttribute("class", "file");
    documents.setAttribute("id", idDoc);
    div = document.createElement("div");
    div.setAttribute("class", "fileTools");
    btnDelete = document.createElement("button");
    btnDownload = document.createElement("button");
    btnDownload.setAttribute("class", "downloadButton");
    btnDownload.setAttribute("type", "button");
    btnDownload.onclick = () => { download(idDoc) };
    btnEdit = document.createElement("button");
    btnEdit.setAttribute("class", "editButton");
    btnEdit.setAttribute("type", "button");
    btnEdit.onclick = () => { edit(idDoc) };
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