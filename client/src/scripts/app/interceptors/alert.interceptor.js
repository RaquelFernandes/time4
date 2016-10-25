'use strict';
/**
 * Interceptor para recuperar as alertas enviadas pelo servidor em cabeçalhos http
 */
angular.module('integradorApp')
    .factory('alertInterceptor', function ($q) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-integradorApp-alert');
                if (angular.isString(alertKey)) {
                    // Tratar alertas
                }
                return response;
            }
        };
    });