(function() {
    'use strict';
    
    angular
        .module('app.pageNotFound')
        .controller('PageNotFoundController', PageNotFoundController);
    
    PageNotFoundController.$inject = ['$scope'];
    
    function PageNotFoundController($scope) {
        var vm = this;
    }    
})();