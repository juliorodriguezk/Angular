angular.module('appName').decorator('name', ['$provide', function($provide) {
    $provide.decorator('name', ['$delegate', function($delegate) {
        return $delegate;
    }]);
}]);
