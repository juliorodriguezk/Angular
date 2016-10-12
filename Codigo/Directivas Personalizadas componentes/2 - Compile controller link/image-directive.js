var demoApp = demoApp || {};

demoApp.directive('imageDirective', function () {
    return {
        restrict: 'EA',
        /*template: function (elem, attrs) {
            console.log(elem);
            console.log(attrs);
            return '<div>' + attrs.miPrimerAtributo + '</div>';
            //elem.append('<div>').text(attrs.miPrimerAtributo);
            //return '<div>' + attrs.miTercerAtributo + '</div>';
        },*/
        //templateUrl: 'directiva.html',
        templateUrl: function (elem, attrs) {
            var url = 'directiva';
            switch (attrs.miPrimerAtributo) {
            case 'A':
            case 'B':
            case 'C':
                url = url + attrs.miPrimerAtributo;
                break;
            default:
                url = url + '';
            }
            return url + '.html';
        },
        compile: function (elem, attrs, trans) {
            alert("COMPILE");
            console.log("COMPILE ARGUMENTS :: ");
            console.log(arguments);
          /*
            return {
                pre: function (scope, elem, attrs, ctrl) {
                    alert("COMPILE PRE");
                    console.log("COMPILE PRE ARGUMENTS :: ");
                    console.log(arguments);
                },
                post: function (scope, elem, attrs, ctrl) {
                    alert("COMPILE POST");
                    console.log("COMPILE POST ARGUMENTS :: ");
                    console.log(arguments);
                }
            };*/
            
        },/*

               link: function (scope, elem, attrs, controller) {
                    alert("LINK");
                    console.log("LINK ARGUMENTS :: ");
                    console.log(arguments)
            },*/
        
                controller: function ($scope, $element) {
                    alert("CONTROLER");
                    console.log("CONTROLER ARGUMENTS :: ");
                    console.log(arguments);
                }
    };
});