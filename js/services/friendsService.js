// Factory permettant la récupération des données des listes déroulantes.
angular.module('myApp')
	.factory('Friends', function(){
		var friendsFactory = {};

		// Données de la liste déroulante "Poste".
		friendsFactory.defaultFriends = [{
			nom : 'TrucMuche',
			prenom: 'Chose',
			tel: '01 23 45 67 89',
			fixe: '01 23 45 67 89',
			mobile: '06 12 34 57 89',
			poste: {
				id: 1,
				nom: 'Dev'
			},
			pays: {
				id: 1,
				nom: 'France'
			},
			email: 'chose.trucmuche@bla.com'
		}];

		friendsFactory.friends = [];

		function init(){
			var friendsStored = localStorage.getItem('friends');

			if(localStorage.getItem('friends') !== null){
				friendsFactory.friends = JSON.parse(friendsStored);
			}
			else{
				friendsFactory.friends = friendsFactory.defaultFriends;
				localStorage.setItem('friends', JSON.stringify(friendsFactory.friends));
			}
		}

		// Fonction de récupération des données de la liste déroulante "Postes"
		friendsFactory.getFriends = function(){
			return friendsFactory.friends;
		};

		// Fonction de récupération des données de la liste déroulante "Pays".
		friendsFactory.addFriend = function(friend){			
			friendsFactory.friends.push(friend);
			localStorage.setItem('friends', JSON.stringify(friendsFactory.friends));
		}

		init();

		return friendsFactory;
	});