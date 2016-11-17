(function(){
    'use strict';
    
    /**
    * @desc directive per la selezione della lingua
    * @example <select-lang></select-lang>
    */
    angular
        .module('app.translate')
        .directive('selectLang', selectLang);
    
    function selectLang(){
        var directive = {
            restrict: 'E',
            templateUrl: 'app/translate/translate.directive.html',
            controller: LangController,
            controllerAs: 'lang',
            bindToController: true
        }
        
        return directive;
    }
    
    LangController.$inject = ['$translate'];
    
    function LangController($translate){
        var vm = this;
        
        vm.changeLanguage = function(key) {
            $translate.use(key);
        }
    }
            
})();