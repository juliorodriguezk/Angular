angular.module('demoApp').filter('convierteEmoticono', [function(palabra) {
	return function (palabra){
		console.log(arguments);
		switch(palabra){
			case 'reir':
			return '( ͡° ͜ʖ ͡°)';
			case 'meh':
			return '¯\\_(ツ)_/¯';
			case 'enfadado':
			return 'ಠ_ಠ';
			case 'oso':
			return 'ʕ•ᴥ•ʔ';
			case 'confundido':
			return '(⊙_☉)';
			case 'feliz':
			return '(　＾∇＾)';
			default:
			return '';
		}
	};
}]);
