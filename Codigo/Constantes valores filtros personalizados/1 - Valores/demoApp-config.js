angular.module('demoApp').config(['valor', 'datosApp',function(valor, datosApp) {
	console.log('DATOS_APP disponible en configuración??');
	console.log(datosApp);
    console.log (valor);
	valor = 0.5;
	datosApp.version = 0.2;
}]);
