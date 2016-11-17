(function() {
    'use strict';
    
    angular
        .module('app.posts')
        .config(UserRouteConfig);
    
    UserRouteConfig.$inject = ['$stateProvider'];
    
    function UserRouteConfig($stateProvider) {
        $stateProvider
            .state("posts", {
                cache: false,
                url: "/posts",
                controller: "PostsController",
                controllerAs: "pc",
                templateUrl: "app/posts/posts.html",
                data : { pageTitle: 'Post List' }
            });
    }
        
})();