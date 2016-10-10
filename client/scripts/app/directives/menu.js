angular.module('integradorApp')
    .directive('menuLink', function() {
        return {
            scope: {
                section: '='
            },
            templateUrl: 'scripts/app/templates/menu-link.tmpl.html',
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
