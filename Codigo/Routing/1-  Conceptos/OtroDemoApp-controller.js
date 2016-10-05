/* Ejemplo para hacer los controladores más legibles y modulares */
/*OtroDemoAppController = function ($scope) {
   	$scope.nombreController = 'OtroDemoAppController';
};
OtroDemoAppController.$inject = ['$scope'];
angular.module('demoApp').controller('OtroDemoAppController', OtroDemoAppController);
*/ /*OtroDemoAppController = function () {
    	this.nombreController = 'OtroDemoAppController';
};
DemoAppController.$inject = ['$scope'];
angular.module('demoApp').controller('OtroDemoAppController', OtroDemoAppController);
*/
angular.module('demoApp').controller('OtroDemoAppController', ['$scope', function ($scope) {
   	$scope.nombreController = 'OtroDemoAppController';
}]);
