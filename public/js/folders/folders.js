window.addEventListener('load', () => {
    loadMyFolders();
});

insideFolder = (idFolder) => {
    localStorage.setItem("idFolder", idFolder);
    window.location.href = config.url +"Dashboard/insideFolder"
}

loadMyFolders = () => {
    container = document.getElementById("container");
    folder = document.createElement("div");
    folder.setAttribute('class', 'newFolder');
    folder.onclick = () => { newFolder() };
    p = document.createElement("p");
    p.textContent = 'Añadir Carpeta';
    folder.appendChild(p);
    container.appendChild(folder);

    axios.get('http://192.241.142.12:3000/user/folders',
    {
        headers: { 'x-access-token': localStorage.getItem("token") }
    })
    .then(function (response) {
        if (!response.data.success) {
            showAlert("Atención", "Los documentos no estan disponibles por el momento", "Aceptar", "hideNotif()")
        } else if (response.data.success) {
            response.data.folders.map((item) => {
                let fol = createElementsFolders(item._id, item.name);
                container.appendChild(fol);
            });
        } else {
            showAlert("Atención", "Algo ha salido mal intenta más tarde", "Aceptar", "hideNotif()")
        }
    });
}

createElementsFolders = (idFolder, name, isNew = true) => {
    folder = document.createElement("div");
    clas = (isNew) ? 'folder' : 'newFolder';
    folder.setAttribute('class', clas);
    folder.setAttribute('id', idFolder);
    folder.onclick = () => { insideFolder(idFolder) };
    p = document.createElement("p");
    p.textContent = name;
    folder.appendChild(p);
    return folder;
}

newFolder = () => {
    let nameFolder = prompt("Ingresa el nombre de tu nueva carpeta");
    if (nameFolder == "") 
    {
        showAlert("Atención", "Tú folder debe de contener un nombre", "Aceptar", "hideNotif()");
        return null;
    }
    if (!nameFolder){
        return null;
    }
    container = document.getElementById("container");
    axios.post('http://192.241.142.12:3000/user/folders/create',
    {
        name: nameFolder
    },
    {
        headers: { 'x-access-token': localStorage.getItem("token") }
    })
    .then(function (response) {
        
        if (!response.data.success) {
            showAlert("Atención", "Las Carpetas no estan disponibles por el momento", "Aceptar", "hideNotif()")
        } else if (response.data.success) {
            let fol = createElementsFolders(response.data.folder._id, response.data.folder.name);
            container.appendChild(fol);
        } else {
            showAlert("Atención", "Algo ha salido mal intenta más tarde", "Aceptar", "hideNotif()")
        }
    });
}