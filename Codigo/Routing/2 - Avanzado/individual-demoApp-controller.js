(function () {
    /* Añadir ID de persona */
    var IndividualDemoAppController = function ($scope, $routeParams) {

            var idPersona = $routeParams.idPersona;

            $scope.datosPersona = null;

            function inicializa() {
                var i = 0,
                    len = 0;
                // inicializa los datos de la persona

                for (i, len = $scope.personas.length; i < len; i++) {
                    if ($scope.personas[i].id === parseInt(idPersona)) {
                        $scope.datosPersona = $scope.personas[i];
                        break;
                    }

                }
                console.log($scope.datosPersona);
            }

            $scope.personas = [
                {
                    id: 1,
                    nombre: 'Ana',
                    alta: '2015-01-01',
                    gastos: 300,
                    edad: 24,
                    ciudad: 'Valencia',
                    imagen: 'mujer.png'
                }, {
                    id: 2,
                    nombre: 'Pedro',
                    alta: '2013-11-01',
                    gastos: 1000,
                    edad: 34,
                    ciudad: 'Madrid',
                    imagen: 'hombre.png'
        }, {
                    id: 3,
                    nombre: 'Joan',
                    alta: '2014-02-11',
                    gastos: 500,
                    edad: 50,
                    ciudad: 'Barcelona',
                    imagen: 'hombre.png'
        }, {
                    id: 4,
                    nombre: 'Mikel',
                    alta: '2015-01-01',
                    gastos: 300,
                    edad: 20,
                    ciudad: 'Bilbao',
                    imagen: 'hombre.png'
        }, {
                    id: 5,
                    nombre: 'Julia',
                    alta: '2010-01-01',
                    gastos: 3000,
                    edad: 54,
                    ciudad: 'Málaga',
                    imagen: 'mujer.png'
        }
 ];
            inicializa();

        };

    IndividualDemoAppController.$inject = ['$scope', '$routeParams'];
    angular.module('demoApp').controller('IndividualDemoAppController', IndividualDemoAppController);
})();