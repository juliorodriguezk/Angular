angular.module("demoApp").directive('imageDirective', function () {
    return {
        restrict: 'EAC',
        template: '<div>PRUEBA TEMPLATE</div>',
        //templateUrl: "test.html"
        //scope: true,
        //require: [‘directiva1’ , …, ‘directivaN’] 
        //compile: function (elem, attrs, trans) {},
        //link: function (elem, attrs, trans) {}
    };
});