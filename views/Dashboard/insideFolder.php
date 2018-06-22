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
	</head>
	<body>
		<?=$this->render('Default','menuLateral',true);?>>
		</div>
		<div class="mainSection">
			<div class="transTop">
			<!--  Encabezado-->
				<div>
					<h3>Mis Carpetas</h3>
					<input type="text" name="" value="Nombre de la Carpeta" class="docTitle">
				</div>
				<div id="folderTools">
					<button class="toolBtn" onclick="location.assign('myFolders.html')"><img src="../media/back.svg" alt="" ></button>
					<button class="toolBtn"><img src="../media/delete2.svg" alt=""  onclick="confirmDel(2)"></button>
				</div>
			</div>
			<!--  CONTENIDO-->
			<div class="mainContent">
				<div class="file">
					<div class="fileTools">
						<button type="button" class="deleteButton"></button>
						<button type="button" class="downloadButton"></button>
						<button type="button" class="editButton"></button>
					</div>
					<p>Title</p>
					<p>Date</p>
				</div>
				<div class="newFile">
					<img src="../media/plus.svg" alt="">
					<p>Crear Nuevo Documento</p>
				</div>

			</div>
		</div>
	</body>
</html>
