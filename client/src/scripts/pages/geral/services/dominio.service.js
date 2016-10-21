
'use strict';
angular.module('integradorApp').factory('DominioService', function ($resource) {
    return $resource('/dominio',null, {
        tipoSegmento: {
            method: 'GET',
            isArray:true,
            url: '/dominio/tipo-segmento/all'
        }
    });
});
