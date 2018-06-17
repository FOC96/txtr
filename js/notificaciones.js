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

	document.body.innerHTML += cont
}

function showBack() {
	var back = document.createElement("div")
	back.className = "backBlack";
	back.onClick = hidePops
	document.body.appendChild(back)
}

function hidePops() {
	notif = document.querySelector('.popWindow');
	back = document.querySelector('.backBlack');

	notif.classList.add('hidePopUp');
	back.classList.add('hideBack');
	setTimeout(function() {
		notif.remove()
		back.remove()
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
