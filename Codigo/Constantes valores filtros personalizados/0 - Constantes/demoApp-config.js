angular.module('demoApp').config(['DATOS_APP', 'VALOR',function(DATOS, VALOR) {
	console.log('DATOS_APP disponible en configuración??');
	console.log(DATOS);
    console.log (VALOR);
	VALOR = 0.5;
	DATOS.version = 0.2;
}]);
