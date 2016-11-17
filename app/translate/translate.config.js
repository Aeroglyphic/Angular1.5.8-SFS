(function() {
    'use strict';
    
    angular
        .module('app.translate')
        .config(TranslateConfig);
    
    TranslateConfig.$inject = ['$translateProvider'];
    
    function TranslateConfig($translateProvider) {
        $translateProvider
            .translations('it', {
                TITLE: 'Angular1-SFS',
                BUTTON_LANG_IT: 'italiano',
                BUTTON_LANG_EN: 'inglese',
                ID: 'ID',
                NAME: 'Nome',
                EMAIL: 'Indirizzo Email',
                USERNAME: 'Nome Utente',
                PHONE: 'Telefono',
                USER_DETAIL: 'Dettaglio Utente',
                UPDATE_USER: 'Aggiorna Utente',
                BACK_TO_USER: 'Torna all\'utente',
                BACK_TO_LIST: 'Torna alla lista',
                SAY_NAME: 'Librerie esterna (custom)',
                SHOW_TODOS: 'Mastra Lista Todo',
                GO_TO_USER: 'Vai all\'utente',
                USER_LIST: 'Lista Utenti',
                POST_LIST: 'Lista Articoli'
            })
            .translations('en', {
                TITLE: 'Angular1-SFS',
                BUTTON_LANG_IT: 'italian',
                BUTTON_LANG_EN: 'english',
                ID: 'ID',
                NAME: 'Name',
                EMAIL: 'Email',
                USERNAME: 'Username',
                PHONE: 'Phone',
                USER_DETAIL: 'User Detail',
                UPDATE_USER: 'Update User',
                BACK_TO_USER: 'Back to user',
                BACK_TO_LIST: 'Back to list',
                SAY_NAME: 'Ext Library (custom)',
                SHOW_TODOS: 'Show Todo List',
                GO_TO_USER: 'Go to user',
                USER_LIST: 'User List',
                POST_LIST: 'Post List'
            });
        
        $translateProvider.preferredLanguage('en');
        $translateProvider.fallbackLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider.useLocalStorage();
    }
    
})();
