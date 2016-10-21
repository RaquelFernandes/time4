angular.module('integradorApp')
    .directive('menu', function() {
        return {
            scope: {
                section: '='
            },
            templateUrl: 'scripts/app/directives/templates/menu.html',
            link: function($scope, $element) {
                var controller = $element.parent().controller();

                $scope.isSelected = function() {
                    return controller.isSelected($scope.section);
                };

                $scope.focusSection = function() {
                    controller.autoFocusContent = true;
                };
            }
        };
    });
