//Regresa de regInst a back
function showNormal() {
	window.history.back()
}

// Muestra campos de iniciar sesión
function showSignIn() {
	if (document.querySelector('.signUpWindow')) {
		hidePops()
		setTimeout(function() {
			signInFields = "<div class='popWindow signInWindow'>"
					+"<button class='closeButton' onClick='hidePops()'></button>"
					+"<h1>Iniciar Sesión</h1>"
					+"<div class='one'>"
						+"<label for='usermail' class='one'>Correo electrónico</label>"
						+"<input type='text' id='usermail' class='one'>"
					+"</div>"
					+"<div class='one'>"
						+"<label for='userPass' class='one'>Contraseña</label>"
						+"<input type='password' id='userPass' class='one'>"
					+"</div>"
					+"<div class='buttonsArea'>"
						+"<button type='button' class='secondButton flexThree' onClick='showSignUp()'>Registrarme</button>"
						+"<button type='button' class='mainButton flexThree' onClick='signInAction()'>Ingresar</button>"
					+"</div>";

			document.body.innerHTML += signInFields
			showBack()
		}, 300)
	} else {
		signInFields = "<div class='popWindow signInWindow'>"
				+"<button class='closeButton' onClick='hidePops()'></button>"
				+"<h1>Iniciar Sesión</h1>"
				+"<div class='one'>"
					+"<label for='usermail' class='one'>Correo electrónico</label>"
					+"<input type='text' id='usermail' class='one'>"
				+"</div>"
				+"<div class='one'>"
					+"<label for='userPass' class='one'>Contraseña</label>"
					+"<input type='password' id='userPass' class='one'>"
				+"</div>"
				+"<div class='buttonsArea'>"
					+"<button type='button' class='secondButton flexThree'>Registrarme</button>"
					+"<button type='button' class='mainButton flexThree' onClick='signInAction()'>Ingresar</button>"
				+"</div>";

		document.body.innerHTML += signInFields
		showBack()
	}
}

// Muestra campos de registro
function showSignUp() {
	if (document.querySelector('.signInWindow')) {
		hidePops();
		setTimeout(function() {
			signInFields = '<div class="popWindow signUpWindow">'
			+"<button class='closeButton' onClick='hidePops()'></button>"
				+'<h1>Crear Cuenta</h1>'
				+'<h3>Estudiante</h3>'
				+'<div class="flexFormSpace">'
					+'<div class="flexFormSpace">'
						+'<div class="flexThree">'
							+'<label for="userName" class="one">Nombre</label>'
							+'<input type="text" id="userName" class="one">'
						+'</div>'
						+'<div class="flexThree">'
							+'<label for="userLast" class="one">Apellidos</label>'
							+'<input type="text" id="userLast" class="one">'
						+'</div>'
					+'</div>'
					+'<div class="one">'
						+'<label for="usermail" class="one">Correo electrónico</label>'
						+'<input type="text" id="usermail" class="one">'
					+'</div>'
					+'<div class="flexFormSpace">'
						+'<div class="flexThree">'
							+'<label for="userPass" class="one">Contraseña</label>'
							+'<input type="password" id="userPass" class="one">'
						+'</div>'
						+'<div class="flexThree">'
							+'<label for="userPassV" class="one">Verificar Contraseña</label>'
							+'<input type="password" id="userPassV" class="one">'
						+'</div>'
					+'</div>'
				+'</div>'
				+'<div class="buttonsArea">'
					+'<button type="button" class="secondButton flexThree" onClick="showSignIn()">Ya tengo cuenta</button>'
					+'<button type="button" class="mainButton flexThree" onClick="signUpAction()">Crear cuenta</button>'
				+'</div>'
			+'</div>';

			document.body.innerHTML += signInFields
			showBack()
		}, 300)
	} else {
		signInFields = '<div class="popWindow signUpWindow">'
		+"<button class='closeButton' onClick='hidePops()'></button>"
			+'<h1>Crear Cuenta</h1>'
			+'<h3>Estudiante</h3>'
			+'<div class="flexFormSpace">'
				+'<div class="flexFormSpace">'
					+'<div class="flexThree">'
						+'<label for="userName" class="one">Nombre</label>'
						+'<input type="text" id="userName" class="one">'
					+'</div>'
					+'<div class="flexThree">'
						+'<label for="userLast" class="one">Apellidos</label>'
						+'<input type="text" id="userLast" class="one">'
					+'</div>'
				+'</div>'
				+'<div class="one">'
					+'<label for="usermail" class="one">Correo electrónico</label>'
					+'<input type="text" id="usermail" class="one">'
				+'</div>'
				+'<div class="flexFormSpace">'
					+'<div class="flexThree">'
						+'<label for="userPass" class="one">Contraseña</label>'
						+'<input type="password" id="userPass" class="one">'
					+'</div>'
					+'<div class="flexThree">'
						+'<label for="userPassV" class="one">Verificar Contraseña</label>'
						+'<input type="password" id="userPassV" class="one">'
					+'</div>'
				+'</div>'
			+'</div>'
			+'<div class="buttonsArea">'
				+'<button type="button" class="secondButton flexThree" onClick="showSignIn()">Ya tengo cuenta</button>'
				+'<button type="button" class="mainButton flexThree" onClick="signUpAction()">Crear cuenta</button>'
			+'</div>'
		+'</div>';

		document.body.innerHTML += signInFields
		showBack()
	}

}

// Iniciar sesión
function signInAction() {
	email = document.getElementById('usermail').value
	pass = document.getElementById('userPass').value

	if (email == '' || pass == '') {
		showAlert("Campos vacíos", "Has dejado campos vacíos", "Aceptar", "hideNotif()")
	} else {
		// Checar credenciales
	}
}

// Registras
function signUpAction() {
	name = document.getElementById('userName').value
	last = document.getElementById('userLast').value
	email = document.getElementById('usermail').value
	pass = document.getElementById('userPass').value
	passV = document.getElementById('userPassV').value

	if (name == '' || last == '' || email == '' || pass == '' || passV == '') {
		alert('Hay campos vacíos')
	} else {
		if (pass === passV) {
			// SE PUDO
		} else {
			alert('Las contraseñas no coinciden')
		}
	}
}
