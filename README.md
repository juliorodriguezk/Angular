# Angular
## Descarga y carga del framework (https://angularjs.org/)
- 
- Bower, node(npm), descarga, carga desde CDN.
- Seleccionar una versión estable y no minificada para desarrollo.
- Copiar en el proyecto y crear un index.html (carga con etiqueta <script>)
- Definir el scope de la apluicación dónde interese, html, body ...
- https://docs.angularjs.org/api

## Vistas, directivas, filtros

### Directivas PredefinidasAngular
#### ngApp
- Sirve para definir el scope de nuestra app suele colocarse en la etiqueta html o body.
- al iniciar la app angular buscará la primera etiqueta marcada con ng-app y la inicializará si se quieren usar mas etiquetas ng-app habrá que arrancarlas "manualmente" usando la función angular.bootstrap
- No se pueden anidar aplicaciones

```
<body ng-app="miApp"
  [ng-strict-di="boolean"]>
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