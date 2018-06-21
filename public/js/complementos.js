/**
*
* @author Enrique Aguilar Orozco
*
*/
window.addEventListener('load',function() {
	var favicon = document.createElement('link');
	favicon.rel='shortcut icon';
	favicon.href=config['url']+'favicon.ico';
	document.head.appendChild(favicon);
    msieversion();
},false);

function msieversion() {
    var ua = window.navigator.userAgent;
    var edge = ua.indexOf("Edge");
    var msie = ua.indexOf("MSIE");
    if (msie > 0 || edge > 0)  // If Internet Explorer, return version number
    {
        alert("Tu Navegador no cuenta con soporte para el uso de la Aplicación, algunas de las funciones no se encuentran disponibles");
    }
    return false;
}

/**
 * @deprecated
 */	
function pushNotification(tittle, description, time = 6000, tag = 'default') {
	Push.create(tittle, {
	    body: description,
	    icon: config.url+'public/images/PHI.png',
	    timeout: time,
			tag: tag,
	    onClick: function () {
	        window.focus();
	        this.close();
	    }
	});
}

function cerrarNotificacion() {
    document.getElementById('ventana_notificaciones').remove();
    document.getElementById("background-loading-notification").classList.add("no-visible");
		localStorage.setItem('alerta','1');
}

window.onkeyup = compruebaTecla;
function compruebaTecla(){
    var e = window.event;
    var tecla = (document.all) ? e.keyCode : e.which;
    if(tecla == 27){
        cerrarPerfil();
    }
}

window.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        if(document.getElementById("btnBuscar")){
            setFiltro()
            buscador(document.getElementById("btnBuscar").name)
        }
    }
});
/**
 * 
 * @param {*} titulo 
 * @param {*} mensaje 
 * @param {*} boton 
 * @param {*} estado 
 * @param {*} prompt 
 * @param {*} fn 
 */
function generarNotificacion(titulo, mensaje, boton, estado, prompt=null,fn=null) {
    contenedorGeneral = document.getElementById("centrar_ventana_notificaciones");
    contenedorNotificacion = document.createElement('div');
    contenedorNotificacion.setAttribute("id", "ventana_notificaciones");
    contenedorEncabezadoNotificacion = document.createElement('div');
    contenedorEncabezadoNotificacion.setAttribute("id", "notificaciones_encabezado");
    contenedorInformacionNotificacion = document.createElement('div');
    contenedorInformacionNotificacion.classList.add("informacion_notificacion");
    contenedorPieNotificacion = document.createElement('div');
    contenedorPieNotificacion.classList.add("pie_notificaciones_general");
    h1 = document.createElement('h1');
    textoh1 = document.createTextNode(titulo);
    h1.appendChild(textoh1);
    h1.setAttribute("id", "titulo_notificacion");
    p = document.createElement('p');
    informacionp = document.createTextNode(mensaje);
    p.appendChild(informacionp);
    p.setAttribute("id", "contenido_notificacion");
    labelBoton = document.createElement('label');
    textoBoton = document.createTextNode(boton);
    labelBoton.appendChild(textoBoton);
    labelBoton.classList.add("guardar_btn");
    labelBoton.classList.add("div5");
    labelBoton.setAttribute("id", "boton_notificacion");
    labelBoton.setAttribute("onclick", "cerrarNotificacion()");
    if(estado=="ok"){
        contenedorEncabezadoNotificacion.classList.add("notificaciones_encabezado_ok");
        labelBoton.classList.add("guardar_btn_ok");
    }
    contenedorEncabezadoNotificacion.appendChild(h1);
    contenedorInformacionNotificacion.appendChild(p);
    contenedorPieNotificacion.appendChild(labelBoton);
    if(prompt != null){
        contenedorInformacionNotificacion.classList.remove("informacion_notificacion");
        contenedorInformacionNotificacion.classList.add("informacion_notificacion_prompt");
        inputPrompt = document.createElement('input');
        inputPrompt.setAttribute('id', 'passmodal');
        inputPrompt.setAttribute('type', 'password');
        inputPrompt.setAttribute('placeholder', '*******');
        inputPrompt.classList.add('prompt');
        contenedorInformacionNotificacion.appendChild(inputPrompt);
    }
    if(fn != null){
        labelBoton.setAttribute("onclick", fn+";cerrarNotificacion();");
    }
    contenedorNotificacion.appendChild(contenedorEncabezadoNotificacion);
    contenedorNotificacion.appendChild(contenedorInformacionNotificacion);
    contenedorNotificacion.appendChild(contenedorPieNotificacion);
    contenedorGeneral.appendChild(contenedorNotificacion);
    document.getElementById("background-loading-notification").classList.remove("no-visible");
    localStorage.setItem('alerta','0');
 }

 // /***PONE UNA ALERTA DE CONFIMAR SOBRE SALIR DEL SITIO**/
 // function confirmacion() {
 //  if(localStorage.getItem('conf') != '1'){
 //  	window.onbeforeunload = function (e) {
 //  	  var e = e || window.event;
 //  	  if (e) {e.returnValue = 'Al salir perdera los datos cargados.';}
 //  	  return 'Al salir perdera los datos cargados.';
 //  	};
 // }
 // }
