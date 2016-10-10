(function () {
    /* cambio factoría por servicio */
    var demoApp = angular.module('demoApp');

    demoApp.filter('euro', function () {


        return function (valor) {
            var result;

            if (isNaN(valor)) {
                result = valor;

            } else {

                result = valor + " €";

            }
            return result;
        };

    });
})();