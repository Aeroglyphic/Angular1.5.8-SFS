(function() {
  'use strict';

  angular
    .module('app.users')
    .controller('UserDetailController', UserDetailController);

  UserDetailController.$inject = [
    '$scope',
    '$stateParams',
    'dataService',
    'customWidget'
  ];

  function UserDetailController(
    $scope,
    $stateParams,
    dataService,
    customWidget
  ) {
    var vm = this;

    vm.user = {};
    vm.userID = $stateParams.userID;
    vm.updateUser = updateUser;
    vm.sayName = sayName;

    activate(vm.userID);

    function activate(userID) {
      return getUserDetail(userID);
    }
    function getUserDetail(userID) {
      return dataService.getUserDetail(userID).then(function(data) {
        if (data) {
          vm.user = data;
          return vm.user;
        }
      });
    }

    function updateUser(user) {
      return dataService.updateUser(user);
    }

    function sayName(firstName, lastName) {
      return customWidget.fullName(firstName, lastName);
    }
  }
})();
