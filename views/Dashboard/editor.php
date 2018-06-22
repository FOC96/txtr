<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, maximum-scale=1.0">
    <title>Editor</title>
	<link rel="stylesheet" href="<?=CSS?>generalDesign.css">
	<link rel="stylesheet" href="<?=CSS?>texter.css">

	<script src="<?=JS?>config.js"></script>
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="https://cdn.ckeditor.com/ckeditor5/10.0.1/decoupled-document/ckeditor.js"></script>
	<script src="<?=JS?>libs/axios/axios.min.js"></script>
	<script src="<?=JS?>Documents/editor.js" charset="utf-8"></script>
</head>
<body>
	<div class="editTop">
		<div>
			<input type="text" value="Cargando..." class="docTitle" id="nameDocument">
		</div>
		<div>
			<button type="button" class="thirdButton" onclick="share()">Compartir</button>
			<button type="button" class="thirdButton" onclick="exitAndSave()" id="save">Guardar y Salir</button>
			<!-- <img src="" alt="" class="userPic"> -->
		</div>
	</div>
		<div class="document-editor">
		    <div class="document-editor__toolbar" id="toolbar"></div>
		    <div class="document-editor__editable-container">
		        <div class="document-editor__editable" id="cont"> </div>
		    </div>
		</div>
</body>
<style>

</style>
</html>
