var demoApp = demoApp || {};
/* Scope modification */
demoApp.directive('imageDirective', ['$interval', function ($interval) {
    return {
        restrict: 'EA',
        scope: {
            personas: '=miAttr'
        },
        link: function (scope, elem, attrs) {
            $interval(function () {
                scope.personas.pop();
            }, 1000, 4);
        },
        controller: function ($scope, $element) {}
    };
}]);