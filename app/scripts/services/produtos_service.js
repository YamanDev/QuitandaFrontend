(function () {
    'use strict';

    angular
        .module('quitandaApp')
        .service('produtos_service', produtos_service);

    produtos_service.$inject = ['$http'];
    function produtos_service($http) {

        this.dados_tabela = function() {
            return $http({
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                url: '/produto/find-all',
                responseType: 'json',
                method: "GET",
                params: {
                    format: 'jsonp',
                    callback: 'JSON_CALLBACK'
                }
            }).then(function (response) {
                return response.data;
            });   
        }

    }
})();