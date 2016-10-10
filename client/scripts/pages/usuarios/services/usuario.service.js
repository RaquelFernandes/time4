'use strict';
angular.module('integradorApp')
    .factory('usuarioService',['$http', function ($http) {

    var url = '/usuarios';

    var buscar = function () {
      return $http.get(url);
    };

    var consultar = function (id) {
        return $http.get(url + '/' + id);
    };

    var cadastrar = function (usuario) {
        return $http.post(url, usuario);
    };

    var alterar = function (usuario) {
        return $http.put(url, usuario);
    };

    var excluir = function (id) {
      return $http.delete(url + '/' + id);
    };

    return {
        buscar: buscar,
        consultar: consultar,
        cadastrar: cadastrar,
        alterar: alterar,
        excluir: excluir
          };
}]);
