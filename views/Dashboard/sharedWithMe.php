<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<title>texter</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, maximum-scale=1.0">
		<link rel="stylesheet" href="<?=CSS?>generalDesign.css">
		<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
		<script src="<?=JS?>libs/axios/axios.min.js"></script>
        
		<script src="<?=JS?>config.js"></script>
		<link rel="stylesheet" href="<?=CSS?>texter.css">
		<script src="<?=JS?>notificaciones.js" charset="utf-8"></script>
		<script src="<?=JS?>index.js" charset="utf-8"></script>
		<script src="<?=JS?>main.js" charset="utf-8"></script>
		<script src="<?=JS?>documents/sharedWith.js" charset="utf-8"></script>
		<script src="<?=JS?>documents/download.js" charset="utf-8"></script>
	</head>
	<body>
		<?=$this->render('Default','menuLateral',true);?>
		<div class="mainSection" id="mainSection">
			<div class="transTop">
				<!--  Encabezado-->
				<div>
					<!-- <h3>Ruta de carpetas /</h3> -->
					<h1>Documentos Compartidos Conmigo</h1>
				</div>
				<div class="searchSection">
				</div>
			</div>
			<!--  CONTENIDO-->
			<div class="mainContent" id="container">
				
			</div>
		</div>
	</body>
</html>
