(function () {
    /* cambio factoría por servicio */
    var demoApp = angular.module('demoApp'),
        DemoAppController = function ($scope, $http, personasFactory, parametrosTabla, textosVistas) {
            $scope.textos = null;

            $scope.datos = null;

            $scope.personas = [];

            function init() {
                $scope.textos = textosVistas.personas;
                $scope.datos = parametrosTabla;
                personasFactory.obtenerPersonas().success(function (personas) {
                    $scope.personas = personas;
                }).error(function (data, status, headers, config) {
                    console.log("Error");
                });

            }

            init();

            $scope.ordenarPor = 'nombre';
            $scope.inverso = false;
            $scope.palabraFiltro = '';
            $scope.opcion = 'nombre';
            $scope.ordena = function (valor) {
                $scope.ordenarPor = valor;
                $scope.inverso = !$scope.inverso;
            };

        };

    DemoAppController.$inject = ['$scope', '$http', 'personasFactory', 'parametrosTabla', 'textosVistas'];
    demoApp.controller('DemoAppController', DemoAppController);
})();