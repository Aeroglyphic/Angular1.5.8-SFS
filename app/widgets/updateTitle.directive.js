(function() {
    'use strict';
    
    /**
    * @desc directive per l'update del titolo della pagina web
    * @example <title update-title></title>
    */
    angular
        .module('app.widgets')
        .directive('updateTitle', updateTitle);
    
    updateTitle.$inject = ['$rootScope', '$timeout'];
    
    function updateTitle($rootScope, $timeout){
        var directive = {
            restrict: 'A',
            link: link
        }
        
        return directive;
        
        function link(scope, element) {
            var listener = function(event, toState) {
                var title = 'Default Title';
                if (toState.data && toState.data.pageTitle)
                    title = toState.data.pageTitle;
                $timeout(function() {
                    element.text(title);
                }, 0, false);
            };
            $rootScope.$on('$stateChangeSuccess', listener);
        }
    }

})();