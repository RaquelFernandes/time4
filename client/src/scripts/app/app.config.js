(function () {
  'use strict';

  angular.module('integradorApp')
    .config(Config);

  Config.$inject = ['$logProvider'];

  function Config($logProvider) {
    $logProvider.debugEnabled(true);
  }

})();
