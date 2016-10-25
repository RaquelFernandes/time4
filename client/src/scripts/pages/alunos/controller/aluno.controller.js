'use strict';
angular.module('integradorApp')
    .controller('alunoController', function ($scope) {

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

       $scope.prova = [
           {
               aluno: 'Raquel',
               matricula: '1514290042',
               questoes: [
                   {
                        questao: '01'
                   },{
                       questao: '02'
                   },{
                       questao: '03'
                   }
               ]
            },{
               aluno: 'Tawan',
               matricula: '1514290042',
               questoes: [
                   {
                       questao: '01'
                   },{
                       questao: '02'
                   },{
                       questao: '03'
                   }
               ]
           }
       ];

        var init = function () {
            $scope.listar();
        };

        init();

});
