(function () {
    /* Ejemplo para hacer los controladores más legibles y modulares */
    var demoApp = angular.module('demoApp'),
        DemoAppController = function ($scope) {

            $scope.datos = [
                {
                    id: 'id',
                    texto: '#'
        },
                {
                    id: 'nombre',
                    texto: 'Nombre'
        }, {
                    id: 'alta',
                    texto: 'Fecha de alta'
        }, {
                    id: 'gastos',
                    texto: 'Gasto Máximo'
        }, {
                    id: 'edad',
                    texto: 'Edad'
        }, {
                    id: 'ciudad',
                    texto: 'Lugar Nacimiento'
        }
];

            $scope.personas = [
                {
                    id: 1,
                    nombre: 'Ana',
                    alta: '2015-01-01',
                    gastos: 300,
                    edad: 24,
                    ciudad: 'Valencia'
        }, {
                    id: 2,
                    nombre: 'Pedro',
                    alta: '2013-11-01',
                    gastos: 1000,
                    edad: 34,
                    ciudad: 'Madrid'
        }, {
                    id: 3,
                    nombre: 'Joan',
                    alta: '2014-02-11',
                    gastos: 500,
                    edad: 50,
                    ciudad: 'Barcelona'
        }, {
                    id: 4,
                    nombre: 'Mikel',
                    alta: '2015-01-01',
                    gastos: 300,
                    edad: 20,
                    ciudad: 'Bilbao'
        }, {
                    id: 5,
                    nombre: 'Julia',
                    alta: '2010-01-01',
                    gastos: 3000,
                    edad: 54,
                    ciudad: 'Málaga'
        }
 ];

            $scope.ordenarPor = 'nombre';
            $scope.inverso = false;
            $scope.palabraFiltro;
            $scope.opcion = 'nombre';
            $scope.ordena = function (valor) {
                $scope.ordenarPor = valor;
                $scope.inverso = !$scope.inverso;
            };

        };

    DemoAppController.$inject = ['$scope'];
    demoApp.controller('DemoAppController', DemoAppController);
})();