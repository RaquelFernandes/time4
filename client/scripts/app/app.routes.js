(function () {
	
    'use strict';

    angular.module('integradorApp').config(function($stateProvider) {

        $stateProvider
            
            .state('home', {
                url: '/home',
                templateUrl: "scripts/pages/home/view/home.html",
                controller: 'HomeController'
            })

            .state('usuarios', {
                url: '/usuarios',
                templateUrl: "scripts/pages/usuarios/view/listagem.html",
                controller: 'usuarioController'
            })

            .state('login', {
                url: '/',
                templateUrl: "scripts/pages/login/view/login.html",
                controller: 'loginController'
            })

    });

})();