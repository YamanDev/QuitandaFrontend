'use strict';

/**
 * @ngdoc function
 * @name quitandaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quitandaApp
 */
angular.module('quitandaApp')
  .controller('MainCtrl', function ($location, $scope) {

    //$location.path("/produtos");

    $scope.valores_produtos_grafico = [55, 100, 75];

    $scope.produtos_grafico = ["Frutas", "Legumes", "Verduras"];

    var opcoes_grafico = {
      title: {
        display: true,
        text: 'Estoque de Alimentos',
        position: 'top'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }

    var ctx_grafico = $("#grafico-estoque").get(0).getContext("2d");
    var chart_grafico = new Chart(ctx_grafico, {
      type: 'bar',
      data: {
          labels: $scope.produtos_grafico,
          datasets: [
          {
              label: "Estoque de Alimentos",
              data: $scope.valores_produtos_grafico,
              borderColor: ['rgb(102, 0, 0)','rgb(76, 153, 0)', 'rgb(204, 102, 0)'],
              backgroundColor: ['rgb(102, 0, 0)', 'rgb(76, 153, 0)', 'rgb(204, 102, 0)'],
          }
          ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Estoque de Alimentos',
          position: 'top',
          fontSize: 16
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  });
