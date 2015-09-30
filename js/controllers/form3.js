// Controller de la vue Form 3.
angular.module('myApp')
	.controller('form3Controller', function($scope, $location, Friends, CheckInput, SelectFactory){
		var form3 = $scope;
		form3.inputs = {};
		form3.postes = [];
		form3.pays = [];

		// Fonction d'initialisation.
		function init(){
			form3.inputs = {
				nom : '',
				pays: {
					id: 0,
					nom: 'Choisir'
				},
				tel: '',
				poste: {
					id: 1,
					nom: 'Dev'
				},
				email: ''
			};

			form3.postes = SelectFactory.getPostes();

			form3.pays = SelectFactory.getPays();
		};

		// Fonction de vérification d'un champ alpha
		form3.checkAlpha = function(){
			form3.myForm.nom.$setValidity('pattern', CheckInput.CheckAlpha(form3.inputs.nom));
		};

		// Fonction de vérification d'un champ select
		form3.checkSelect = function(){
			form3.myForm.pays.$setValidity('required', CheckInput.CheckSelect(form3.inputs.pays));
		};

		// Fonction de vérification d'un champ tél
		form3.checkPhone = function(){
			form3.myForm.tel.$setValidity('pattern', CheckInput.checkPhone(form3.inputs.tel, true));
		};

		// Fonction de vérification du champ "Email"
		form3.checkEmail = function(){
			form3.myForm.email.$setValidity('pattern', CheckInput.CheckEmail(form3.inputs.email));
		};

		// Fonction de soumission du formulaire.
		form3.submitForm = function(){
			if(form3.myForm.$valid){
				// Ajout de la personne au tableau des amis.
				Friends.addFriend({
					nom : form3.inputs.nom,
					prenom: '',
					tel: form3.inputs.tel,
					fixe: '',
					mobile: '',
					poste: form3.inputs.poste,
					pays: form3.inputs.pays,
					email: form3.inputs.email
				});

				// Remise à zéro de l'objet lié au formulaire.
				form3.inputs = {
					nom : '',
					pays: {
						id: 0,
						nom: 'Choisir'
					},
					tel: '',
					poste: {
						id: 1,
						nom: 'Dev'
					},
					email: ''
				};
			}
		};

		init();
	});