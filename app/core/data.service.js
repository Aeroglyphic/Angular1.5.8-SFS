(function() {
    'use strict';
    
    angular
        .module('app.core')
        .factory('dataService', dataService);
    
    dataService.$inject = ['$http', 'exception'];
    
    function dataService($http, exception) {
        var _urlBase = 'http://localhost:3000';
        
        var service = {
            getUsers: getUsers,
            getUserDetail: getUserDetail,
            updateUser: updateUser,
            getPosts: getPosts,
            getUserTodos: getUserTodos
        };
        
        return service;
        
        function getUsers(){
            return $http.get(_urlBase + '/users')
                .then(getUsersComplete)
                .catch(getUsersFailed);
        }
        function getUsersComplete(response){
            return response.data;
        }
        function getUsersFailed(error){
            exception.catcher('XHR Failed for getUsers')(error.data);
        }
        
        function getUserDetail(id){
            return $http.get(_urlBase + '/users/' + id)
                .then(getUserDetailComplete)
                .catch(getUserDetailFailed);
        }
        function getUserDetailComplete(response){
            return response.data;
        }
        function getUserDetailFailed(error){
            exception.catcher('XHR Failed for getUserDetail')(error.data);
        }
        
        function updateUser(user){
            return $http.put(_urlBase + '/users/' + user.id, user)
                .then(updateUserComplete)
                .catch(updateUserFailed);
        }
        function updateUserComplete(response){
            return response.data;
        }
        function updateUserFailed(error){
            exception.catcher('XHR Failed for updateUser')(error.data);
        }
        
        function getPosts(){
            return $http.get(_urlBase + '/posts')
                .then(getPostsComplete)
                .catch(getPostsFailed);
        }
        function getPostsComplete(response){
            return response.data;
        }
        function getPostsFailed(error){
            exception.catcher('XHR Failed for getPosts')(error.data);
        }
        
        function getUserTodos(userID){
            return $http.get(_urlBase + '/todos?userId=' + userID)
                .then(getUserTodosComplete)
                .catch(getUserTodosFailed);
        }
        function getUserTodosComplete(response){
            return response.data;
        }
        function getUserTodosFailed(error){
            exception.catcher('XHR Failed for getUserTodos')(error.data);
        }
    }    
})();