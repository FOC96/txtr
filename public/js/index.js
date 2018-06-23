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
			+ "<button type='button' class='secondButton flexThree' onclick='showSignUp()'>Registrarme</button>"
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
		return null;
	}
	axios.post('http://192.241.142.12:3000/auth/login', {
		email: email,
		password: pass 
	})
	.then(function (response) {
		if (!response.data.success){
			showAlert("Atención", "Correo o contraseña no validos, Verifica", "Aceptar", "hideNotif()")
		} else if (response.data.success){
			localStorage.setItem("token", response.data.token);
			localStorage.setItem("id", response.data.id);
			getDataUser();
		} else {
			showAlert("Atención", "Algo ha salido mal intenta más tarde", "Aceptar", "hideNotif()")
		}
	})
	.catch(function (error) {
		console.log(error);
	});
}

getDataUser = ()=>{
	axios.get('http://192.241.142.12:3000/users/account',
	{
		headers: { 'x-access-token': localStorage.getItem("token") }
	})
	.then(function (response) {
		if (!response.data.success) {
			showAlert("Atención", "Error en la verificación del Token", "Aceptar", "hideNotif()")
		} else if (response.data.success) {
			localStorage.setItem("email", response.data.user.email);
			localStorage.setItem("name", response.data.user.name);
			localStorage.setItem("surname", response.data.user.surnames);
			window.location.href = (config.url+"Dashboard");
		} else {
			showAlert("Atención", "Algo ha salido mal intenta más tarde", "Aceptar", "hideNotif()")
		}
	});
}

// Registras
signUpAction = ()=> {
	name = document.getElementById('userName').value
	last = document.getElementById('userLast').value
	email = document.getElementById('usermail').value
	pass = document.getElementById('userPass').value
	passV = document.getElementById('userPassV').value
	
	if (name == '' || last == '' || email == '' || pass == '' || passV == '') {
		showAlert("Atención", "No debe de haber campos vacíos", "Aceptar", "hideNotif()")
		return null;
	}
	if (pass === passV) {
		axios.post('http://192.241.142.12:3000/register/users', {
			name: name,
			surnames: last,
			email: email,
			password: pass
		})
		.then(function (response) {
			res = response.data;
			if (!res.success){
				if(res.errors.code == 11000){
					showAlert("Correo ya registrado", "El correo que ha introducido ya se encuentra registrado", "Aceptar", "hideNotif()")
				} else {
					showAlert("Atención", "Algo ha salido mal intenta más tarde", "Aceptar", "hideNotif()")
				}
			} else if (res.success){
				showAlert("Correcto", "Bienvenido, a continuación inicia Sesión", "Aceptar", "logIn()");
			} else {
				showAlert("Atención", "Algo ha salido mal intenta más tarde", "Aceptar", "hideNotif()")
			}
		})
		.catch(function (error) {
			console.log(error);
		});
	} else {
		showAlert("Atención", "Verifica las contraseñas", "Aceptar", "hideNotif()")
	}
}

logIn = ()=>{
	hideNotif();
	setTimeout(() => {
		showSignIn();
	}, 2000);
}
