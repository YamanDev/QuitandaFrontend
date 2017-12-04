'use strict';

/**
 * @ngdoc function
 * @name quitandaApp.controller:AboutCtrl
 * @description
 * Controller da pagina de produtos
 */
angular.module('quitandaApp')
  .controller('produtos_controller', function ($scope, produtos_service) {

    $scope.carregando = true;
    produtos_service.dados_tabela()
      .then(function (data) {
        $scope.carregando = false;
        $scope.lista_dados_tabela = data;
      }, function (reason) {
        $scope.carregando = false;
        console.log(reason);
      })

  });
