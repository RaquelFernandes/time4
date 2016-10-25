'use strict';

angular.module('integradorApp')
    .factory('successInterceptor', function ($mdToast) {
        return {
            'responseSucces': function (response) {
                if (response.status == 201) {
                    $mdToast.simple().content("Inclusão realizada com sucesso").theme("success-toast")
                }
            }
        };
    });