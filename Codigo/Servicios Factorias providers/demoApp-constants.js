(function () {
    /* cambio factoría por servicio */
    var demoApp = angular.module('demoApp');

    demoApp.constant('configuracionApp', {
        nombre: "Formación Angular",
        version: "v1.0"
    });

    demoApp.constant('servicios', {
        url: "http://localhost",
        port: ":3000",
        personas: "/personas",
        persona: "/personas/"
    });

})();