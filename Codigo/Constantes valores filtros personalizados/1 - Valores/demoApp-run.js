angular.module('demoApp').run(['valor', 'datosApp',function(valor, datosApp) {
	console.log('datosApp disponible en ejecucion??');
	console.log(datosApp);
}]);
