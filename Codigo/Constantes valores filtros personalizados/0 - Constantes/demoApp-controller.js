angular.module('demoApp').controller('DemoAppCtrl', ['$scope', 'DATOS_APP', 'VALOR', function ($scope, DATOS, VALOR) {
        $scope.nombre = "Julio";
        $scope.apellido = "Rodríguez";
        $scope.frase = "Escribe una frase";
}]);
