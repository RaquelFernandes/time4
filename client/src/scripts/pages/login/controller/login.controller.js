'use strict';
angular.module('integradorApp')
    .controller('loginController', function ($scope, $state) {

                $scope.login = null;
                $scope.logado = false;

                $scope.acessarSistema = function() {
                    $state.go("home");
                };

                var init = function() {

                };

                init();

            });
