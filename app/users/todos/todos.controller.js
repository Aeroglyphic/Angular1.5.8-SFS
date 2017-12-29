(function() {
  'use script';

  angular
    .module('app.users')
    .controller('UserTodoController', UserTodoController);

  UserTodoController.$inject = ['$scope', '$stateParams', 'dataService'];

  function UserTodoController($scope, $stateParams, dataService) {
    var vm = this;

    vm.todos = [];
    vm.userID = $stateParams.userID;

    activate(vm.userID);

    function activate(userID) {
      return getUserTodos(userID);
    }
    function getUserTodos(userID) {
      return dataService.getUserTodos(userID).then(function(data) {
        if (data) {
          vm.todos = data;
          return vm.todos;
        }
      });
    }
  }
})();
