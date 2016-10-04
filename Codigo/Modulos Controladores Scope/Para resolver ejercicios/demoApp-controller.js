var demoApp = demoApp || {};
console.log(demoApp);
/* Implementación de los filtrosI*/
demoApp.controller('DemoAppCtrl', ['$scope', function ($scope) {
    $scope.datos = [{
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
        }];

    $scope.personas = [{
        nombre: 'Ana',
        alta: '2015-01-01',
        gastos: 300,
        edad: 24,
        ciudad: 'Valencia'
        }, {
        nombre: 'Pedro',
        alta: '2013-11-01',
        gastos: 1000,
        edad: 34,
        ciudad: 'Madrid'
        }, {
        nombre: 'Joan',
        alta: '2014-02-11',
        gastos: 500,
        edad: 50,
        ciudad: 'Barcelona'
        }, {
        nombre: 'Mikel',
        alta: '2015-01-01',
        gastos: 300,
        edad: 20,
        ciudad: 'Bilbao'
        }, {
        nombre: 'Julia',
        alta: '2010-01-01',
        gastos: 3000,
        edad: 54,
        ciudad: 'Málaga'
        }];

    $scope.ordenarPor = 'nombre';
    $scope.inverso = false;
    $scope.palabraFiltro;
    $scope.opcion = 'nombre';
    $scope.ordena = function (valor) {
        $scope.ordenarPor = valor;
        $scope.inverso = !$scope.inverso;
    };

    }]);