(function() {
    'use script';
    
    angular
        .module('app.posts')
        .controller('PostsController', PostsController);
    
    PostsController.$inject = ['$scope', 'dataService'];
    
    function PostsController($scope, dataService) {
        var vm = this;
        
        vm.posts = [];
        
        activate();
        
        function activate() {
            return getPosts().then(function(){
                console.log("loaded posts!");
            });
        }
        function getPosts(){
            return dataService.getPosts()
            .then(function(data){
                if(data) {
                    vm.posts = data;
                    return vm.posts;
                }
            });
        }
    }
    
})();