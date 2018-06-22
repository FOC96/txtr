<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<title>texter</title>
		<?=$this->render('Default','head',true);?>
	</head>
	<body>
		<?=$this->render('Default','menuLateral',true);?>
		<div class="mainSection">
			<div class="transTop">
				<!--  Encabezado-->
				<div>
					<!-- <h3>Ruta de carpetas /</h3> -->
					<h1>Mis Documentos</h1>
				</div>
				<div class="searchSection">
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
