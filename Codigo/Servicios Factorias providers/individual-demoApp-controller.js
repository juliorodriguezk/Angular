(function () {
    /* Extraer del controlador la lógica de los datos */
    var demoApp = angular.module('demoApp'),
        IndividualDemoAppController = function ($scope, $routeParams, personasFactory, textosVistas) {

            var idPersona = $routeParams.idPersona;
            $scope.textos = null;

            $scope.datosPersona = null;

            function init() {
                $scope.textos = textosVistas.persona;
                // inicializa los datos de la persona
                personasFactory.obtenerPersona(idPersona).success(function (persona) {
                    console.log(arguments);
                    $scope.datosPersona = persona;
                }).error(function (data, status, headers, config) {
                    console.log(arguments);
                });
            }

            init();

        };

    IndividualDemoAppController.$inject = ['$scope', '$routeParams', 'personasFactory', 'textosVistas'];

    demoApp.controller('IndividualDemoAppController', IndividualDemoAppController);
})();