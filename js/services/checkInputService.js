// Factory de traitement des champs.
angular.module('myApp')
	.factory('CheckInput', function(){
		var checkInputFactory = {};

		// N.B : Dans chaque fonction, la ligne pattern.test :
		//	- renvoie true si la valeur correspond au pattern
		//	- renvoie false dans les autres cas.

		// Fonction de vérification d'un numéro de téléphone mobile.
		function checkMobile(val){
			var pattern = /^0(6|7)\s*[\d]{2}\s*[\d]{2}\s*[\d]{2}\s*[\d]{2}$/;

			console.log('CheckMobile - Test de la valeur ' + val + ' : ' + pattern.test(val));

			return pattern.test(val);
		};

		// Fonction de vérification d'un numéro de téléphone fixe.
		function checkFixe(val){
			var pattern = /^0(1|2|3|4|5|8|9)\s*[\d]{2}\s*[\d]{2}\s*[\d]{2}\s*[\d]{2}$/;

			console.log('CheckFixe - Test de la valeur ' + val + ' : ' + pattern.test(val));

			return pattern.test(val);
		};

		checkInputFactory.CheckFixe = function(val){
			return checkFixe(val);
		}

		checkInputFactory.CheckMobile = function(val){
			return checkMobile(val);
		}

		// Fonction de vérification d'un numéro de téléphone.
		// Le paramètre checkBoth permet de définir si le test doit être effectué
		// sur le pattern fixe ET mobile.
		checkInputFactory.CheckPhone = function(val, checkBoth){
			// Pattern permettant de définir si le numéro doit être testé en fixe ou mobile.
			var patternMobile = /^0(6|7).*$/;

			// Test des deux types de numéro si demandé.
			if(checkBoth){
				return checkMobile(val) || checkFixe(val);
			}

			// Si type de numéro == mobile, on teste par rapport au pattern mobile.
			if(patternMobile.test(val)){
				return checkMobile(val);
			}

			// Par défaut, on teste le pattern de fixe.
			return checkFixe(val);
		};

		// Fonction de vérification d'un champ alphabétique.
		checkInputFactory.CheckAlpha = function(val){
			var pattern = /^[^\d]+(\s*[^\d]+)*$/;

			console.log('CheckAlpha - Test de la valeur ' + val + ' : ' + pattern.test(val));

			return pattern.test(val);
		};

		// Fonction de vérification d'un champ numérique.
		checkInputFactory.CheckNum = function(val){
			var pattern = /^[\d]+$/;

			console.log('CheckNum - Test de la valeur ' + val + ' : ' + pattern.test(val));

			return pattern.test(val);
		};

		// Fonction de vérification d'un champ email.
		checkInputFactory.CheckEmail = function(val){
			var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

			console.log('CheckEmail - Test de la valeur ' + val + ' : ' + pattern.test(val));

			return pattern.test(val);
		};

		// Fonction de vérification d'un champ de type liste déroulante.
		checkInputFactory.CheckSelect = function(val){
			if(val.id === 0){
				return false;
			}

			return true;
		};

		return checkInputFactory;
	});