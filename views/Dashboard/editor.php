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
	<script src="<?=JS?>main.js" charset="utf-8"></script>
</head>
<body>
	<div class="editTop">
		<div>
		<input type="text" value="New Document" class="docTitle">
		</div>
		<div>
			<button type="button" class="thirdButton" onclick="share()">Compartir</button>
			<button type="button" class="thirdButton">Guardar y Salir</button>
			<img src="" alt="" class="userPic">
		</div>
	</div>
		<div class="document-editor">
		    <div class="document-editor__toolbar" id="toolbar"></div>
		    <div class="document-editor__editable-container">
		        <div class="document-editor__editable">
		            <p>The initial editor data.</p>
		        </div>
		    </div>
		</div>

	<script>
	$( function() {
		$( "#toolbar" ).draggable();
	} );

	    DecoupledEditor
	        .create( document.querySelector('.document-editor__editable'), {
						alignment: {
            options: [ 'left', 'right', 'center' ]
        		},
						heading: {
		            options: [
		                { model: 'heading1', view: 'h1', title: 'Título', class: 'ck-heading_heading1' },
		                { model: 'heading2', view: 'h2', title: 'Subtítulo', class: 'ck-heading_heading2' },
		                { model: 'paragraph', title: 'Párrafo', class: 'ck-heading_paragraph' }
		            ]
		        },
		        toolbar: [
		            'heading', 'bold', 'italic', 'underline', 'code', 'alignment', 'undo', 'redo'
		        ]
					} )


	        .then( editor => {
	            const toolbarContainer = document.querySelector( '.document-editor__toolbar' );

	            toolbarContainer.appendChild( editor.ui.view.toolbar.element );
	        } )
	        .catch( error => {
	            console.error( error );
	        } );
	</script>
</body>
<style>

</style>
</html>
