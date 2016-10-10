/**
 * Created by Basis Tecnologia on 19/05/2016.
 */
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
