<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<title>texter</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, maximum-scale=1.0">
		<link rel="stylesheet" href="<?=CSS?>generalDesign.css">
		<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
		<link rel="stylesheet" href="<?=CSS?>texter.css">
		
		<script src="<?=JS?>config.js"></script>
		<script src="<?=JS?>notificaciones.js" charset="utf-8"></script>
		<script src="<?=JS?>index.js" charset="utf-8"></script>
		<script src="<?=JS?>main.js" charset="utf-8"></script>
		<script src="<?=JS?>folders/folders.js" charset="utf-8"></script>
	</head>
	<body>
		<div class="sideSection">
			<!--  Side-->
			<div class="profileInfo">
				<!-- <img src="" alt="" class="userPicMain"> -->
				<h3 id="name">Cargando...</h3>
				<p id="surname">Cargando...</p>
			</div>
			<input type="search" id="searchInput">
			<div class="menu">
				<a href="<?=URL?>Dashboard/myFolders"><img src="<?=IMG?>folder.svg" alt="">Mis carpetas</a>
				<a href="<?=URL?>Dashboard/"><img src="<?=IMG?>file.svg" alt="">Mis documentos</a>
				<a href="<?=URL?>Dashboard/reciente"><img src="<?=IMG?>recent.svg" alt="">Recientes</a>
				<a href="<?=URL?>Dashboard/compartidos"><img src="<?=IMG?>shared.svg" alt="">Documentos compartidos</a>
				<a href="<?=URL?>Dashboard/editProfile"><img src="<?=IMG?>user.svg" alt="">Mi perfil</a>
				<a href="<?=URL?>" onclick="logOut()"><img src="<?=IMG?>logOut.svg" alt="">Cerrar Sesión</a>
			</div>
		</div>
		<div class="mainSection">
			<div class="transTop">
			<!--  Encabezado-->
				<div>
					<h3>Mis Carpetas</h3>
					<h1>Mis Carpetas</h1>
				</div>
			</div>
			<!--  CONTENIDO-->
			<div class="mainContent">
				<div class="folder" onclick="insideForder(1)">
					<p>Carpeta Prueba</p>
				</div>
				<div class="newFolder">
					<p>Añadir carpeta</p>
				</div>
			</div>
		</div>
	</body>
</html>
