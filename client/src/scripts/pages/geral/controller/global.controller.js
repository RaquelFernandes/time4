'use strict';
angular.module('integradorApp')
    .controller("GlobalController", function($scope, $state){

        var vm = this;

        $state.go("inicio");

});
