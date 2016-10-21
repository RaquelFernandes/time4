'use strict';
angular.module('integradorApp')
    .controller('alunoController', function ($scope) {

        $scope.logado = true;

       $scope.listar = function() {
           $scope.usuarios = [
               {
                   matricula: '0000000000',
                   nome: 'Tawan Gabriel',
                   email: 'test@teste.com'
               },{
                   matricula: '0000000000',
                   nome: 'Raquel Fernandes',
                   email: 'test@teste.com'
               },{
                   matricula: '0000000000',
                   nome: 'Renan Fernandes',
                   email: 'test@teste.com'
               }
           ];
       };

        var init = function () {
            $scope.listar();
        };

        init();

});
