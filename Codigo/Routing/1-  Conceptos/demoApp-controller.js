/* Ejemplo para hacer los controladores más legibles y modulares */
    DemoAppController = function ($scope) {
    	$scope.nombreController = 'DemoAppController';

    };

    DemoAppController.$inject = ['$scope'];
    angular.module('demoApp').controller('DemoAppController', DemoAppController);
