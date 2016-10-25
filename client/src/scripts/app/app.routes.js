(function () {

  'use strict';

  angular.module('integradorApp')
    .config(ConfigRoutes);

  ConfigRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function ConfigRoutes($stateProvider, $urlRouterProvider) {

   // $urlRouterProvider.when('', '/inicio');
    //$urlRouterProvider.when('/', '/inicio');

    $stateProvider

      .state('login', {
        url: "/",
        templateUrl: "scripts/app/pages/login/view/login.html",
        controller: 'loginController'
      })

      .state('home', {
        url: '/home',
        templateUrl: "scripts/pages/home/view/home.html",
        controller: 'HomeController'
      })

      .state('alunos', {
        url: '/alunos',
        templateUrl: "scripts/pages/alunos/view/listagemAluno.html",
        controller: 'alunoController'
      })

        .state('cadastrarAlunos', {
          url: '/alunos/cadastrar',
          templateUrl: "scripts/pages/alunos/view/cadastrarAluno.html",
          controller: 'alunoController'
        })

      .state('professores', {
        url: '/professores',
        templateUrl: "scripts/pages/professores/view/listagemProfessor.html",
        controller: 'professorController'
      })

      .state('questoesLista', {
        url: '/questoes',
        templateUrl: "scripts/pages/questoes/view/listagem.html",
        controller: 'questoesController'
      })

      .state('questoesInserir', {
        url: '/questoes/inserir',
        templateUrl: "scripts/pages/questoes/view/inserir.html",
        controller: 'questoesController'
      });

  }

})();
