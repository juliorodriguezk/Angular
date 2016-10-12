var demoApp = demoApp || {};

demoApp.directive('imageDirective', function () {
    return {
        restrict: 'EA',
        template: function (elem, attrs) {
                console.log(elem);
                console.log(attrs);
                //return '<div>' + attrs.miPrimerAtributo + '</div>';
                //elem.append('<div>').text(attrs.miPrimerAtributo);
                //return '<div>' + attrs.miTercerAtributo + '</div>';
            }
        
    };
});