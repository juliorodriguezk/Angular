var demoApp = demoApp || {};

demoApp.controller('DemoAppCtrl', ['$scope', function ($scope) {
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

    $scope.anade = function () {
        $scope.personas.push({
                nombre: 'Julia',
                alta: '2010-01-01',
                gastos: 3000,
                edad: 54,
                ciudad: 'Málaga'
            }

        );
    };
}]);