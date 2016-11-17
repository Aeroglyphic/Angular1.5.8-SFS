(function() {
    'use strict';
    
    angular
        .module('app.users')
        .controller('UsersController', UsersController);
    
    UsersController.$inject = ['$scope', 'dataService'];
    
    function UsersController($scope, dataService) {
        var vm = this;
        
        vm.users = [];
        
        activate();
        
        function activate() {
            return getUsers().then(function(){
                console.log("loaded user list!");
            });
        }
        
        function getUsers(){
            return dataService.getUsers()
            .then(function(data){
                if(data) {
                    vm.users = data;  
                    return vm.users;
                }
            });
        }
    }    
})();