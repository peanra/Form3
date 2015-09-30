// Factory permettant la récupération des données des listes déroulantes.
angular.module('myApp')
	.factory('SelectFactory', function(){
		var selectFactory = {};

		// Données de la liste déroulante "Poste".
		selectFactory.postes = [{
			nom : 'Dev',
			id: 1
		},
		{
			nom: 'CP',
			id: 2
		},
		{
			nom: 'MOA',
			id: 3
		}];

		// Données de la liste déroulante "Pays".
		selectFactory.pays = [{
			nom: 'Choisir',
			id: 0
		},
		{
			nom: 'France',
			id: 1
		},
		{
			nom: 'Angleterre',
			id: 2
		},
		{
			nom: 'Algérie',
			id: 3
		}];

		// Fonction de récupération des données de la liste déroulante "Postes"
		selectFactory.getPostes = function(){
			return selectFactory.postes;
		};

		// Fonction de récupération des données de la liste déroulante "Pays".
		selectFactory.getPays = function(){
			return selectFactory.pays;
		}

		return selectFactory;
	});