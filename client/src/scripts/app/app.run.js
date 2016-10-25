(function () {

  angular.module('integradorApp')
    .run(RunApp);

  RunApp.$inject = ['$rootScope', '$log'];

  function RunApp($rootScope, $log) {

    $log.debug('Run ...');

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      $log.debug('Mudança de rota ... de << %s >> para << %s >>', fromState.name, toState.name);
    });
  }
})();

