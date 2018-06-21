window.addEventListener("load",()=>{
	document.getElementById("name").textContent = localStorage.getItem("name");
	document.getElementById("surname").textContent = localStorage.getItem("surname");
});

function showSearch() {
	document.getElementById('searchInput').classList.toggle('hidei');
	document.getElementById('searchInput').focus();
}

function isEmpty(array) {
	flag = true
	for (var i = 0; i < array.length; i++) {
		if (array[i] == "") {
			flag = false
		}
	}

	return flag
}

function share() {
	correo = prompt("Ingrese el correo del usuario a quien le quiere compartir el archivo:", "");
	if (correo == "") {
		al = confirm('Has dejado el campo vacío. Si ya no quieres compartir el documento, da clic en OK.')
		if (!al) {
			share()
		}
	}
}

function updateInfo() {
	

}

logOut = ()=>{
	localStorage.clear();
	location.href = config.url;
}

loadMenu = (file)=>{
	axios.get('../views/'+file)
	.then(function (response) {
		// mainSection
		console.log(response);
	})
	.catch(function (error) {
		console.log(error);
	});
}
