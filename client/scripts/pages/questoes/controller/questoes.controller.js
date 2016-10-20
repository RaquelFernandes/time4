'use strict';
angular.module('integradorApp')
    .controller('questoesController', function ($scope) {

        $scope.questoesLista = [
          {
            pergunta:"Qual a raiz quadrada de 4?",
            resposta:"Raiz quadrada de 4 é 2",
          },
          {
            pergunta:"O que é uma classe?",
            resposta:"Abstração do mundo real para a programação",
          },
          {
            pergunta:"Qual a derivada de x²?",
            resposta:"A respostá é 2x",
          }
        ];

        var init = function () {

        };

        init();

    });
