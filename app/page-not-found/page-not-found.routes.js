(function() {
    'use strict';
    
    angular
        .module('app.pageNotFound')
        .config(PageNotFoundRouteConfig);
    
    PageNotFoundRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function PageNotFoundRouteConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/page-not-found");
        $stateProvider
            .state("page-not-found", {
                cache: false,
                url: "/page-not-found",
                controller: "PageNotFoundController",
                controllerAs: "pnfc",
                templateUrl: "app/page-not-found/page-not-found.html",
                data : { pageTitle: 'Page Not Found' }
            });
    }
        
})();