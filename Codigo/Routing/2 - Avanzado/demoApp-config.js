/* Rutas de nuestra aplicación */
angular.module('demoApp').config(function ($routeProvider) {
        $routeProvider
            .when(
                '/', {
                    controller: 'DemoAppController',
                    templateUrl: 'personas.html'

                }
            ).when(
                '/persona/:idPersona', {
                    controller: 'IndividualDemoAppController',
                    templateUrl: 'persona.html'

                }
            )
            .otherwise({
                redirectTo: '/'
            });
});
