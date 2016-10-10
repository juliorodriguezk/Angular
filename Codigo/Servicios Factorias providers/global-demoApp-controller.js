(function () {
    /* cambio factoría por servicio */
    var demoApp = angular.module('demoApp'),
        GlobalDemoAppController = function ($scope, configuracionApp) {
            $scope.configuracion = configuracionApp;
        };
    GlobalDemoAppController.$inject = ['$scope', 'configuracionApp'];
    demoApp.controller('GlobalDemoAppController', GlobalDemoAppController);
})();