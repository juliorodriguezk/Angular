(function () {
    /* Ejemplo de servicio síncrono */
    var demoApp = angular.module('demoApp'),
        personasService = function () {
            var personas = [
                {
                    id: 1,
                    nombre: 'Ana',
                    alta: '2015-01-01',
                    gastos: 300,
                    edad: 24,
                    ciudad: 'Valencia',
                    imagen: 'mujer.png'
                }, {
                    id: 2,
                    nombre: 'Pedro',
                    alta: '2013-11-01',
                    gastos: 1000,
                    edad: 34,
                    ciudad: 'Madrid',
                    imagen: 'hombre.png'
        }, {
                    id: 3,
                    nombre: 'Joan',
                    alta: '2014-02-11',
                    gastos: 500,
                    edad: 50,
                    ciudad: 'Barcelona',
                    imagen: 'hombre.png'
        }, {
                    id: 4,
                    nombre: 'Mikel',
                    alta: '2015-01-01',
                    gastos: 300,
                    edad: 20,
                    ciudad: 'Bilbao',
                    imagen: 'hombre.png'
        }, {
                    id: 5,
                    nombre: 'Julia',
                    alta: '2010-01-01',
                    gastos: 3000,
                    edad: 54,
                    ciudad: 'Málaga',
                    imagen: 'mujer.png'
        }
 ];

            this.obtenerPersonas = function () {
                return personas;
            };

            this.obtenerPersona = function (id) {
                var i = 0,
                    len = 0;
                for (i, len = personas.length; i < len; i++) {
                    if (personas[i].id === parseInt(id)) {
                        return personas[i];
                    }
                }
                return {};
            };
        };

    demoApp.service('personasService', personasService);

})();