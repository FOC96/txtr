<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<title>Texter</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, maximum-scale=1.0">
		<link rel="stylesheet" href="<?=CSS?>generalDesign.css">
		<link rel="stylesheet" href="<?=CSS?>connIT.css">

		<script src="<?=JS?>libs/axios/axios.min.js"></script>
		<script src="<?=JS?>config.js" charset="utf-8"></script>
		<script src="<?=JS?>notificaciones.js" charset="utf-8"></script>
		<script src="<?=JS?>index.js" charset="utf-8"></script>
		<script>
			console.log(localStorage.getItem("token"));
			if(localStorage.getItem("token") != null){
				window.location.href = config.url+"Dashboard";
			}
		</script>
	</head>
	<body>
		<div class="overDiv flexCenterMiddleTop">
			<img src="<?=IMG?>logo.svg" alt="Logo">
			<div>
				<button type="button" class="secondButton" onclick="showSignUp()">Crear Cuenta</button>
				<button type="button" class="secondButton" onclick="showSignIn()">Iniciar Sesión</button>
			</div>
		</div>
		<div class="imgBack"></div>
	</body>
	</div>
</html>
