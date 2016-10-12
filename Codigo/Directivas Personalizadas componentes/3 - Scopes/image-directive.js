var demoApp = demoApp || {};
/* Scope modification */
demoApp.directive('imageDirective', function () {
    return {
        restrict: 'EA',
        templateUrl: function (elem, attrs) {
            var url = 'directiva';
            switch (attrs.miPrimerAtributo) {
            case 'A':
            case 'B':
            case 'C':
                url = url + attrs.miPrimerAtributo;
                break;
            default:
                url = url + '';
            }
            return url + '.html';
        },
       //scope: false,
       //scope: true,
       //scope: {},
       //scope: {
            //personas: '=miAttr'
            //personas: '@miAttr'
            //probar one way data binding
            //personas: '<miAttr'

        //},


        link: function (scope, elem, attrs) {
            console.log(scope);
        },
        controller: function ($scope, $element) {
            $scope.anade = function () {
            console.log(typeof $scope.personas);

                if ($scope.personas !== undefined && $scope.personas.pop) {
                    $scope.personas.pop();
                } else {
                    $scope.personas = "NO EXISTE EN EL SCOPE personas o no es un array";
                }
            };
            console.log($scope.personas);
        }
    };
});