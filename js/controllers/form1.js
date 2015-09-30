// Controller de la vue Form 1.
angular.module('myApp')
	.controller('form1Controller', function($scope, $location, Friends, CheckInput){
		var form1 = $scope;
		form1.inputs = {};

		// Fonction d'initialisation du modèle.
		function init(){
			form1.inputs = {
				nom : '',
				prenom : '',
				tel : ''
			};
		};

		// Fonction de vérification d'un champ alpha
		form1.checkAlpha = function(id){
			switch(id){
				case 'nom':
					form1.myForm.nom.$setValidity('pattern', CheckInput.CheckAlpha(form1.inputs.nom));
					break;
				case 'prenom':
					form1.myForm.prenom.$setValidity('pattern', CheckInput.CheckAlpha(form1.inputs.prenom));
					break;
			}
		};

		// Fonction de vérification d'un champ tél
		form1.checkPhone = function(){
			console.log(this);
			form1.myForm.tel.$setValidity('pattern', CheckInput.CheckPhone(form1.inputs.tel, true));
		};

		// Fonction de soumission du formulaire.
		form1.submitForm = function(){
			if(form1.myForm.$valid){
				// Ajout de la personne au tableau des amis.
				Friends.addFriend({
					nom : form1.inputs.nom,
					prenom: form1.inputs.prenom,
					tel: form1.inputs.tel,
					fixe: '',
					mobile: '',
					poste: {
						id: 0,
						nom: ''
					},
					pays: {
						id: 0,
						nom: ''
					},
					email: ''
				});

				// Remise à zéro de l'objet lié au formulaire.
				form1.inputs = {
					nom : '',
					prenom : '',
					tel : ''
				};

				// Réinitialisation de l'état du formulaire.
				form1.myForm.$setPristine();
			}
		};

		init();
	});