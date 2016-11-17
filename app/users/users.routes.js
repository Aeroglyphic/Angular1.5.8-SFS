(function() {
    'use strict';
    
    angular
        .module('app.users')
        .config(UserRouteConfig);
    
    UserRouteConfig.$inject = ['$stateProvider'];
    
    function UserRouteConfig($stateProvider) {
        $stateProvider
            .state("/", {
                url: "",
                redirectTo: 'index'
            })
            .state("index", {
                cache: false,
                url: "/index",
                controller: "UsersController",
                controllerAs: "uc",
                templateUrl: "app/users/users.html",
                data : { pageTitle: 'User List' }
            })
            .state("user-detail", {
                cache: false,
                url: "/user/:userID",
                controller: "UserDetailController",
                controllerAs: "udet",
                templateUrl: "app/users/users-detail.html",
                data : { pageTitle: 'User Detail' }
            })
            .state("user-todos", {
                cache: false,
                url: "/user/:userID/todos",
                controller: "UserTodoController",
                controllerAs: "utc",
                templateUrl: "app/users/todos/todos.html",
                data : { pageTitle: 'User Todos' }
            });
    }
        
})();