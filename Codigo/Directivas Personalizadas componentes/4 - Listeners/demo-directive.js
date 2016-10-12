var demoApp = demoApp || {};

demoApp.directive('otraDirective', function () {
    return {
        restrict: 'EA',
        compile: function (elem, attrs, trans) {
            alert("COMPILE OTRA");
            console.log("COMPILE ARGUMENTS OTRA:: ");
            console.log(arguments);
            return {
                pre: function (scope, elem, attrs, ctrl) {
                    alert("COMPILE PRE OTRA");
                    console.log("COMPILE PRE ARGUMENTS :: ");
                    console.log(arguments);
                },
                post: function (scope, elem, attrs, ctrl) {
                    alert("COMPILE POST OTRA");
                    console.log("COMPILE POST ARGUMENTS :: ");
                    console.log(arguments);
                }
            };
        },

        controller: function ($scope, $element) {
            alert("CONTROLER OTRA");
            console.log("CONTROLER ARGUMENTS :: ");
            console.log(arguments);
        }
    };
});