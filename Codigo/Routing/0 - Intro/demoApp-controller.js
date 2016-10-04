/* Ejemplo para hacer los controladores más legibles y modulares */
    DemoAppController = function ($scope) {
        $scope.datos = [];
        $scope.personas = [];

    };

    DemoAppController.$inject = ['$scope'];
    angular.module('demoApp').controller('DemoAppController', DemoAppController);
