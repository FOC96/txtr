function showAlert(title, msg, action, fun) {
	var back2 = document.createElement("div")
	back2.className = "notifBackBlack";
	document.body.appendChild(back2)

	cont = '<div class="notif popWindow" id="popUpAlert">'
		+'<button class="closeButton" onClick="hideNotif()"></button>'
		+'<h3 class="one">'+title+'</h3>'
		+'<p class="one">'+msg+'</p>'
		+'<div class="flexFormSpace">'
			+'<button type="button" class="secondButton flexFour" onClick="hideNotif()">Cancelar</button>'
			+'<button type="button" class="mainButton flexFour" onClick="'+fun+'">'+action+'</button>'
		+'</div>'
	+'</div>'

	document.body.insertAdjacentHTML('afterend', cont);
}

function showBack() {
	var back = document.createElement("div")
	back.className = "backBlack";
	back.onClick = hidePops
	document.body.appendChild(back)
}

function hidePops() {
	notif = document.querySelectorAll('.popWindow');
	back = document.querySelectorAll('.backBlack');

	notif[notif.length-1].classList.add('hidePopUp');
	back[back.length-1].classList.add('hideBack');
	setTimeout(function() {
		notif[notif.length-1].remove()
		back[back.length-1].remove()
	}, 300)
}

function hideNotif() {
	notif2 = document.querySelector('#popUpAlert')
	back2 = document.querySelector('.notifBackBlack')

	notif2.classList.add('hidePopUp')
	back2.classList.add('hideBack')

	setTimeout(function() {
		notif2.remove()
		back2.remove()
	}, 300)
}

function confirmDel(tipo) {
	if (tipo == "1") {
		// Documento
		al = confirm('¿Seguro desea eliminar este documento?')
		if (al) {
			// Eliminar objeto
			alert('Documento eliminado')
		}
	} else {
		// Folder
		al = confirm('¿Seguro desea eliminar esta carpeta?\nTodo su contenido será eliminado también.')
		if (al) {
			// Eliminar objeto
			alert('Carpeta eliminada')
			location.assign('myFolders.html')
		}
	}

}
