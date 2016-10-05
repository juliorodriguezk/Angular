/* Rutas de nuestra aplicación */
   angular.module('demoApp').config(function ($routeProvider) {
        $routeProvider
            .when(
                '/', {
                    templateUrl: 'selector.html',
                }
            ).when(
                '/Pais/spain', {
                    templateUrl: 'spain.html'
                }
            ).when(
                '/Pais/france', {
                    templateUrl: 'france.html'
                }
            ).when(
                '/Pais/uk', {
                    templateUrl: 'uk.html'
                }
            )
            .when(
                '/Pais/italy', {
                    templateUrl: 'italy.html',
                    controller :'OtroDemoAppController',
                    //controllerAs: 'con'
                }
            ).when(
                '/Pais/germany', {
                    templateUrl: 'germany.html',
                    resolve:{
                        ejecuta:function(){alert("Ejecuto antes de cambiar");
                    }
                }
                }
            )
            .when(
                '/Pais/otro', {
                    redirectTo: '/Pais/spain'
                }
            )
            .otherwise({
                redirectTo: '/'
            });
    });