(function() {
    'use strict';
    
    angular
        .module('app')
        .run(myRunBlock);
            
    myRunBlock.$inject = ['$rootScope', '$state'];
    
    function myRunBlock($rootScope, $state){
        //loading nel routing
        $rootScope.$on('$stateChangeStart', 
        function(event, toState, toParams, fromState, fromParams){ 
            if (toState.redirectTo) {
                event.preventDefault();
                $state.go(toState.redirectTo, toParams, {location: 'replace'})
            }
            NProgress.start();
        });

        $rootScope.$on('$stateChangeSuccess', 
        function(event, toState, toParams, fromState, fromParams){
            NProgress.done();
        });

    }
})();