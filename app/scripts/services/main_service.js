(function () {
    'use strict';

    angular
        .module('quitandaApp')
        .service('main_service', main_service);

    main_service.$inject = ['$http'];
    function main_service($http) {

        this.dados_tabela = function() {
            return $http({
                url: '/produto/find-all',
                responseType: 'json',
                method: "GET"
            }).then(function (response) {
                return response.data;
            });   
        }

    }
})();