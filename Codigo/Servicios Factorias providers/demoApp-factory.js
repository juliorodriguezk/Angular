(function () {
    /* Ejemplo de factoría síncrona */
    var demoApp = angular.module('demoApp'),
        personasFactory = function ($http, servicios) {
            var personas = [],
                factory = {};

            factory.obtenerPersonas = function () {
                //return $http.get('/personas');
                return $http.get(servicios.url + servicios.port + servicios.personas);
            };

            factory.obtenerPersona = function (id) {
               //return $http.get('/personas/' + id);
                return $http.get(servicios.url + servicios.port + servicios.persona + id);
                //return $http.get('http://www.google.com/');
                //return $http.get('http://noexiste');
            };

            return factory;
        };
    personasFactory.$inject = ['$http', 'servicios'];
    demoApp.factory('personasFactory', personasFactory);

})();