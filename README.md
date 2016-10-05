# Angular
## Descarga y carga del framework (https://angularjs.org/)
- Bower, node(npm), descarga, carga desde CDN.
- Seleccionar una versión estable y no minificada para desarrollo.
- Copiar en el proyecto y crear un index.html (carga con etiqueta script)
- Definir el scope de la apluicación dónde interese, html, body ...
- https://docs.angularjs.org/api

## Vistas, directivas, filtros
### Directivas PredefinidasAngular
#### ngApp
- Sirve para definir el scope de nuestra app suele colocarse en la etiqueta html o body.
- al iniciar la app angular buscará la primera etiqueta marcada con ng-app y la inicializará si se quieren usar mas etiquetas ng-app habrá que arrancarlas "manualmente" usando la función angular.bootstrap
- No se pueden anidar aplicaciones

```
<body ng-app="miApp" [ng-strict-di="boolean"]>
...
</body>
```
- ng-strict-di Es el equivalente al use strict de JS.

#### Directivas básicas
- ngController :  Indica a la vista dónde va a actuar el controlador
- NgModel : Representa el modelo o el dato
- ngClick : Se ejecuta al recibir evento click
- ngInit: Inicializar el scope al “compilar” la directiva
- ngChange: Detecta cambios y ejecuta acción
- ngRepeat: Iterar sobre colecciones de datos
- ngShow|ngHide: Oculta o muestra.
- ngBind: Es lo mismo que {{}} o expresiones

### Expresiones
- Pueden añadirse a las vistas de dos formas
	- {{EXPRESION}}
	- <ETIQ ng-bind="EXPRESION">
-Angular evalúa la expresión y la sustituye por su valor

```
{{ 5 + 5}}  -> 10
{{nombre + " " + apellido}} -> Julio Rodríguez
```
- Si eliminamos la directiva ng-app para que esté fuera la expresión
no se evaluará
- Las expresiones pueden evaluarse dentro de cualquier etiqueta
```
<div ng-app="" ng-init="unColor='lightblue'">
	<input style="background-color:{{unColor}}" ng-model="unColor" value="{{unColor}}">
</div>
```
- Dentro de una expresión podemos usar distintos tipos se comportan como javascript
	- Números
	- Cadenas
	- Objetos
	- Arrays
- Podemos usar los operadores (+ ,- ,* ,/ ,< ,> ,== ,!= ,! ,&& ,||)
- Se pueden llamar a funciones y métodos del controlador con $scope

### Filtros
- Se usan dentro de las expresiones de la siguiente forma
```
{{EXPRESIÓN | Filtro1 |Filtro 2|…|Filtro N}}
```
- Currency : Da formato monetario al dato
- Date : Da formato de fecha al dato
	- https://docs.angularjs.org/api/ng/filter/date
- Json: Da formato string a un objeto js
- limitTo: Crea un nuevo array con un tamaño indicado o menor desde la posición que le indiquemos.
- Lowercase/uppercase : convierte a minúsculas/mayusculas
- OrderBy: ordena los datos usando una expresión y permite ordenarlos de forma inversa
- Filter: Filtra los datos de un array se puede indicar una expresión y un comparador
- https://docs.angularjs.org/api/ng/filter/filter

### Módulos
- La vista hace referencia a un módulo mediante el atributo ng-app
- Un módulo puede ser independiente o necesitar funciones de otros módulos
- Para declarar un módulo usamos angular.module (minúscula + camel case)
```
angular.module("miApp", []);
angular.module("miApp", ["necesitaModulo1", ..., "necesitaModuloN"]);
var app1 = angular.module("miApp", [ ... ]);
```
- Para indicarle a la vista que vamos a usar el módulo
```
<ETI ng-app="miApp">;
```
- Buena práctica es envolver todo el código en Expresiones autoejecutables
  para evitar ensuciar el global
```
(function(){
	'use strict'
	angular.module("miApp");
})();
```
- Aunque se suele hacer y en muchos tutoriales es práctica habitual, para evitar las colisiones de nombres de variables se debería evitar
```
	var app = angular.module("miApp", []); // Puede ocasionar conflictos
	app. ...;

	//Usar si es posible
	angular.module("miApp", []); //Declarar módulo
	angular.module("miApp"); //Acceso al módulo
```
### Controladores
- Todo módulo necesita un controlador para funcionar
- Un controlador incluye funciones variables y métodos
- En la vista hace referencia a un controlador mediante el atributo ng-controller
- Para declarar un controlador usamos angular.module(nombreModulo).controller
```
angular.module(nombreModulo).controller('NOMBRE', function($scope){});
```
- El controlador recibe al menos un parámetro llamado $scope que representa el ámbito dónde van a tener validez los métodos y variables del controlador.
- Para evitar código spagueti crear un fichero separado del módulo.
- Buenas prácticas en la nomenclatura
	- primera mayuscula
	- Nombre significativo (camel case)
	- añadir al final 'Ctrl' o 'Controller'

### Routing
- El módulo de routing permite a la aplicación definir las distintas vistas
que se pueden usar
```
http://MiWeb/index.html#Vista1
...
http://MiWeb/index.html#VistaN
```
- Es necesario descargar e incluir el script angular-route.js acorde a la version usada de angular
	- https://code.angularjs.org/X.X.X/angular-route.js

-Hay que configurar las rutas usando 
´´´
MiModulo.config(function($routeProvider){});
´´´
-Podemos dar acceso al $routeProvider a variables que se pueden usar poniendo : delante al definirse el PATH
	```
	MiModulo.controller('micontrolador', function ($scope, $routeParams){});
	```
- $routeProvider proporciona dos métodos esenciales
	- when(PATH, REDIRECCIONA_A)
		- Para definir una ruta por defecto PATH = '/'
		- Si en el controlador se ha incluido el $routeParams el path puede
		  depender de variables declaradas en el controlador sirve para agrupar redirecciones en un mismo when
		  ```
		  .when('/ruta/que/quiero/:VARIABLE', ...)
		  ```
		- Si el path cambia a "PATH" va a hacer lo indicado en REDIRECCIONA_A es un objeto que ofrece las siguientes opciones
			- template : Código html que se insertara en la ng-view
			- templateUrl : Ruta a una plantilla html
			- controller : Controlador para una ruta específica (opcional as alias)
			- controllerAs : como se va a acceder al controlador
			- redirectTo : redireccionar a otra ruta (errores / forbidden …)
			- resolve: objeto que incluye varias funciones que pueden usarse en el controlador y que se ejecutaran antes del cambio de ruta (puede ser factoria …)


	- otherwise({redirectTo: 'PATH'})
		- Si el path cambia y no está definido en ningún when redirecciona a PATH
	
- Resto de opciones y Métodos en https://docs.angularjs.org/api/ngRoute/provider/$routeProvider

- Muy importante, para que funcione la redirección se puede hacer de dos formas
	-  Haciendo uso del servicio $location
	-  Mediante las vistas o links en caso de usar un href hay que indicar la raiz de la app con # si no no funcionará es decir # es equivalente a / y desde ahí podemos construir la nueva url #CarpetaTemplates/TemplateModelo
	```
	    <a href="#Ruta/A/La/Que/Quiero/Cambiar">CAMBIA RUTA</a>
	```