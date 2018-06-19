const electron = require('electron');
const path = require('path');
const url = require('url');

// Establecer la variable Environment, para habilitar y deshabilitar el DevTools
process.env.NODE_ENV = 'development';

/*Declaramos nuestras constantes de aplicación que usaremos con Electron en nuestra aplicacion.
  Estos módulos son propios de electron y se identifican siempre con el mismo nombre
  BrowserWindow es un modulo de Chromiun para el gestor de ventanas */
const { app, BrowserWindow } = electron;

let mainWindow;
// escuchamos el evento `window-all-closed` y si no estamos en Mac cerramos la aplicación
// lo de Mac es debido a que en este SO es común que se pueda cerrar todas las ventanas sin cerrar
// la aplicación completa
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});



// Escucha que la aplicación esté lista
app.on('ready', function () {
    // Crea una ventana
    mainWindow = new BrowserWindow({
        titleBarStyle: 'hidden',  //Le damos algunas propiedad de nuestra ventana, por ejemplo ocultamos el TitleBar.
        // width: 800,
        // height: 400,
        // fullscreen: true,
        minWidth: 800,
        minHeight: 400,
        backgroundColor: '#ececec',
        show: false,
        icon: __dirname + '/favicon.ico', // Podemos ejecutar con un favicon.
        //icon: path.join(__dirname, 'assets/icons/mac/icon.icns')
    });
    // Carga el html page en un window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    // Muestra la ventana principal cuando está cargada y lista para mostrar
    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
        mainWindow.setMenu(null)
        mainWindow.maximize()
    });


    /* Emite el evento a traves de un handler cuando la ventana esta cerrada
       Liberamos los recursos referentes a la ventana
    */
    mainWindow.on('closed', function () {
        /* Des-referencia el objeto de windows, para poder instanciar y alamacenar más ventanas 
           en un array, si la aplicación dispone de mas ventanas, sabrá 
           cuando debe eliminar el elemento correspondiente.
        */
        mainWindow = null
    });

});