'use strict';
angular
    .module('integradorApp')
    .controller('loginController',
        ['$scope',
            function ($scope) {


                $scope.login = "Raquel";

                $scope.pegarValores = function() {
                    alert($scope.login + "   " + $scope.senha);
                };

                var init = function() {

                };

                init();

            }]);
