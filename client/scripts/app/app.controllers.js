'use strict';
angular.module('integradorApp')
    .controller('MenuController', function($mdSidenav) {
      var self = this;

            self.toggleMenu= function() {
                $mdSidenav('left').toggle();
            };
            self.closeMenu= function() {
              $mdSidenav('left').close();
            }

            var sections = [];
            sections.push({
                    name: 'License',
                    url:  'license',
                    type: 'link',

                    // Add a hidden section so that the title in the toolbar is properly set
                    hidden: true
            });

            var menu = {
                    sections: sections,

                    selectSection: function(section) {
                            self.openedSection = section;
                    },
                    toggleSelectSection: function(section) {
                            self.openedSection = (self.openedSection === section ? null : section);
                    },
                    isSectionSelected: function(section) {
                            return self.openedSection === section;
                    },

                    selectPage: function(section, page) {
                            self.currentSection = section;
                            self.currentPage = page;
                    },
                    isPageSelected: function(page) {
                            return self.currentPage === page;
                    }
            };
            self.menu = menu;

            // Methods used by menuLink and menuToggle directives
            self.isOpen = isOpen;
            self.isSelected = isSelected;
            self.toggleOpen = toggleOpen;
            self.autoFocusContent = false;

            function isSelected(page) {
                    return menu.isPageSelected(page);
            }

            function isSectionSelected(section) {
                    var selected = false;
                    var openedSection = menu.openedSection;
                    if(openedSection === section){
                            selected = true;
                    }
                    else if(section.children) {
                            section.children.forEach(function(childSection) {
                                    if(childSection === openedSection){
                                            selected = true;
                                    }
                            });
                    }
                    return selected;
            }

            function isOpen(section) {
                    return menu.isSectionSelected(section);
            }

            function toggleOpen(section) {
                    menu.toggleSelectSection(section);
            }

    });
