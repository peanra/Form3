// Controller de la vue Form 2.
angular.module('myApp')
	.controller('form2Controller', function($scope, $location, Friends, CheckInput, SelectFactory){
		var form2 = $scope;
		form2.inputs = {};
		form2.postes = [];

		// Fonction d'initialisation du modèle.
		function init(){
			form2.inputs = {
				nom: '',
				fixe: '',
				mobile: '',
				poste: {
					id: 1,
					nom: 'Dev'
				},
				email: ''
			};

			form2.postes = SelectFactory.getPostes();
		};

		// Fonction de vérification d'un champ alpha
		form2.checkAlpha = function(){
			form2.myForm.nom.$setValidity('pattern', CheckInput.CheckAlpha(form2.inputs.nom));
		};

		// Fonction de vérification d'un champ tél
		form2.checkPhone = function(id){
			switch(id){
				case 'fixe':
					form2.myForm.fixe.$setValidity('pattern', CheckInput.CheckFixe(form2.inputs.fixe, false));
					break;
				case 'mobile':
					form2.myForm.mobile.$setValidity('pattern', CheckInput.CheckMobile(form2.inputs.mobile, false));
					break;
			}
		};

		// Fonction de vérification d'un champ email
		form2.checkEmail = function(){
			form2.myForm.email.$setValidity('pattern', CheckInput.CheckEmail(form2.inputs.email));
		};

		// Fonction de soumission du formulaire.
		form2.submitForm = function(){
			if(form2.myForm.$valid){
				// Ajout de la personne au tableau des amis.
				Friends.addFriend({
					nom : form2.inputs.nom,
					prenom: '',
					tel: '',
					fixe: form2.inputs.fixe,
					mobile: form2.inputs.mobile,
					poste: form2.inputs.poste,
					pays: {
						id: 0,
						nom: ''
					},
					email: form2.inputs.email
				});

				// Remise à zéro de l'objet lié au formulaire.
				form2.inputs = {
					nom: '',
					fixe: '',
					mobile: '',
					poste: {
						id: 1,
						nom: 'Dev'
					},
					email: ''
				};

				// Réinitialisation de l'état du formulaire.
				form2.myForm.$setPristine();
			}
		};

		init();
	});