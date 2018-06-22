<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<title>texter</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, maximum-scale=1.0">
		<link rel="stylesheet" href="<?=CSS?>generalDesign.css">
		
		<script src="<?=JS?>config.js"></script>
		<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
		<link rel="stylesheet" href="<?=CSS?>texter.css">
		<script src="<?=JS?>notificaciones.js" charset="utf-8"></script>
		<script src="<?=JS?>index.js" charset="utf-8"></script>
		<script src="<?=JS?>main.js" charset="utf-8"></script>
		<script src="<?=JS?>users/myProfile.js" charset="utf-8"></script>
	</head>
	<body>
		<?=$this->render('Default','menuLateral',true);?>
		<div class="mainSection">
			<div class="transTop">
			<!--  Encabezado-->
				<div>
					<!-- <h3>Ruta de carpetas /</h3> -->
					<h1>Mi Perfil</h1>
				</div>
			</div>
			<!--  CONTENIDO-->
			<div class="mainContent">
				<div class="one flexFormSpace">
					<!-- <div class="one">
						<label for="userPicUp" class="imgPick"></label>
						<input type="file" id="userPicUp">
					</div> -->
					<div class="flexTwo">
						<label for="" class="one">Nombre</label>
						<input type="text" name="" value="" class="one" id="nameProfile">
					</div>
					<div class="flexTwo">
						<label for="" class="one">Apellidos</label>
						<input type="text" name="" value="" class="one" id="surnameProfile">
					</div>
					<div class="one">
						<label for="" class="one">Correo electrónico</label>
						<input type="text" name="" value="" class="one" id="emailProfile">
					</div>
					<div class="flexTwo">
						<label for="" class="one">Contraseña</label>
						<input type="text" name="" value="" class="one">
					</div>
					<div class="flexTwo">
						<label for="" class="one">Confirmar Contraseña</label>
						<input type="text" name="" value="" class="one">
					</div>

					<div class="one">
						<button type="button" class="mainButton right" onclick="updateInfo()">Guardar Cambios</button>
					</div>
				</div>



			</div>
		</div>
	</body>
</html>
