angular.module('demoApp').controller('DemoAppCtrl', ['$scope', 'valor', 'datosApp', function ($scope, valor, datosApp) {
        $scope.nombre = "Julio";
        $scope.apellido = "Rodríguez";
        $scope.frase = "Escribe una frase";
        console.log("Hay que inyectarlo en un controlador para usarlo");
}]);
