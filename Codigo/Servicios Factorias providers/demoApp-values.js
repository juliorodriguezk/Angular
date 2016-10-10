(function () {
    /* cambio factoría por servicio */
    var demoApp = angular.module('demoApp');

    demoApp.value('parametrosTabla', [
        {
            id: 'id',
            texto: '#'
        },
        {
            id: 'nombre',
            texto: 'Nombre'
        }, {
            id: 'alta',
            texto: 'Fecha de alta'
        }, {
            id: 'gastos',
            texto: 'Gasto Máximo'
        }, {
            id: 'edad',
            texto: 'Edad'
        }, {
            id: 'ciudad',
            texto: 'Lugar Nacimiento'
        }
]);
    demoApp.value('textosVistas', {
        personas: {
            filtro: "Filtro:",
            detalles: "Detalles",
            informacion: "Ver detalles"
        },
        persona: {
            datos: "Datos de la persona:",
            nombre: "",
            alta: "Fecha de alta:",
            gastos: "Gasto Máximo:",
            edad: "Edad:",
            ciudad: "Lugar Nacimiento:",
            volver: "Volver"
        }
    });
})();