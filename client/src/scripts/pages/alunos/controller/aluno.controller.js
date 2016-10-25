'use strict';
angular.module('integradorApp')
    .controller('alunoController', function ($scope, $state) {

        $scope.logado = true;

       $scope.listar = function() {
           $scope.alunos = [
               {
                   id: '01',
                   nome: 'Tawan Gabriel',
                   matricula: '1514290044',
                   email: 'tawan.gabriel10@gmail.com'
               },{
                   id: '02',
                   nome: 'Raquel Fernandes',
                   matricula: '1514290042',
                   email: 'raquelsol-10@hotmail.com'
               },{
                   id: '03',
                   nome: 'Renan Fernandes',
                   matricula: '1514290043',
                   email: 'test@teste.com'
               }
           ];
       };

        var init = function () {
            $scope.listar();
        };

        $scope.voltar = function() {
            $state.go('alunos');
        };

        var salvar  = function() {

            

        };

        init();

});
