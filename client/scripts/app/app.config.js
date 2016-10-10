(function () {
    'use strict';

    angular.module('integradorApp')
        .config(function ($httpProvider, $locationProvider,  httpRequestInterceptorCacheBusterProvider) {
            $httpProvider.defaults.xsrfCookieName = 'CSRF-TOKEN';
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
            //Cache everything except rest api requests
            httpRequestInterceptorCacheBusterProvider.setMatchlist([/.*api.*/, /.*protected.*/], true);
            $httpProvider.interceptors.push('errorHandlerInterceptor');
            $httpProvider.interceptors.push('authExpiredInterceptor');
            $httpProvider.interceptors.push('alertInterceptor');
        })

        .config(['$urlMatcherFactoryProvider', function($urlMatcherFactory) {
            $urlMatcherFactory.type('boolean', {
                name : 'boolean',
                decode: function(val) { return val == true ? true : val == "true" ? true : false },
                encode: function(val) { return val ? 1 : 0; },
                equals: function(a, b) { return this.is(a) && a === b; },
                is: function(val) { return [true,false,0,1].indexOf(val) >= 0 },
                pattern: /bool|true|0|1/
            });
        }])

        .config(function($mdThemingProvider){
            $mdThemingProvider.theme("success-toast");
            $mdThemingProvider.theme('default').primaryPalette('green');
        })

        .config(function($compileProvider) {
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|ftp|blob):|data:image\//);
        })

        .config(function($mdDateLocaleProvider) {

            var myShortMonths = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

            $mdDateLocaleProvider.shortMonths = myShortMonths;

            $mdDateLocaleProvider.shortDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
            $mdDateLocaleProvider.firstDayOfWeek = 1;

            $mdDateLocaleProvider.monthHeaderFormatter = function(date) {
                return myShortMonths[date.getMonth()] + ' ' + date.getFullYear();
            };

            $mdDateLocaleProvider.weekNumberFormatter = function(weekNumber) {
                return 'Semana ' + weekNumber;
            };

        });

})();
